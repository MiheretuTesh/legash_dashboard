export interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phonenumber: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  gender: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface ConfirmPasswordResetFormValues {
  newPassword: string;
  confirmNewPassword: string;
}

export interface ChangePasswordFormValues {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export type UserTableRow = {
  id: number;
  name: string;
  email: string;
  role: string;
  updated_at: string;
  edited_by: string;
};

export type AssetTableRow = {
  id: number;
  building: string;
  location: string;
  details: string;
  assumptions: string;
  updated_at: string;
  edited_by: string;
  users: number[];
  created_by?: number;
};

export type DraftFormsTableRow = {
  id: number;
  name: string;
  building: string;
  lastEditedAt: string;
};

export type SubmittedFormsTableRow = {
  id: number;
  name: string;
  building: string;
  submittedAt: string;
};

export type AssumtionFormValues = {
  company: string;
  buildingName: string;
  holdPeriod: number;
  exitYield: number;
  premiumForTechEnabledBuilding: string;
  coordinatesNS: string;
  coordinatesEW: string;
  constructionYear: string;
  climateZone: number;
  startYear: number;
  developmentState: string;
  capexBudget: string;
  buildingStoreys: number;
  totalNumberOfLifts: number;
  numberOfLiftsPerCore: number;
  totalLettableAreaSQM: number;
  totalLettableAreaSQFT: number;
  commonAreaSQM: number;
  commonAreaSQFT: number;
  totalBuildingAreaSQM: number;
  totalBuildingAreaSQFT: number;
  ervUponStabilizationSQM: number;
  ervUponStabilizationSQFT: number;
  ervUponStabilizationTotal: number;
  opexSQM: number;
  opexSQFT: number;
  opexTotal: number;
  newBuildCostsSQM: string;
  newBuildCostsSQFT: string;
  newBuildCostsTotal: string;
  minLowPSMLevel: number;
  inBetweenLowMediumPSM: number;
  mediumPSMLevel: number;
  inBetweenMediumHighPSM: number;
  highPSMLevel: number;
  maxPSMLevel: number;
  psmInterval: number;
  phaseOneYears: number;
  phaseOneEndYear: number;
  phaseOneRentIncreasePercentage: number;
  phaseOneRentRollcoveredPercentage: number;
  phaseTwoYears: number;
  phaseTwoEndYear: number;
  phaseTwoRentIncreasePercentage: number;
  phaseTwoRentRollcoveredPercentage: number;
  phaseThreeYears: number;
  phaseThreeEndYear: number;
  phaseThreeRentIncreasePercentage: number;
  phaseThreeRentRollcoveredPercentage: number;
  totalYears: number;
  totalRentIncreasePercentage: number;
  totalRentRollcoveredPercentage: number;
  buildingSize: number;
  opexInefficiency: string;
  capex: string;
  isLiftManagementSystemRequired: string;
  isItFeasibleToInstallPV: string;
  securitySystemsStandAlone: string;
  dhw: string;
  carPlacesNo: number;
  spacesCoveredbyEVPercentage: number;
  diversityOfNetworkConnections: string;
  carbonFootprintEngagement: string;
  cybersecurityConsultant: string;
  ITDataEngineer: string;
  cybersecurityConsultantOnDesignTeam: string;
  ITDataEngineerDesignTeam: string;
  smartStrategy: string;
  approach: string;
  TotalUserStories: string;
  UserStoriesWithTwolevelsNotThree: string;
  assetClass: string;
  country: string;
  ppaSupplier: string;
  plantAnnualOutput: string;
  buildingTotalSQM: string;
  year1PvDecay: number;
  degradationRate: number;
  opexAssumptionTotalSQM: string;
  outputPSM: string;
  capacityInstalled: string;
  maintenanceCosts: string;
  debtPercentage: string;
  interestPercentage: string;
  amortization: string;
  duration: string;
  exitMethod: string;
  exitYear: string;
  plantValueResidualPercentage: string;
  batteryValueResidualPercentage: string;
  inflationRate: number;
  TotalSqm: number;
  kWhPerYearOuputIMPUTFROMWEBSITE: number;
};

export type NewOnSiteChecklistFormValues = {
  company: string;
  systems1: string;
  systemsInstallation1: string;
  systemsEquipment1: string;
  systemsUsers1: string;
  systems1Q1: string;
  systems1Q2: string;
  systems1Q21: string;
  systems1Q3: string;
  systems1Q4: string;
  systems1Q5: string;
  systems1QImg: string; //
  systems2: string;
  systemsInstallation2: string;
  systemsEquipment2: string;
  systemsUsers2: string;
  systems2QImg: string; //
  systems2Q1: string;
  systems2Q2: string;
  systems22: string;
  systems21: string;
  systemsInstallation21: string;
  systemsEquipment21: string;
  systemsUsers21: string;
  systems21Img: string;
  systems2Q21: string;
  systemsInstallation22: string;
  systemsEquipment22: string;
  systemsUsers22: string;
  systems22Img: string;
  systems3: string;
  systemsInstallation3: string;
  systemsEquipment3: string;
  systemsUsers3: string;
  systems3Q1: string;
  systems3Q2: string;
  systems3QImg: string; //
  systems4: string;
  systemsInstallation4: string;
  systemsEquipment4: string;
  systemsUsers4: string;
  systems4Q1: string;
  systems4Q2: string;
  systems4Img: string; //
  systems5: string;
  systemsInstallation5: string;
  systemsEquipment5: string;
  systemsUsers5: string;
  systems5Q1: string;
  systems5Q2: string;
  systems5Q3: string;
  systems5QImg: string; //
  systems6: string;
  systemsInstallation6: string;
  systemsEquipment6: string;
  systemsUsers6: string;
  systems6Q1: string;
  systems6QImg: string; //
  systems7: string;
  systemsInstallation7: string;
  systemsEquipment7: string;
  systemsUsers7: string;
  systems7Q1: string;
  systems7Q2: string;
  systems7Img: string; //
  systems8: string;
  systemsInstallation8: string;
  systemsEquipment8: string;
  systemsUsers8: string;
  systems8Q1: string;
  systems8Q2: string;
  systems8Img: string; //
  systems9: string;
  systemsInstallation9: string;
  systemsEquipment9: string;
  systemsUsers9: string;
  systems9Q1: string;
  systems9Q2: string;
  systems9Q3: string;
  systems9Q4: string;
  systems9Img: string; //
  systems10: string;
  systems10Img: string; //
  systemsInstallation10: string;
  systemsEquipment10: string;
  systemsUsers10: string;
  systems10Q1: string;
  systems10Q2: string;
  systems10Q3: string;
  systems10Q4: string;
  systems11: string;
  systemsInstallation11: string;
  systemsEquipment11: string;
  systemsUsers11: string;
  systems11Q1: string;
  systems11Q2: string;
  systems11Q3: string;
  systems11Img: string; //
  systems12: string;
  systemsInstallation12: string;
  systemsEquipment12: string;
  systemsUsers12: string;
  systems12Q1: string;
  systems12Q2: string;
  systems12Img: string; //
  systems13: string;
  systems13Img: string; //
  systemsInstallation13: string;
  systemsEquipment13: string;
  systemsUsers13: string;
  systems13Q1: string;
  systems13Q2: string;
  systems13Q3: string;
  resourcesManagement1: string;
  resourcesManagementInstallation1: string;
  resourcesManagementEquipment1: string;
  resourcesManagementUsers1: string;
  resourcesManagement1Img: string; //
  resourcesManagement1Q1: string;
  resourcesManagement1Q2: string;
  resourcesManagement1Q3: string;
  resourcesManagement2: string;
  resourcesManagementInstallation2: string;
  resourcesManagementEquipment2: string;
  resourcesManagementUsers2: string;
  resourcesManagement2Img: string; //
  resourcesManagement2Q1: string;
  resourcesManagement2Q2: string;
  resourcesManagement3: string;
  resourcesManagementInstallation3: string;
  resourcesManagementEquipment3: string;
  resourcesManagementUsers3: string;
  resourcesManagement3Img: string; //
  resourcesManagement3Q1: string;
  resourcesManagement3Q2: string;
  resourcesManagement3Q3: string;
  resourcesManagement32: string;
  resourcesManagementInstallation32: string;
  resourcesManagementEquipment32: string;
  resourcesManagementUsers32: string;
  resourcesManagement32Img: string;
  resourcesManagement3Q21: string;
  resourcesManagement4: string;
  resourcesManagementInstallation4: string;
  resourcesManagementEquipment4: string;
  resourcesManagementUsers4: string;
  resourcesManagement4Img: string; //
  resourcesManagement4Q1: string;
  resourcesManagement4Q2: string;
  resourcesManagement4Q3: string;
  resourcesManagement5: string;
  resourcesManagementInstallation5: string;
  resourcesManagementEquipment5: string;
  resourcesManagementUsers5: string;
  resourcesManagement5Img: string; //
  resourcesManagement5Q1: string;
  resourcesManagement5Q2: string;
  resourcesManagement6: string;
  resourcesManagementInstallation6: string;
  resourcesManagementEquipment6: string;
  resourcesManagementUsers6: string;
  resourcesManagement6Img: string; //
  resourcesManagement6Q1: string;
  resourcesManagement6Q2: string;
  safetyAndSecurity1: string;
  safetyAndSecurityInstallation1: string;
  safetyAndSecurityEquipment1: string;
  safetyAndSecurityUsers1: string;
  safetyAndSecurity1Img: string; //
  safetyAndSecurity1Q1: string;
  safetyAndSecurity1Q2: string;
  safetyAndSecurity1Q3: string;
  safetyAndSecurity1Q4: string;
  safetyAndSecurity2: string;
  safetyAndSecurityInstallation2: string;
  safetyAndSecurityEquipment2: string;
  safetyAndSecurityUsers2: string;
  safetyAndSecurity2Img: string; //
  safetyAndSecurity2Q1: string;
  safetyAndSecurity3: string;
  safetyAndSecurityInstallation3: string;
  safetyAndSecurityEquipment3: string;
  safetyAndSecurityUsers3: string;
  safetyAndSecurity3Img: string; //
  safetyAndSecurity3Q1: string;
  safetyAndSecurity4: string;
  safetyAndSecurityInstallation4: string;
  safetyAndSecurityEquipment4: string;
  safetyAndSecurityUsers4: string;
  safetyAndSecurity4Img: string; //
  safetyAndSecurity4Q1: string;
  safetyAndSecurity4Q2: string;
  safetyAndSecurity5: string;
  safetyAndSecurityInstallation5: string;
  safetyAndSecurityEquipment5: string;
  safetyAndSecurityUsers5: string;
  safetyAndSecurity5Img: string; //
  // safetyAndSecurity5Q1: string;
  safetyAndSecurity6: string;
  safetyAndSecurityInstallation6: string;
  safetyAndSecurityEquipment6: string;
  safetyAndSecurityUsers6: string;
  safetyAndSecurity6Img: string; //
  safetyAndSecurity6Q1: string;
  safetyAndSecurity6Q2: string;
  safetyAndSecurity6Q3: string;
  safetyAndSecurity7: string;
  safetyAndSecurityInstallation7: string;
  safetyAndSecurityEquipment7: string;
  safetyAndSecurityUsers7: string;
  safetyAndSecurity7Img: string; //
  safetyAndSecurity7Q1: string;
  safetyAndSecurity7Q2: string;
  safetyAndSecurity7Q3: string;
  safetyAndSecurity8: string;
  safetyAndSecurityInstallation8: string;
  safetyAndSecurityEquipment8: string;
  safetyAndSecurityUsers8: string;
  safetyAndSecurity8Img: string; //
  safetyAndSecurity9: string;
  safetyAndSecurityInstallation9: string;
  safetyAndSecurityEquipment9: string;
  safetyAndSecurityUsers9: string;
  safetyAndSecurity9Img: string; //
  safetyAndSecurity9Q1: string;
  safetyAndSecurity9Q2: string;
  safetyAndSecurity10: string;
  safetyAndSecurity10Img: string; //
  safetyAndSecurityInstallation10: string;
  safetyAndSecurityEquipment10: string;
  safetyAndSecurityUsers10: string;
  safetyAndSecurity10Q1: string;
  safetyAndSecurity10Q2: string;
  safetyAndSecurity10Q3: string;
  connectivity1: string;
  connectivityInstallation1: string;
  connectivityEquipment1: string;
  connectivityUsers1: string;
  connectivity1Img: string; //
  connectivity1Q1: string;
  connectivity2: string;
  connectivityInstallation2: string;
  connectivityEquipment2: string;
  connectivityUsers2: string;
  connectivity2Img: string; //
  connectivity2Q1: string;
  connectivity2Q2: string;
  connectivity3: string;
  connectivityInstallation3: string;
  connectivityEquipment3: string;
  connectivityUsers3: string;
  connectivity3Img: string; //
  connectivity3Q1: string;
  connectivity3Q2: string;
  connectivity4: string;
  connectivityInstallation4: string;
  connectivityEquipment4: string;
  connectivityUsers4: string;
  connectivity4Img: string; //
  connectivity4Q1: string;
  connectivity4Q2: string;
  connectivity4Q3: string;
  connectivity4Q4: string;
  data1: string;
  dataInstallation1: string;
  dataEquipment1: string;
  dataUsers1: string;
  data1Img: string; //
  data1Q1: string;
  data1Q2: string;
  data2: string;
  dataInstallation2: string;
  dataEquipment2: string;
  dataUsers2: string;
  data2Img: string; //
  data2Q1: string;
  data2Q2: string;
  data2Q3: string;
  data3: string;
  data3Img: string; //
  dataInstallation3: string;
  dataEquipment3: string;
  dataUsers3: string;
  data3Q1: string;
  data3Q2: string;
  data3Q3: string;
  healthAndWellbeing1: string;
  healthAndWellbeingInstallation1: string;
  healthAndWellbeingEquipment1: string;
  healthAndWellbeingUsers1: string;
  healthAndWellbeing1Img: string; //
  healthAndWellbeing1Q1: string;
  healthAndWellbeing1Q2: string;
  healthAndWellbeing2: string;
  healthAndWellbeingInstallation2: string;
  healthAndWellbeingEquipment2: string;
  healthAndWellbeingUsers2: string;
  healthAndWellbeing2Img: string; //
  healthAndWellbeing2Q1: string;
  healthAndWellbeing2Q2: string;
  healthAndWellbeing3: string;
  healthAndWellbeingInstallation3: string;
  healthAndWellbeingEquipment3: string;
  healthAndWellbeingUsers3: string;
  healthAndWellbeing3Img: string; //
  healthAndWellbeing3Q1: string;
  healthAndWellbeing3Q2: string;
  healthAndWellbeing3Q3: string;
  healthAndWellbeing4: string;
  healthAndWellbeingInstallation4: string;
  healthAndWellbeingEquipment4: string;
  healthAndWellbeingUsers4: string;
  healthAndWellbeing4Img: string; //
  healthAndWellbeing4Q1: string;
  healthAndWellbeing4Q2: string;
  healthAndWellbeing5: string;
  healthAndWellbeingInstallation5: string;
  healthAndWellbeingEquipment5: string;
  healthAndWellbeingUsers5: string;
  healthAndWellbeing5Img: string; //
  healthAndWellbeing5Q1: string;
  digitalServices1: string;
  digitalServicesInstallation1: string;
  digitalServicesEquipment1: string;
  digitalServicesUsers1: string;
  digitalServices1Img: string; //
  digitalServices1Q1: string;
  digitalServices1Q2: string;
  digitalServices1Q3: string;
  digitalServices1Q4: string;
  digitalServices1Q5: string;
};

export interface NewOnSiteChecklistFormProps {
  initialValue: string;
  placeholder: string;
  formikChangeHandler: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  formValues: NewOnSiteChecklistFormValues;
}
