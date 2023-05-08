import { Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./index.style";
import * as Yup from "yup";
import FormSelectFieldAsset from "../../components/FormSelectFieldAsset";
import { useLocation, useNavigate } from "react-router-dom";
import FormButton from "../../components/FormButton";
import IconUnderlinedButton from "../../components/IconUnderlinedButton";
import AssumptionsBuildingFinancialDataForm from "../../components/AssumptionsBuildingFinancialDataForm";
import { AssumtionFormValues } from "../../types";
import AssumptionsImplementationsForm from "../../components/AssumptionsImplementationsForm";
import AssumptionsBuildingMarketForm from "../../components/AssumptionsBuildingMarketForm";
import RationaleInputsForm from "../../components/RatinaleInputsForm";
import VariableInputsForm from "../../components/VariableInputsForm";
import OpexLevelsPSMForm from "../../components/OpexLevelsPSMForm";
import ProgressBar from "../../components/ProgressBar";
import { AssumptionFormContext } from "../../contexts/AssumptionFormContext";
import {
  useAssumptionForm,
  useUpdateAssumptionFrom,
} from "../../hooks/useAssumptionForm";
import { useGetAssets } from "../../hooks/useGetAssets";
import { useGetFormData } from "../../hooks/useGetFormData";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useGetAssetsDraftForms } from "../../hooks/useGetAssetsDraftForms";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BUILDING_OPTIONS = [
  "Building A1",
  "Building A2",
  "Building A3",
  "Building A4",
  "Building A5",
  "Building A6",
  "Building A7",
  "Building A8",
  "Building A9",
  "Building A10",
  "Building A11",
  "Building A12",
  "Building A13",
  "Building A14",
  "Building A15",
];

const AssumptionsPageSchema1 = Yup.object().shape({
  // company: Yup.string().required("*Required"),
});
const AssumptionsPageSchema2 = Yup.object().shape({
  buildingName: Yup.string().required("*Required"),
  holdPeriod: Yup.string().required("*Required"),
  exitYield: Yup.string().required("*Required"),
  // premiumForTechEnabledBuilding: Yup.string().required("*Required"),
  // coordinatesNS: Yup.string().required("*Required"),
  // coordinatesEW: Yup.string().required("*Required"),
  // constructionYear: Yup.string().required("*Required"),
  climateZone: Yup.string().required("*Required"),
  startYear: Yup.string().required("*Required"),
  developmentState: Yup.string().required("*Required"),
  capexBudget: Yup.string().required("*Required"),
  buildingStoreys: Yup.string().required("*Required"),
  totalNumberOfLifts: Yup.string().required("*Required"),
  numberOfLiftsPerCore: Yup.string().required("*Required"),
});
const AssumptionsPageSchema3 = Yup.object().shape({
  totalLettableAreaSQM: Yup.string().required("*Required"),
  // totalLettableAreaSQFT: Yup.string().required("*Required"),
  commonAreaSQM: Yup.string().required("*Required"),
  // commonAreaSQFT: Yup.string().required("*Required"),
  // totalBuildingAreaSQM: Yup.string().required("*Required"),
  // totalBuildingAreaSQFT: Yup.string().required("*Required"),
  // ervUponStabilizationSQM: Yup.string().required("*Required"),
  // ervUponStabilizationSQFT: Yup.string().required("*Required"),
  ervUponStabilizationTotal: Yup.string().required("*Required"),
  opexSQM: Yup.string().required("*Required"),
  // opexSQFT: Yup.string().required("*Required"),
  // opexTotal: Yup.string().required("*Required"),
  // newBuildCostsSQM: Yup.string().required("*Required"),
  // newBuildCostsSQFT: Yup.string().required("*Required"),
  // newBuildCostsTotal: Yup.string().required("*Required"),
});
const AssumptionsPageSchema4 = Yup.object().shape({
  minLowPSMLevel: Yup.string().required("*Required"),
  inBetweenLowMediumPSM: Yup.string().required("*Required"),
  mediumPSMLevel: Yup.string().required("*Required"),
  inBetweenMediumHighPSM: Yup.string().required("*Required"),
  highPSMLevel: Yup.string().required("*Required"),
  maxPSMLevel: Yup.string().required("*Required"),
  psmInterval: Yup.string().required("*Required"),
});
const AssumptionsPageSchema5 = Yup.object().shape({
  phaseOneYears: Yup.string().required("*Required"),
  phaseOneEndYear: Yup.string().required("*Required"),
  phaseOneRentIncreasePercentage: Yup.string().required("*Required"),
  phaseOneRentRollcoveredPercentage: Yup.string().required("*Required"),
  phaseTwoYears: Yup.string().required("*Required"),
  phaseTwoEndYear: Yup.string().required("*Required"),
  phaseTwoRentIncreasePercentage: Yup.string().required("*Required"),
  phaseTwoRentRollcoveredPercentage: Yup.string().required("*Required"),
  phaseThreeYears: Yup.string().required("*Required"),
  phaseThreeEndYear: Yup.string().required("*Required"),
  phaseThreeRentIncreasePercentage: Yup.string().required("*Required"),
  phaseThreeRentRollcoveredPercentage: Yup.string().required("*Required"),
  totalYears: Yup.string().required("*Required"),
  totalRentIncreasePercentage: Yup.string().required("*Required"),
  totalRentRollcoveredPercentage: Yup.string().required("*Required"),
});
const AssumptionsPageSchema6 = Yup.object().shape({
  // buildingSize: Yup.string().required("*Required"),
  // opexInefficiency: Yup.string().required("*Required"),
  // capex: Yup.string().required("*Required"),
  // isLiftManagementSystemRequired: Yup.string().required("*Required"),
  /*isItFeasibleToInstallPV: Yup.string().required("*Required"),
  securitySystemsStandAlone: Yup.string().required("*Required"),
  dhw: Yup.string().required("*Required"),
  carPlacesNo: Yup.string().required("*Required"),
  spacesCoveredbyEVPercentage: Yup.string().required("*Required"),
  diversityOfNetworkConnections: Yup.string().required("*Required"),
  carbonFootprintEngagement: Yup.string().required("*Required"),
  cybersecurityConsultant: Yup.string().required("*Required"),
  ITDataEngineer: Yup.string().required("*Required"),
  cybersecurityConsultantOnDesignTeam: Yup.string().required("*Required"),
  ITDataEngineerDesignTeam: Yup.string().required("*Required"),
  smartStrategy: Yup.string().required("*Required"),
  approach: Yup.string().required("*Required"),*/
});
const AssumptionsPageSchema7 = Yup.object().shape({
  /*assetClass: Yup.string().required("*Required"),
  country: Yup.string().required("*Required"),*/
  // ppaSupplier: Yup.string().required("*Required"),
  // plantAnnualOutput: Yup.string().required("*Required"),
  // buildingTotalSQM: Yup.string().required("*Required"),
  /*year1PvDecay: Yup.string().required("*Required"),
  degradationRate: Yup.string().required("*Required"),*/
  // opexAssumptionTotalSQM: Yup.string().required("*Required"),
  // outputPSM: Yup.string().required("*Required"),
  // capacityInstalled: Yup.string().required("*Required"),
  // maintenanceCosts: Yup.string().required("*Required"),
  // debtPercentage: Yup.string().required("*Required"),
  // interestPercentage: Yup.string().required("*Required"),
  // amortization: Yup.string().required("*Required"),
  // duration: Yup.string().required("*Required"),
  /*exitMethod: Yup.string().required("*Required"),*/
  // exitYear: Yup.string().required("*Required"),
  // plantValueResidualPercentage: Yup.string().required("*Required"),
  // batteryValueResidualPercentage: Yup.string().required("*Required"),
  inflationRate: Yup.string().required("*Required"),
});

const schemas = [
  AssumptionsPageSchema1,
  AssumptionsPageSchema2,
  AssumptionsPageSchema3,
  AssumptionsPageSchema4,
  AssumptionsPageSchema5,
  AssumptionsPageSchema6,
  AssumptionsPageSchema7,
];

const AssumptionsFormPageOnSiteCheckList = ({
  parentRoute,
}: {
  parentRoute: any;
}) => {
  const styles = useStyles();
  const location = useLocation();

  const {
    assetValue,
    setAssetValue,
    setAssetCurrentForm,
    setAssetCurrentFormSavedAt,
    assetLastPage,
    setAssetLastPage,
  } = useContext(AssumptionFormContext);

  const navigate = useNavigate();
  const initialStep: number = location?.state?.initialStep;
  const draftId: any = location?.state?.draftId;
  const fromSubmitted: any = location?.state?.fromSubmitted ? location?.state?.fromSubmitted : false;
  const fromDraft: any = location?.state?.fromDraft ? location?.state?.fromDraft : false;
  const [savedValues, setSavedValues]: any = useState("");
  const [savedAsset, setSavedAsset]:  any = useState("");

  const { dataForm, isDataFormSuccess } =  useGetFormData({
    onGetFormSuccess: function () {
    },
    id: draftId
  });

  useEffect(() => {
    if(isDataFormSuccess){
      setSavedValues(dataForm.data);
      setSavedAsset(dataForm.asset);
    }
  }, [isDataFormSuccess, dataForm]);

  const [step, setStep] = useState(initialStep || assetLastPage);
  const [selectedBuildingId, setSelectedBuildingId] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] : any = useState(null);

  const [lastFormData, setLastFormData] = useState(false);

  const {
    mutate,
    isLoading,
    isSuccess,
    isError
  } = useAssumptionForm({
    onSuccess: (data) => console.log("just"),
  });

  useEffect(() => {
    const formData: any = localStorage.getItem("AssumptionForm") !== null
        &&
        JSON.parse(localStorage.getItem("AssumptionForm") as string);
    if ((fromDraft === false || fromSubmitted === false) && formData) {
        setStep(formData?.last_step);
      setSelectedBuildingId(formData?.asset);
        setSavedValues(formData?.data);
        // setSelectedBuildingId(formData?.id);
    }
  }, [fromDraft, fromSubmitted]);

  const {
    mutate: draftMutate,
    isLoading: draftIsLoading,
    isSuccess: draftIsSuccess,
    isError: isErrorUpdate
  } = useUpdateAssumptionFrom({
    onSuccess: (data) => console.log("draft saved"),
  });

  const { dataAssetsDraftForms} =
    useGetAssetsDraftForms({
      isDraft: true,
    });

  useEffect(() => {
    if (isSuccess === true || draftIsSuccess === true) {
      localStorage.removeItem("AssumptionForm");
      navigate(`/${parentRoute}/forms`);
    }
  }, [isSuccess, draftIsSuccess, navigate, parentRoute]);

  useEffect(() => {
    if((isError=== true || isErrorUpdate === true) && isSubmitted===true){
      notify();

      formData.last_step = lastFormData ? 7: formData?.last_step;

      const store = JSON.stringify(formData);
      localStorage.setItem("AssumptionForm", store);
      navigate(`/${parentRoute}/forms`);
    }
  }, [isSubmitted, isError, isErrorUpdate, formData, navigate, parentRoute]);

  const {dataAssets } = useGetAssets({
    limit: 0,
    offset: 0,
  });

  useEffect(() => {
    if (savedAsset !== null) {
      setAssetValue(savedAsset);
    }
  }, [savedAsset, setAssetValue]);

  const initialValues = {
    buildingName: "",
    holdPeriod: "",
    exitYield: "",
    climateZone: "",
    startYear: "",
    developmentState: "",
    capexBudget: "",
    buildingStoreys: "",
    totalNumberOfLifts: "",
    numberOfLiftsPerCore: "",
    totalLettableAreaSQM: "",
    totalLettableAreaSQFT: "",
    commonAreaSQM: "",
    commonAreaSQFT: "",
    totalBuildingAreaSQM: "",
    totalBuildingAreaSQFT: "",
    ervUponStabilizationSQM: "",
    ervUponStabilizationSQFT: "",
    ervUponStabilizationTotal: "",
    opexSQM: "",
    opexSQFT: "",
    opexTotal: "",
    // newBuildCostsSQM: "",
    // newBuildCostsSQFT: "",
    // newBuildCostsTotal: "",
    minLowPSMLevel: "",
    inBetweenLowMediumPSM: "",
    mediumPSMLevel: "",
    inBetweenMediumHighPSM: "",
    highPSMLevel: "",
    maxPSMLevel: "",
    psmInterval: "",
    phaseOneYears: "",
    phaseOneEndYear: "",
    phaseOneRentIncreasePercentage: "",
    phaseOneRentRollcoveredPercentage: "",
    phaseTwoYears: "",
    phaseTwoEndYear: "",
    phaseTwoRentIncreasePercentage: "",
    phaseTwoRentRollcoveredPercentage: "",
    phaseThreeYears: "",
    phaseThreeEndYear: "",
    phaseThreeRentIncreasePercentage: "",
    phaseThreeRentRollcoveredPercentage: "",
    totalYears: "",
    totalRentIncreasePercentage: "",
    totalRentRollcoveredPercentage: "",
    isItFeasibleToInstallPV: "",
    securitySystemsStandAlone: "",
    dhw: "",
    carPlacesNo: "",
    spacesCoveredbyEVPercentage: "",
    diversityOfNetworkConnections: "",
    carbonFootprintEngagement: "",
    cybersecurityConsultant: "",
    ITDataEngineer: "",
    cybersecurityConsultantOnDesignTeam: "",
    ITDataEngineerDesignTeam: "",
    smartStrategy: "",
    approach: "",
    assetClass: "",
    country: "",
    TotalSqm : "",
    year1PvDecay: 20,
    degradationRate: 30,
    inflationRate: "",
    kWhPerYearOuputIMPUTFROMWEBSITE : "",
  };

  const notify = () => {
    toast("Connection is not available");
  };

  const onSubmitHandler = (data: AssumtionFormValues) => {

    if (step === 7) {
      setStep(7);
    } else {
      setStep((prevState) => prevState + 1);
    }

    const formData: any = {
      data,
      asset: selectedBuildingId !== null ? selectedBuildingId : assetValue,
      type: "ASSUMPTIONS",
      last_step: 2,
    };

    setAssetCurrentFormSavedAt(new Date());
    setAssetCurrentForm(formData);

    if (step === 7) {
      setFormSubmitted(true);

      if (draftId) {
        formData.is_draft = false;
        formData.id = draftId;
        draftMutate(formData);
      } else {
        formData.is_draft = false;
        mutate(formData);

        setLastFormData(true);
        setFormData(formData);
        setIsSubmitted(true);
      }
      setAssetLastPage(1);
      setAssetValue(null);
      setAssetCurrentForm(null);
    }
  };

  const onCancelClickHandler = () => {
    if(draftId){
      if(fromSubmitted){
        navigate(`/${parentRoute}/forms`, {state: {tab: 3}});
      } if(fromDraft){
        navigate(`/${parentRoute}/forms`, {state: {tab: 2}});
      }
    }  else {
      navigate(`/${parentRoute}/forms`);
    }
  };

  const onBackButtonClickHandler = () => {
    setStep((prevState) => prevState - 1);
  };

  const onSaveAndExitClickHandler = (data: AssumtionFormValues) => {
    setAssetCurrentFormSavedAt(new Date());

    let draftedBuilding: any = null;

    dataAssetsDraftForms?.results.forEach((result: any) => {
      if (
        result.building_name === data.company &&
        result.type === "ASSUMPTIONS"
      ) {
        draftedBuilding = result;
      }
    });

    if (draftId) {
      const formData: any = {
        data: data,
        asset: selectedBuildingId !== null ? selectedBuildingId : assetValue,
        type: "ASSUMPTIONS",
        last_step: step,
        is_draft: true,
        id: draftId,
      };
      draftMutate(formData);

      setFormData(formData);
      setIsSubmitted(true);

    } else if (draftedBuilding !== null) {
      const formData: any = {
        asset: draftedBuilding?.asset,
        data: data,
        type: "ASSUMPTIONS",
        last_step: step,
        is_draft: true,
        id: draftedBuilding?.id,
      };

      draftMutate(formData);

      setFormData(formData);
      setIsSubmitted(true);

    } else {
      const formData: any = {
        data: data,
        asset: selectedBuildingId !== null ? selectedBuildingId : assetValue,
        type: "ASSUMPTIONS",
        last_step: step,
        is_draft: true,
      };
      mutate(formData);

      setFormData(formData);
      setIsSubmitted(true);

    }
    setAssetCurrentForm(null);
    setAssetLastPage(1);
  };

  return (
    <>
      {
        fromDraft || fromSubmitted ? (
            isDataFormSuccess ? (
                <Formik
                    initialValues={savedValues || initialValues}
                    onSubmit={onSubmitHandler}
                    enableReinitialize={true}
                    validationSchema={schemas[step - 1]}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                  {({ handleChange, values, setFieldValue }) => {
                    return (
                        <>
                          <Form>
                          <ProgressBar numberOfSteps={7} currentStep={step} />
                          {step === 1 && (
                              <FormSelectFieldAsset
                                  fieldName="buildingName"
                                  formikChangeHandler={handleChange}
                                  options={
                                    dataAssets !== null
                                        ? dataAssets?.results
                                        : BUILDING_OPTIONS
                                  }
                                  initialValue={
                                    values.buildingName !== "" ? values.buildingName : "none"
                                  }
                                  placeholder={"Select the asset"}
                                  customStyle={styles.buildingChoiceContainer}
                                  isAssetSelect={true}
                                  setSelectedBuildingId={setSelectedBuildingId}
                                  assumptionFormSetFieldValue={setFieldValue}
                              />
                          )}
                          {step === 2 && (
                              <AssumptionsBuildingMarketForm
                                  formikChangeHandler={handleChange}
                                  assumptionFormValues={values}
                              />
                          )}
                          {step === 3 && (
                              <AssumptionsBuildingFinancialDataForm
                                  assumptionFormValues={values}
                                  assumptionFormSetFieldValue={setFieldValue}
                              />
                          )}
                          {step === 4 && (
                              <OpexLevelsPSMForm
                                  assumptionFormValues={values}
                                  assumptionFormSetFieldValue={setFieldValue}
                              />
                          )}
                          {step === 5 && (
                              <AssumptionsImplementationsForm
                                  assumptionFormValues={values}
                                  assumptionFormSetFieldValue={setFieldValue}
                              />
                          )}
                          {step === 6 && (
                              <RationaleInputsForm
                                  assumptionFormValues={values}
                                  assumptionFormSetFieldValue={setFieldValue}
                                  formikChangeHandler={handleChange}
                              />
                          )}
                          {step === 7 && (
                              <VariableInputsForm
                                  assumptionFormValues={values}
                                  assumptionFormSetFieldValue={setFieldValue}
                                  formikChangeHandler={handleChange}
                              />
                          )}
                          <div className={styles.btnsContainer}>
                            <div>
                              {step !== 1 && (
                                  <FormButton
                                      buttonVariant="outlined"
                                      buttonType="button"
                                      onButtonClick={onBackButtonClickHandler}
                                      customStyle={styles.backBtn}
                                      disabled={isLoading || draftIsLoading}
                                  >
                                    Back
                                  </FormButton>
                              )}
                              <FormButton
                                  customStyle={styles.saveBtn}
                                  buttonVariant="contained"
                                  key={step === 7 ? "finish" : "next"}
                                  buttonType="submit"
                                  disabled={isLoading || draftIsLoading}
                              >
                                {step === 7 ? (
                                    (isLoading || draftIsLoading) && formSubmitted ? (
                                        <LoadingSpinner
                                            customStyle={styles.loaderStyle}
                                            type="button"
                                        />
                                    ) : (
                                        "Submit"
                                    )
                                ) : (
                                    "Save & Next"
                                )}
                              </FormButton>
                            </div>
                            <div className={styles.rightBtnsContainer}>
                              <FormButton
                                  buttonVariant="outlined"
                                  buttonType="button"
                                  onButtonClick={() => onSaveAndExitClickHandler(values)}
                                  customStyle={styles.backBtn}
                                  disabled={isLoading || draftIsLoading}
                              >
                                {(isLoading || draftIsLoading) &&
                                !formSubmitted ? (
                                    <LoadingSpinner
                                        customStyle={styles.backBtn}
                                        type="submitBtn"
                                    />
                                ) : (
                                    "Save & exit"
                                )}
                              </FormButton>
                              <IconUnderlinedButton
                                  onClick={onCancelClickHandler}
                                  customStyle={styles.cancelBtn}
                                  disabled={isLoading || draftIsLoading}
                              >
                                Cancel
                              </IconUnderlinedButton>
                            </div>
                          </div>
                          </Form>
                        </>
                    );
                  }}
                </Formik>
            ) : (
                <LoadingSpinner />
            )
        ) : (
            <Formik
                initialValues={savedValues || initialValues}
                onSubmit={onSubmitHandler}
                enableReinitialize={true}
                validationSchema={schemas[step - 1]}
                validateOnChange={false}
                validateOnBlur={false}
            >
              {({ handleChange, values, setFieldValue }) => {
                return (
                    <>
                      <Form>
                      <ProgressBar numberOfSteps={7} currentStep={step} />
                      {step === 1 && (
                          <FormSelectFieldAsset
                              fieldName="buildingName"
                              formikChangeHandler={handleChange}
                              options={
                                dataAssets !== null
                                    ? dataAssets?.results
                                    : BUILDING_OPTIONS
                              }
                              initialValue={
                                values.buildingName !== "" ? values.buildingName : "none"
                              }
                              placeholder={"Select the asset"}
                              customStyle={styles.buildingChoiceContainer}
                              isAssetSelect={true}
                              setSelectedBuildingId={setSelectedBuildingId}
                              assumptionFormSetFieldValue={setFieldValue}
                          />
                      )}
                      {step === 2 && (
                          <AssumptionsBuildingMarketForm
                              formikChangeHandler={handleChange}
                              assumptionFormValues={values}
                          />
                      )}
                      {step === 3 && (
                          <AssumptionsBuildingFinancialDataForm
                              assumptionFormValues={values}
                              assumptionFormSetFieldValue={setFieldValue}
                          />
                      )}
                      {step === 4 && (
                          <OpexLevelsPSMForm
                              assumptionFormValues={values}
                              assumptionFormSetFieldValue={setFieldValue}
                          />
                      )}
                      {step === 5 && (
                          <AssumptionsImplementationsForm
                              assumptionFormValues={values}
                              assumptionFormSetFieldValue={setFieldValue}
                          />
                      )}
                      {step === 6 && (
                          <RationaleInputsForm
                              assumptionFormValues={values}
                              assumptionFormSetFieldValue={setFieldValue}
                              formikChangeHandler={handleChange}
                          />
                      )}
                      {step === 7 && (
                          <VariableInputsForm
                              assumptionFormValues={values}
                              assumptionFormSetFieldValue={setFieldValue}
                              formikChangeHandler={handleChange}
                          />
                      )}
                      <div className={styles.btnsContainer}>
                        <div>
                          {step !== 1 && (
                              <FormButton
                                  buttonVariant="outlined"

                                  buttonType="button"
                                  onButtonClick={onBackButtonClickHandler}
                                  customStyle={styles.backBtn}
                                  disabled={isLoading || draftIsLoading}
                              >
                                Back
                              </FormButton>
                          )}
                          <FormButton
                              customStyle={styles.saveBtn}
                              buttonVariant="contained"
                              key={step === 7 ? "finish" : "next"}
                              buttonType="submit"
                              disabled={isLoading || draftIsLoading}
                          >
                            {step === 7 ? (
                                (isLoading || draftIsLoading) && formSubmitted ? (
                                    <LoadingSpinner
                                        customStyle={styles.loaderStyle}
                                        type="button"
                                    />
                                ) : (
                                    "Submit"
                                )
                            ) : (
                                "Save & Next"
                            )}
                          </FormButton>
                        </div>
                        <div className={styles.rightBtnsContainer}>
                          <FormButton
                              buttonVariant="outlined"
                              buttonType="button"
                              onButtonClick={() => onSaveAndExitClickHandler(values)}
                              customStyle={styles.backBtn}
                              disabled={isLoading || draftIsLoading}
                          >
                            {(isLoading || draftIsLoading) &&
                            formSubmitted === false ? (
                                <LoadingSpinner
                                    customStyle={styles.backBtn}
                                    type="submitBtn"
                                />
                            ) : (
                                "Save & exit"
                            )}
                          </FormButton>
                          <IconUnderlinedButton
                              onClick={onCancelClickHandler}
                              customStyle={styles.cancelBtn}
                              disabled={isLoading || draftIsLoading}
                          >
                            Cancel
                          </IconUnderlinedButton>
                        </div>
                      </div>
                      </Form>
                    </>
                );
              }}
            </Formik>
        )
      }
      <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
    </>
  );
};

export default AssumptionsFormPageOnSiteCheckList;
