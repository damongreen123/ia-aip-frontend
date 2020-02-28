import { NextFunction, Request, Response } from 'express';
import {
  getSupportingEvidenceDeleteFile,
  getSupportingEvidenceUploadPage,
  postSupportingEvidenceUploadFile,
  setupReasonsForAppealController
} from '../../../../app/controllers/reasons-for-appeal/reason-for-appeal';
import { paths } from '../../../../app/paths';
import { DocumentManagementService } from '../../../../app/service/document-management-service';
import UpdateAppealService from '../../../../app/service/update-appeal-service';
import Logger from '../../../../app/utils/logger';
import { expect, sinon } from '../../../utils/testUtils';

const express = require('express');

describe('Supporting Evidence Upload Controller', () => {
  let sandbox: sinon.SinonSandbox;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;
  let updateAppealService: Partial<UpdateAppealService>;
  let documentManagementService: Partial<DocumentManagementService>;
  const logger: Logger = new Logger();

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    req = {
      query: {},
      session: {
        appeal: {
          application: {
            contactDetails: {}
          },
          reasonsForAppeal: {}
        }
      } as Partial<Appeal>,
      cookies: {},
      idam: {
        userDetails: {}
      },
      app: {
        locals: {
          logger
        }
      } as any
    } as Partial<Request>;

    updateAppealService = { submitEvent: sandbox.stub() };
    documentManagementService = { uploadFile: sandbox.stub(), deleteFile: sandbox.stub() };

    res = {
      locals: sandbox.spy(),
      render: sandbox.stub(),
      send: sandbox.stub(),
      redirect: sinon.spy()
    } as Partial<Response>;

    next = sandbox.stub() as NextFunction;
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('setupReasonsForAppealController', () => {
    it('should setup the routes', () => {
      const routerGetStub: sinon.SinonStub = sandbox.stub(express.Router, 'get');
      const routerPOSTStub: sinon.SinonStub = sandbox.stub(express.Router, 'post');

      const deps = {
        updateAppealService: updateAppealService as UpdateAppealService,
        documentManagementService: documentManagementService as DocumentManagementService
      };
      setupReasonsForAppealController(deps);
      expect(routerGetStub).to.have.been.calledWith(paths.reasonsForAppeal.supportingEvidenceUpload);
      expect(routerPOSTStub).to.have.been.calledWith(paths.reasonsForAppeal.supportingEvidenceUploadFile);
      expect(routerGetStub).to.have.been.calledWith(paths.reasonsForAppeal.supportingEvidenceDeleteFile);
    });
  });

  describe('getSupportingEvidenceUploadPage', () => {
    it('should render reasons-for-appeal/supporting-evidence-upload-page.njk', () => {
      const evidences = {};
      req.session.appeal.reasonsForAppeal.evidences = evidences;

      getSupportingEvidenceUploadPage(req as Request, res as Response, next);

      expect(res.render).to.have.been.calledOnce.calledWith('reasons-for-appeal/supporting-evidence-upload-page.njk', {
        evidences: Object.values(evidences),
        evidenceCTA: paths.reasonsForAppeal.supportingEvidenceDeleteFile,
        previousPage: paths.reasonsForAppeal.supportingEvidence
      });
    });

    it('should render reasons-for-appeal/supporting-evidence-upload-page.njk with saved evidences', () => {
      const evidences = {
        someEvidenceId: {
          id: 'someEvidenceId',
          url: 'someUrlToTheFile',
          name: 'name.png'
        }
      };

      req.session.appeal.reasonsForAppeal.evidences = evidences;
      getSupportingEvidenceUploadPage(req as Request, res as Response, next);

      expect(res.render).to.have.been.calledOnce.calledWith('reasons-for-appeal/supporting-evidence-upload-page.njk', {
        evidences: Object.values(evidences),
        evidenceCTA: paths.reasonsForAppeal.supportingEvidenceDeleteFile,
        previousPage: paths.reasonsForAppeal.supportingEvidence
      });
    });

    it('getSupportingEvidenceUploadPage should catch exception and call next with the error', () => {
      const error = new Error('an error');
      res.render = sandbox.stub().throws(error);
      getSupportingEvidenceUploadPage(req as Request, res as Response, next);
      expect(next).to.have.been.calledOnce.calledWith(error);
    });
  });

  describe('postSupportingEvidenceUploadFile', () => {

    it('Should display validation error when no file has been selected and render reasons-for-appeal/reasons-for-appeal-upload.njk ', async () => {
      const expectedError: ValidationError = {
        href: '#uploadFile',
        key: 'uploadFile',
        text: 'Select a file'
      };

      await postSupportingEvidenceUploadFile(documentManagementService as DocumentManagementService)(req as Request, res as Response, next);
      expect(res.render).to.have.been.calledOnce.calledWith('reasons-for-appeal/supporting-evidence-upload-page.njk', {
        error: { uploadFile: expectedError },
        errorList: [ expectedError ],
        previousPage: paths.reasonsForAppeal.supportingEvidence
      });
    });

    it('Should display validation error LIMIT_FILE_TYPE and render reasons-for-appeal/reasons-for-appeal-upload.njk ', async () => {
      const expectedError: ValidationError = {
        href: '#uploadFile',
        key: 'uploadFile',
        text: 'The selected file must be a .jpg, .jpeg, .bmp, .tif, .tiff, .png, .pdf, .txt, .doc, .dot, .docx, .dotx, .xls, .xlt, .xla, .xlsx, .xltx, .xlsb, .ppt, .pot, .pps, .ppa, .pptx, .potx, .ppsx, .rtf, .csv'
      };

      res.locals.multerError = expectedError.text;

      await postSupportingEvidenceUploadFile(documentManagementService as DocumentManagementService)(req as Request, res as Response, next);
      expect(res.render).to.have.been.calledOnce.calledWith('reasons-for-appeal/supporting-evidence-upload-page.njk', {
        error: { uploadFile: expectedError },
        errorList: [ expectedError ],
        previousPage: paths.reasonsForAppeal.supportingEvidence
      });
    });

    it('Should display validation error LIMIT_FILE_SIZE and render reasons-for-appeal/reasons-for-appeal-upload.njk ', async () => {
      // Because the file size is being overriden on the development config for testing purposes
      // error message will show max file size as 0.001MB
      const expectedError: ValidationError = {
        href: '#uploadFile',
        key: 'uploadFile',
        text: 'The selected file must be smaller than 0.001MB'
      };

      res.locals.multerError = expectedError.text;

      await postSupportingEvidenceUploadFile(documentManagementService as DocumentManagementService)(req as Request, res as Response, next);
      expect(res.render).to.have.been.calledOnce.calledWith('reasons-for-appeal/supporting-evidence-upload-page.njk', {
        error: { uploadFile: expectedError },
        errorList: [ expectedError ],
        previousPage: paths.reasonsForAppeal.supportingEvidence
      });
    });

    it('Should succeed render reasons-for-appeal/reasons-for-appeal-upload.njk with errors ', async () => {

      const fileSizeInMb = 0.001;
      const mockSizeInBytes: number = fileSizeInMb * 1000 * 1000;
      const mockFile = {
        originalname: 'somefile.png',
        size: mockSizeInBytes
      } as Partial<Express.Multer.File>;

      req.file = mockFile as Express.Multer.File;

      const documentUploadResponse: DocumentUploadResponse = {
        id: 'someEvidenceId',
        url: 'someUrlToTheFile',
        name: 'name.png'
      };

      documentManagementService.uploadFile = sandbox.stub().returns(documentUploadResponse);

      await postSupportingEvidenceUploadFile(documentManagementService as DocumentManagementService)(req as Request, res as Response, next);
      expect(res.redirect).to.have.been.calledOnce.calledWith(paths.reasonsForAppeal.supportingEvidenceUpload);
    });

    it('getSupportingEvidenceDeleteFile should catch exception and call next with the error', async () => {
      req.session.appeal.reasonsForAppeal.evidences = {
        someEvidenceId: {
          id: 'someEvidenceId',
          url: 'someUrlToTheFile',
          name: 'name.png'
        }
      };
      req.query['id'] = 'someEvidenceId';

      const error = new Error('an error');
      res.redirect = sandbox.stub().throws(error);
      await getSupportingEvidenceDeleteFile(documentManagementService as DocumentManagementService)(req as Request, res as Response, next);
      expect(next).to.have.been.calledOnce.calledWith(error);
    });
  });

  describe('getSupportingEvidenceDeleteFile', () => {

    it('Should delete successfully when click on delete link and redirect to the upload-page page', async () => {
      req.session.appeal.reasonsForAppeal.evidences = {
        someEvidenceId: {
          id: 'someEvidenceId',
          url: 'someUrlToTheFile',
          name: 'name.png'
        }
      };
      req.query['id'] = 'someEvidenceId';
      await getSupportingEvidenceDeleteFile(documentManagementService as DocumentManagementService)(req as Request, res as Response, next);
      expect(req.session.appeal.reasonsForAppeal.evidences).to.not.haveOwnProperty('someEvidenceId');
      expect(res.redirect).to.have.been.calledOnce.calledWith(paths.reasonsForAppeal.supportingEvidenceUpload);
    });

    it('getSupportingEvidenceDeleteFile should catch exception and call next with the error', async () => {
      req.session.appeal.reasonsForAppeal.evidences = {
        someEvidenceId: {
          id: 'someEvidenceId',
          url: 'someUrlToTheFile',
          name: 'name.png'
        }
      };
      req.query['id'] = 'someEvidenceId';

      const error = new Error('an error');
      res.redirect = sandbox.stub().throws(error);
      await getSupportingEvidenceDeleteFile(documentManagementService as DocumentManagementService)(req as Request, res as Response, next);
      expect(next).to.have.been.calledOnce.calledWith(error);
    });
  });
})
;