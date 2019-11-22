import { NextFunction, Request, Response, Router } from 'express';
import moment from 'moment';
import multer from 'multer';
import i18n from '../../locale/en.json';
import { paths } from '../paths';
import UpdateAppealService from '../service/update-appeal-service';
import { dateLetterSentValidation, homeOfficeNumberValidation, textAreaValidation } from '../utils/fields-validations';

function getHomeOfficeDetails(req: Request, res: Response, next: NextFunction) {
  try {
    const { homeOfficeRefNumber } = req.session.appeal.application || null;
    res.render('appeal-application/home-office/details.njk', { homeOfficeRefNumber });
  } catch (e) {
    next(e);
  }
}
function postHomeOfficeDetails(updateAppealService: UpdateAppealService) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validation = homeOfficeNumberValidation(req.body);
      if (validation) {
        return res.render('appeal-application/home-office/details.njk',
          {
            errors: validation,
            errorList: Object.values(validation),
            homeOfficeRefNumber: req.body.homeOfficeRefNumber
          }
        );
      }
      await updateAppealService.updateAppeal(req);
      req.session.appeal.application.homeOfficeRefNumber = req.body.homeOfficeRefNumber;
      return res.redirect(paths.homeOffice.letterSent);
    } catch (e) {
      next(e);
    }
  };
}

function getDateLetterSent(req: Request, res: Response, next: NextFunction) {
  try {
    const { dateLetterSent } = req.session.appeal.application;
    res.render('appeal-application/home-office/letter-sent.njk', { dateLetterSent });
  } catch (e) {
    next(e);
  }
}
function postDateLetterSent(updateAppealService: UpdateAppealService) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validation = dateLetterSentValidation(req.body);
      if (validation) {
        return res.render('appeal-application/home-office/letter-sent.njk', {
          error: validation,
          errorList: Object.values(validation)
        });
      }
      const { day, month, year } = req.body;
      const diffInDays = moment().diff(moment(`${year} ${month} ${day}`, 'YYYY MM DD'), 'days');
      if (diffInDays < 0) {
        const error: ValidationError = {
          key: 'day',
          text: i18n.validationErrors.futureDate,
          href: '#day'
        };
        return res.render('appeal-application/home-office/letter-sent.njk', {
          errorList: [error]
        });
      }

      req.session.appeal.application['dateLetterSent'] = {
        day,
        month,
        year
      };

      await updateAppealService.updateAppeal(req);

      if (diffInDays <= 14) return res.redirect(paths.taskList);
      req.session.appeal.application.isAppealLate = true;
      res.redirect(paths.homeOffice.appealLate);
    } catch (e) {
      next(e);
    }
  };
}

function getAppealLate(req: Request, res: Response, next: NextFunction) {
  try {
    const { application } = req.session.appeal;
    const appealLateReason: string = application.lateAppeal && application.lateAppeal.reason || null;
    const evidences: Evidences = application.lateAppeal && application.lateAppeal.evidences || {};
    res.render('appeal-application/home-office/appeal-late.njk',{
      appealLateReason,
      evidences: Object.values(evidences),
      evidenceCTA: paths.homeOffice.deleteEvidence
    });
  } catch (e) {
    next(e);
  }
}

function postAppealLate(req: Request, res: Response, next: NextFunction) {
  try {
    const validation = textAreaValidation(req.body['appeal-late'], 'appeal-late');
    const { application } = req.session.appeal;
    if (validation) {
      const evidences = application.lateAppeal && application.lateAppeal.evidences || {};
      return res.render('appeal-application/home-office/appeal-late.njk', {
        appealLate: req.body['appeal-late'],
        evidences: Object.values(evidences),
        error: validation,
        errorList: Object.values(validation)
      });
    }
    application.lateAppeal = {
      ...application.lateAppeal,
      reason: req.body['appeal-late']
    };
    return res.redirect(paths.taskList);
  } catch (e) {
    next(e);
  }
}

function postUploadEvidence(req: Request, res: Response, next: NextFunction) {
  try {
    if (req.file) {
      const fileDescription: string = req.body['file-description'];
      const validation = textAreaValidation(fileDescription, 'file-description');
      const { application } = req.session.appeal;
      if (validation) {
        const evidences = application.lateAppeal && application.lateAppeal.evidences || {};
        return res.render('appeal-application/home-office/appeal-late.njk', {
          appealLate: application.lateAppeal && application.lateAppeal.reason || null,
          evidences: Object.values(evidences),
          error: validation,
          errorList: Object.values(validation)
        });
      }
      application.lateAppeal = {
        ...application.lateAppeal,
        evidences: {
          ...(application.lateAppeal && application.lateAppeal.evidences || {}),
          [req.file.originalname]: {
            url: req.file.originalname,
            name: req.file.originalname,
            description: fileDescription
          },
          ...(application.lateAppeal && application.lateAppeal.evidences || {})
        }
      };
    }
    return res.redirect(paths.homeOffice.appealLate);
  } catch (e) {
    next(e);
  }
}

function postDeleteEvidence(req: Request, res: Response, next: NextFunction) {
  try {
    if (req.body.delete) {
      const fileId = Object.keys(req.body.delete)[0];
      delete req.session.appeal.application.lateAppeal.evidences[fileId];
    }
    return res.redirect(paths.homeOffice.appealLate);
  } catch (e) {
    next(e);
  }
}

const upload = multer().single('file-upload');

function setupHomeOfficeDetailsController(updateAppealService: UpdateAppealService): Router {
  const router = Router();
  router.get(paths.homeOffice.details, getHomeOfficeDetails);
  router.post(paths.homeOffice.details, postHomeOfficeDetails(updateAppealService));
  router.get(paths.homeOffice.letterSent, getDateLetterSent);
  router.post(paths.homeOffice.letterSent, postDateLetterSent(updateAppealService));
  router.get(paths.homeOffice.appealLate, getAppealLate);
  router.post(paths.homeOffice.appealLate, upload, postAppealLate);
  router.post(paths.homeOffice.uploadEvidence, upload, postUploadEvidence);
  router.post(paths.homeOffice.deleteEvidence, upload, postDeleteEvidence);
  return router;
}

export {
  getDateLetterSent,
  getHomeOfficeDetails,
  postDateLetterSent,
  postHomeOfficeDetails,
  getAppealLate,
  postAppealLate,
  postDeleteEvidence,
  postUploadEvidence,
  setupHomeOfficeDetailsController
};
