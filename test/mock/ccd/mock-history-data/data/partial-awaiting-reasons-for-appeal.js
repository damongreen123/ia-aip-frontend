const partialAwaitingReasonsForAppealHistoryEvent = {
  auditEvents: [ {
    'id': 'submitAppeal',
    'event': { 'eventName': 'Submit your appeal', 'description': 'Submit appeal case AIP' },
    'user': { 'id': 'ef12998f-e2fb-46de-ae1f-51f4033c929f', 'lastName': 'Citizen Admin', 'firstName': 'Alex' },
    'createdDate': '2020-02-27T14:18:54.605',
    'caseTypeVersion': 5,
    'state': { 'id': 'appealSubmitted', 'name': 'Appeal submitted' },
    'data': {
      'appellantHasFixedAddress': 'Yes',
      'legalRepName': '',
      'subscriptions': [ {
        'id': 'c7b91c10-830e-4f86-b0c0-21cd3641e821',
        'value': { 'email': 'alejandro@example.net', 'wantsSms': 'No', 'subscriber': 'appellant', 'wantsEmail': 'Yes' }
      } ],
      'legalRepCompany': '',
      'currentCaseStateVisibleToLegalRepresentative': 'appealSubmitted',
      'appealGroundsForDisplay': [],
      'legalRepresentativeName': 'Alex Citizen Admin',
      'legalRepresentativeEmailAddress': 'citizen@example.net',
      'currentCaseStateVisibleToHomeOfficeAll': 'appealSubmitted',
      'appealSubmissionDate': '2020-02-27',
      'legalRepresentativeDocuments': [ {
        'id': '1',
        'value': {
          'tag': 'appealSubmission',
          'document': {
            'document_url': 'http://dm-store:4506/documents/d96a03f3-af07-463d-bd65-1e2b4fd25a5b',
            'document_filename': 'PA 50004 2020-sad-appeal-form.PDF',
            'document_binary_url': 'http://dm-store:4506/documents/d96a03f3-af07-463d-bd65-1e2b4fd25a5b/binary'
          },
          'description': '',
          'dateUploaded': '2020-02-27'
        }
      } ],
      'currentCaseStateVisibleToHomeOfficeLart': 'appealSubmitted',
      'uploadAddendumEvidenceLegalRepActionAvailable': 'No',
      'appellantAddress': {
        'County': '',
        'Country': 'United Kingdom',
        'PostCode': 'W1W 7RT',
        'PostTown': 'LONDON',
        'AddressLine1': '60 GREAT PORTLAND STREET',
        'AddressLine2': ''
      },
      'haveHearingAttendeesAndDurationBeenRecorded': 'No',
      'appealReferenceNumber': 'PA/50004/2020',
      'uploadAddendumEvidenceActionAvailable': 'No',
      'appealType': 'protection',
      'appellantGivenNames': 'Aleka',
      'appellantFamilyName': 'sad',
      'uploadAdditionalEvidenceActionAvailable': 'No',
      'hearingCentre': 'taylorHouse',
      'appellantNationalities': [ { 'id': 'd7f765d6-b114-476d-b52b-fbbdac2ae3ae', 'value': { 'code': 'AL' } } ],
      'homeOfficeDecisionDate': '2020-02-16',
      'changeDirectionDueDateActionAvailable': 'No',
      'submissionOutOfTime': 'No',
      'uploadAddendumEvidenceHomeOfficeActionAvailable': 'No',
      'uploadAdditionalEvidenceHomeOfficeActionAvailable': 'No',
      'appellantDateOfBirth': '1994-07-20',
      'currentCaseStateVisibleToHomeOfficeGeneric': 'appealSubmitted',
      'currentCaseStateVisibleToHomeOfficePou': 'appealSubmitted',
      'currentCaseStateVisibleToCaseOfficer': 'appealSubmitted',
      'currentCaseStateVisibleToHomeOfficeApc': 'appealSubmitted',
      'journeyType': 'aip',
      'currentCaseStateVisibleToAdminOfficer': 'appealSubmitted',
      'appellantNameForDisplay': 'Aleka sad',
      'notificationsSent': [ {
        'id': '1582812292791532_APPEAL_SUBMITTED_APPELLANT_AIP_EMAIL',
        'value': 'd82808a1-1cf6-49c3-ad06-94c6d3cddb06'
      }, { 'id': '1582812292791532_APPEAL_SUBMITTED_CASE_OFFICER', 'value': '4e09a202-5173-4ed0-836d-a3474b44a4e9' } ],
      'searchPostcode': 'W1W 7RT',
      'sendDirectionActionAvailable': 'Yes',
      'homeOfficeReferenceNumber': 'A1234567'
    }
  }, {
    'id': 'editAppeal',
    'event': { 'eventName': 'Edit appeal', 'description': 'Update appeal case AIP' },
    'user': { 'id': 'ef12998f-e2fb-46de-ae1f-51f4033c929f', 'lastName': 'Citizen Admin', 'firstName': 'Alex' },
    'createdDate': '2020-02-27T14:18:16.636',
    'caseTypeVersion': 5,
    'state': { 'id': 'appealStarted', 'name': 'Appeal started' },
    'data': {
      'appellantHasFixedAddress': 'Yes',
      'subscriptions': [ {
        'id': '5f1c3d7e-7f5b-47b8-8652-b7fde8360e1c',
        'value': { 'email': 'alejandro@example.net', 'wantsSms': 'No', 'subscriber': 'appellant', 'wantsEmail': 'Yes' }
      } ],
      'currentCaseStateVisibleToLegalRepresentative': 'appealStarted',
      'appealGroundsForDisplay': [],
      'currentCaseStateVisibleToHomeOfficeAll': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeLart': 'appealStarted',
      'uploadAddendumEvidenceLegalRepActionAvailable': 'No',
      'appellantAddress': {
        'County': '',
        'Country': 'United Kingdom',
        'PostCode': 'W1W 7RT',
        'PostTown': 'LONDON',
        'AddressLine1': '60 GREAT PORTLAND STREET',
        'AddressLine2': ''
      },
      'haveHearingAttendeesAndDurationBeenRecorded': 'No',
      'appealReferenceNumber': 'DRAFT',
      'uploadAddendumEvidenceActionAvailable': 'No',
      'appealType': 'protection',
      'appellantGivenNames': 'Aleka',
      'appellantFamilyName': 'sad',
      'uploadAdditionalEvidenceActionAvailable': 'No',
      'appellantNationalities': [ { 'id': 'c1c6b195-aecd-46fe-a513-adf90516efec', 'value': { 'code': 'AL' } } ],
      'homeOfficeDecisionDate': '2020-02-16',
      'changeDirectionDueDateActionAvailable': 'No',
      'submissionOutOfTime': 'No',
      'uploadAddendumEvidenceHomeOfficeActionAvailable': 'No',
      'uploadAdditionalEvidenceHomeOfficeActionAvailable': 'No',
      'appellantDateOfBirth': '1994-07-20',
      'currentCaseStateVisibleToHomeOfficeGeneric': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficePou': 'appealStarted',
      'currentCaseStateVisibleToCaseOfficer': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeApc': 'appealStarted',
      'journeyType': 'aip',
      'currentCaseStateVisibleToAdminOfficer': 'appealStarted',
      'searchPostcode': 'W1W 7RT',
      'sendDirectionActionAvailable': 'No',
      'homeOfficeReferenceNumber': 'A1234567'
    }
  }, {
    'id': 'editAppeal',
    'event': { 'eventName': 'Edit appeal', 'description': 'Update appeal case AIP' },
    'user': { 'id': 'ef12998f-e2fb-46de-ae1f-51f4033c929f', 'lastName': 'Citizen Admin', 'firstName': 'Alex' },
    'createdDate': '2020-02-27T14:06:28.211',
    'caseTypeVersion': 5,
    'state': { 'id': 'appealStarted', 'name': 'Appeal started' },
    'data': {
      'appellantHasFixedAddress': 'Yes',
      'subscriptions': [ {
        'id': '22cb2e17-b51c-436f-a104-a19dd4222035',
        'value': { 'email': 'alejandro@example.net', 'wantsSms': 'No', 'subscriber': 'appellant', 'wantsEmail': 'Yes' }
      } ],
      'currentCaseStateVisibleToLegalRepresentative': 'appealStarted',
      'appealGroundsForDisplay': [],
      'currentCaseStateVisibleToHomeOfficeAll': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeLart': 'appealStarted',
      'uploadAddendumEvidenceLegalRepActionAvailable': 'No',
      'appellantAddress': {
        'County': '',
        'Country': 'United Kingdom',
        'PostCode': 'W1W 7RT',
        'PostTown': 'LONDON',
        'AddressLine1': '60 GREAT PORTLAND STREET',
        'AddressLine2': ''
      },
      'haveHearingAttendeesAndDurationBeenRecorded': 'No',
      'appealReferenceNumber': 'DRAFT',
      'uploadAddendumEvidenceActionAvailable': 'No',
      'appellantGivenNames': 'Aleka',
      'appellantFamilyName': 'sad',
      'uploadAdditionalEvidenceActionAvailable': 'No',
      'appellantNationalities': [ { 'id': '64c870db-ded9-40a5-8434-d94dac3d65d9', 'value': { 'code': 'AL' } } ],
      'homeOfficeDecisionDate': '2020-02-16',
      'changeDirectionDueDateActionAvailable': 'No',
      'submissionOutOfTime': 'No',
      'uploadAddendumEvidenceHomeOfficeActionAvailable': 'No',
      'uploadAdditionalEvidenceHomeOfficeActionAvailable': 'No',
      'appellantDateOfBirth': '1994-07-21',
      'currentCaseStateVisibleToHomeOfficeGeneric': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficePou': 'appealStarted',
      'currentCaseStateVisibleToCaseOfficer': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeApc': 'appealStarted',
      'journeyType': 'aip',
      'currentCaseStateVisibleToAdminOfficer': 'appealStarted',
      'searchPostcode': 'W1W 7RT',
      'sendDirectionActionAvailable': 'No',
      'homeOfficeReferenceNumber': 'A1234567'
    }
  }, {
    'id': 'editAppeal',
    'event': { 'eventName': 'Edit appeal', 'description': 'Update appeal case AIP' },
    'user': { 'id': 'ef12998f-e2fb-46de-ae1f-51f4033c929f', 'lastName': 'Citizen Admin', 'firstName': 'Alex' },
    'createdDate': '2020-02-27T14:05:50.398',
    'caseTypeVersion': 5,
    'state': { 'id': 'appealStarted', 'name': 'Appeal started' },
    'data': {
      'appellantHasFixedAddress': 'Yes',
      'currentCaseStateVisibleToLegalRepresentative': 'appealStarted',
      'appealGroundsForDisplay': [],
      'currentCaseStateVisibleToHomeOfficeAll': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeLart': 'appealStarted',
      'uploadAddendumEvidenceLegalRepActionAvailable': 'No',
      'appellantAddress': {
        'County': '',
        'Country': 'United Kingdom',
        'PostCode': 'W1W 7RT',
        'PostTown': 'LONDON',
        'AddressLine1': '60 GREAT PORTLAND STREET',
        'AddressLine2': ''
      },
      'haveHearingAttendeesAndDurationBeenRecorded': 'No',
      'appealReferenceNumber': 'DRAFT',
      'uploadAddendumEvidenceActionAvailable': 'No',
      'appellantGivenNames': 'Aleka',
      'appellantFamilyName': 'sad',
      'uploadAdditionalEvidenceActionAvailable': 'No',
      'appellantNationalities': [ { 'id': '4f9aad8e-1f08-4f60-9faf-b2e7d3d781d8', 'value': { 'code': 'AL' } } ],
      'homeOfficeDecisionDate': '2020-02-16',
      'changeDirectionDueDateActionAvailable': 'No',
      'submissionOutOfTime': 'No',
      'uploadAddendumEvidenceHomeOfficeActionAvailable': 'No',
      'uploadAdditionalEvidenceHomeOfficeActionAvailable': 'No',
      'appellantDateOfBirth': '1994-07-21',
      'currentCaseStateVisibleToHomeOfficeGeneric': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficePou': 'appealStarted',
      'currentCaseStateVisibleToCaseOfficer': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeApc': 'appealStarted',
      'journeyType': 'aip',
      'currentCaseStateVisibleToAdminOfficer': 'appealStarted',
      'searchPostcode': 'W1W 7RT',
      'sendDirectionActionAvailable': 'No',
      'homeOfficeReferenceNumber': 'A1234567'
    }
  }, {
    'id': 'editAppeal',
    'event': { 'eventName': 'Edit appeal', 'description': 'Update appeal case AIP' },
    'user': { 'id': 'ef12998f-e2fb-46de-ae1f-51f4033c929f', 'lastName': 'Citizen Admin', 'firstName': 'Alex' },
    'createdDate': '2020-02-27T14:05:42.524',
    'caseTypeVersion': 5,
    'state': { 'id': 'appealStarted', 'name': 'Appeal started' },
    'data': {
      'currentCaseStateVisibleToLegalRepresentative': 'appealStarted',
      'appealGroundsForDisplay': [],
      'currentCaseStateVisibleToHomeOfficeAll': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeLart': 'appealStarted',
      'uploadAddendumEvidenceLegalRepActionAvailable': 'No',
      'haveHearingAttendeesAndDurationBeenRecorded': 'No',
      'appealReferenceNumber': 'DRAFT',
      'uploadAddendumEvidenceActionAvailable': 'No',
      'appellantGivenNames': 'Aleka',
      'appellantFamilyName': 'sad',
      'uploadAdditionalEvidenceActionAvailable': 'No',
      'appellantNationalities': [ { 'id': '2c081f28-0a3a-4332-82d7-207150d44475', 'value': { 'code': 'AL' } } ],
      'homeOfficeDecisionDate': '2020-02-16',
      'changeDirectionDueDateActionAvailable': 'No',
      'submissionOutOfTime': 'No',
      'uploadAddendumEvidenceHomeOfficeActionAvailable': 'No',
      'uploadAdditionalEvidenceHomeOfficeActionAvailable': 'No',
      'appellantDateOfBirth': '1994-07-21',
      'currentCaseStateVisibleToHomeOfficeGeneric': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficePou': 'appealStarted',
      'currentCaseStateVisibleToCaseOfficer': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeApc': 'appealStarted',
      'journeyType': 'aip',
      'currentCaseStateVisibleToAdminOfficer': 'appealStarted',
      'sendDirectionActionAvailable': 'No',
      'homeOfficeReferenceNumber': 'A1234567'
    }
  }, {
    'id': 'editAppeal',
    'event': { 'eventName': 'Edit appeal', 'description': 'Update appeal case AIP' },
    'user': { 'id': 'ef12998f-e2fb-46de-ae1f-51f4033c929f', 'lastName': 'Citizen Admin', 'firstName': 'Alex' },
    'createdDate': '2020-02-27T14:05:39.067',
    'caseTypeVersion': 5,
    'state': { 'id': 'appealStarted', 'name': 'Appeal started' },
    'data': {
      'currentCaseStateVisibleToLegalRepresentative': 'appealStarted',
      'appealGroundsForDisplay': [],
      'currentCaseStateVisibleToHomeOfficeAll': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeLart': 'appealStarted',
      'uploadAddendumEvidenceLegalRepActionAvailable': 'No',
      'haveHearingAttendeesAndDurationBeenRecorded': 'No',
      'appealReferenceNumber': 'DRAFT',
      'uploadAddendumEvidenceActionAvailable': 'No',
      'appellantGivenNames': 'Aleka',
      'appellantFamilyName': 'sad',
      'uploadAdditionalEvidenceActionAvailable': 'No',
      'homeOfficeDecisionDate': '2020-02-16',
      'changeDirectionDueDateActionAvailable': 'No',
      'submissionOutOfTime': 'No',
      'uploadAddendumEvidenceHomeOfficeActionAvailable': 'No',
      'uploadAdditionalEvidenceHomeOfficeActionAvailable': 'No',
      'appellantDateOfBirth': '1994-07-21',
      'currentCaseStateVisibleToHomeOfficeGeneric': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficePou': 'appealStarted',
      'currentCaseStateVisibleToCaseOfficer': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeApc': 'appealStarted',
      'journeyType': 'aip',
      'currentCaseStateVisibleToAdminOfficer': 'appealStarted',
      'sendDirectionActionAvailable': 'No',
      'homeOfficeReferenceNumber': 'A1234567'
    }
  }, {
    'id': 'editAppeal',
    'event': { 'eventName': 'Edit appeal', 'description': 'Update appeal case AIP' },
    'user': { 'id': 'ef12998f-e2fb-46de-ae1f-51f4033c929f', 'lastName': 'Citizen Admin', 'firstName': 'Alex' },
    'createdDate': '2020-02-27T14:05:30.652',
    'caseTypeVersion': 5,
    'state': { 'id': 'appealStarted', 'name': 'Appeal started' },
    'data': {
      'uploadAddendumEvidenceHomeOfficeActionAvailable': 'No',
      'uploadAdditionalEvidenceHomeOfficeActionAvailable': 'No',
      'currentCaseStateVisibleToLegalRepresentative': 'appealStarted',
      'appealGroundsForDisplay': [],
      'currentCaseStateVisibleToHomeOfficeAll': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeLart': 'appealStarted',
      'uploadAddendumEvidenceLegalRepActionAvailable': 'No',
      'currentCaseStateVisibleToHomeOfficeGeneric': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficePou': 'appealStarted',
      'haveHearingAttendeesAndDurationBeenRecorded': 'No',
      'currentCaseStateVisibleToCaseOfficer': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeApc': 'appealStarted',
      'appealReferenceNumber': 'DRAFT',
      'uploadAddendumEvidenceActionAvailable': 'No',
      'journeyType': 'aip',
      'appellantGivenNames': 'Aleka',
      'appellantFamilyName': 'sad',
      'uploadAdditionalEvidenceActionAvailable': 'No',
      'currentCaseStateVisibleToAdminOfficer': 'appealStarted',
      'homeOfficeDecisionDate': '2020-02-16',
      'sendDirectionActionAvailable': 'No',
      'changeDirectionDueDateActionAvailable': 'No',
      'submissionOutOfTime': 'No',
      'homeOfficeReferenceNumber': 'A1234567'
    }
  }, {
    'id': 'editAppeal',
    'event': { 'eventName': 'Edit appeal', 'description': 'Update appeal case AIP' },
    'user': { 'id': 'ef12998f-e2fb-46de-ae1f-51f4033c929f', 'lastName': 'Citizen Admin', 'firstName': 'Alex' },
    'createdDate': '2020-02-27T14:05:23.387',
    'caseTypeVersion': 5,
    'state': { 'id': 'appealStarted', 'name': 'Appeal started' },
    'data': {
      'uploadAddendumEvidenceHomeOfficeActionAvailable': 'No',
      'uploadAdditionalEvidenceHomeOfficeActionAvailable': 'No',
      'currentCaseStateVisibleToLegalRepresentative': 'appealStarted',
      'appealGroundsForDisplay': [],
      'currentCaseStateVisibleToHomeOfficeAll': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeLart': 'appealStarted',
      'uploadAddendumEvidenceLegalRepActionAvailable': 'No',
      'currentCaseStateVisibleToHomeOfficeGeneric': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficePou': 'appealStarted',
      'haveHearingAttendeesAndDurationBeenRecorded': 'No',
      'currentCaseStateVisibleToCaseOfficer': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeApc': 'appealStarted',
      'appealReferenceNumber': 'DRAFT',
      'uploadAddendumEvidenceActionAvailable': 'No',
      'journeyType': 'aip',
      'uploadAdditionalEvidenceActionAvailable': 'No',
      'currentCaseStateVisibleToAdminOfficer': 'appealStarted',
      'homeOfficeDecisionDate': '2020-02-16',
      'sendDirectionActionAvailable': 'No',
      'changeDirectionDueDateActionAvailable': 'No',
      'submissionOutOfTime': 'No',
      'homeOfficeReferenceNumber': 'A1234567'
    }
  }, {
    'id': 'editAppeal',
    'event': { 'eventName': 'Edit appeal', 'description': 'Update appeal case AIP' },
    'user': { 'id': 'ef12998f-e2fb-46de-ae1f-51f4033c929f', 'lastName': 'Citizen Admin', 'firstName': 'Alex' },
    'createdDate': '2020-02-27T14:05:06.662',
    'caseTypeVersion': 5,
    'state': { 'id': 'appealStarted', 'name': 'Appeal started' },
    'data': {
      'uploadAddendumEvidenceHomeOfficeActionAvailable': 'No',
      'uploadAdditionalEvidenceHomeOfficeActionAvailable': 'No',
      'currentCaseStateVisibleToLegalRepresentative': 'appealStarted',
      'appealGroundsForDisplay': [],
      'currentCaseStateVisibleToHomeOfficeAll': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeLart': 'appealStarted',
      'uploadAddendumEvidenceLegalRepActionAvailable': 'No',
      'currentCaseStateVisibleToHomeOfficeGeneric': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficePou': 'appealStarted',
      'haveHearingAttendeesAndDurationBeenRecorded': 'No',
      'currentCaseStateVisibleToCaseOfficer': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeApc': 'appealStarted',
      'appealReferenceNumber': 'DRAFT',
      'uploadAddendumEvidenceActionAvailable': 'No',
      'journeyType': 'aip',
      'uploadAdditionalEvidenceActionAvailable': 'No',
      'currentCaseStateVisibleToAdminOfficer': 'appealStarted',
      'sendDirectionActionAvailable': 'No',
      'changeDirectionDueDateActionAvailable': 'No',
      'homeOfficeReferenceNumber': 'A1234567'
    }
  }, {
    'id': 'startAppeal',
    'event': { 'eventName': 'Start your appeal', 'description': 'Create case AIP' },
    'user': { 'id': 'ef12998f-e2fb-46de-ae1f-51f4033c929f', 'lastName': 'Citizen Admin', 'firstName': 'Alex' },
    'createdDate': '2020-02-27T14:04:52.795',
    'caseTypeVersion': 5,
    'state': { 'id': 'appealStarted', 'name': 'Appeal started' },
    'data': {
      'uploadAddendumEvidenceHomeOfficeActionAvailable': 'No',
      'uploadAdditionalEvidenceHomeOfficeActionAvailable': 'No',
      'currentCaseStateVisibleToLegalRepresentative': 'appealStarted',
      'appealGroundsForDisplay': [],
      'currentCaseStateVisibleToHomeOfficeAll': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeLart': 'appealStarted',
      'uploadAddendumEvidenceLegalRepActionAvailable': 'No',
      'currentCaseStateVisibleToHomeOfficeGeneric': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficePou': 'appealStarted',
      'haveHearingAttendeesAndDurationBeenRecorded': 'No',
      'currentCaseStateVisibleToCaseOfficer': 'appealStarted',
      'currentCaseStateVisibleToHomeOfficeApc': 'appealStarted',
      'appealReferenceNumber': 'DRAFT',
      'uploadAddendumEvidenceActionAvailable': 'No',
      'journeyType': 'aip',
      'uploadAdditionalEvidenceActionAvailable': 'No',
      'currentCaseStateVisibleToAdminOfficer': 'appealStarted',
      'sendDirectionActionAvailable': 'No',
      'changeDirectionDueDateActionAvailable': 'No'
    }
  } ]
};


module.exports = { ...partialAwaitingReasonsForAppealHistoryEvent };