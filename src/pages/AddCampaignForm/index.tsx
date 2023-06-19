import { Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./index.style";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import FormButton from "../../components/FormButton";
import IconUnderlinedButton from "../../components/IconUnderlinedButton";
import { AssumtionFormValues } from "../../types";
import CampaignDataForm from "../../components/CampaignDataForm";
import CampaignDataForm2 from "../../components/CampaignDataForm2";
import ProgressBar from "../../components/ProgressBar";
import { AssumptionFormContext } from "../../contexts/AssumptionFormContext";
import ErrorModal from "../../components/ErrorModal";
import { useUpdateAssumptionFrom } from "../../hooks/useAssumptionForm";
import { useAddCampaign } from "../../hooks/useAddCampaign";
import { useGetFormData } from "../../hooks/useGetFormData";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useGetAssetsDraftForms } from "../../hooks/useGetAssetsDraftForms";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CampaignSchema1 = Yup.object().shape({
  name: Yup.string().required("*Required"),
  address: Yup.string().required("*Required"),
  city: Yup.string().required("*Required"),
  state: Yup.string().required("*Required"),
  country: Yup.string().required("*Required"),
  phone: Yup.string().required("*Required"),
  email: Yup.string().required("*Required"),
  website: Yup.string().required("*Required"),
  bankAccounts: Yup.string().required("*Required"),
  am_name: Yup.string().required("*Required"),
  am_address: Yup.string().required("*Required"),
  am_city: Yup.string().required("*Required"),
  am_state: Yup.string().required("*Required"),
  am_country: Yup.string().required("*Required"),
});

const CampaignSchema2 = Yup.object().shape({
  accountNumber: Yup.string().required("*Required"),
  accountHolderName: Yup.string().required("*Required"),
  bankName: Yup.string().required("*Required"),
  bankCountry: Yup.string().required("*Required"),
});

const CampaignSchema3 = Yup.object().shape({
  hospitalAdmins: Yup.string().required("*Required"),
});

const schemas = [CampaignSchema1, CampaignSchema2, CampaignSchema3];

const AddCampaignForm = ({ parentRoute }: { parentRoute: any }) => {
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
  const fromSubmitted: any = location?.state?.fromSubmitted
    ? location?.state?.fromSubmitted
    : false;
  const fromDraft: any = location?.state?.fromDraft
    ? location?.state?.fromDraft
    : false;
  const [savedValues, setSavedValues]: any = useState("");
  const [savedAsset, setSavedAsset]: any = useState("");

  const { dataForm, isDataFormSuccess } = useGetFormData({
    onGetFormSuccess: function () {},
    id: draftId,
  });

  useEffect(() => {
    if (isDataFormSuccess) {
      setSavedValues(dataForm.data);
      setSavedAsset(dataForm.asset);
    }
  }, [isDataFormSuccess, dataForm]);

  const [step, setStep] = useState(1);
  const [selectedBuildingId, setSelectedBuildingId] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData]: any = useState(null);

  const [patientId, setPatientId] = useState(null);
  const [hospitalId, setHospitalId] = useState(null);

  const [imageUrlGenerated, setImageUrlGenerated] = useState(false);
  const [imgUploadUrl, setImagUploadUrl] = useState("");

  const [imageUrls, setImageUrls] = useState<any[]>([]);

  const [lastFormData, setLastFormData] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const hospitalHandler = () => {};

  const onAddHospitalError = () => {
    setErrorText("Incorrect Phone Number or URL");
    setIsError(true);
  };

  const onAddCampaignError = () => {
    setErrorText("Incorrect Phone Number or URL");
    setIsError(true);
  };

  const campaignAddHandler = () => {};

  const { mutate, data, isLoading, isSuccess } = useAddCampaign({
    onSuccess: campaignAddHandler,
    onError: onAddCampaignError,
  });

  useEffect(() => {
    const formData: any =
      localStorage.getItem("AssumptionForm") !== null &&
      JSON.parse(localStorage.getItem("AssumptionForm") as string);
    if ((fromDraft === false || fromSubmitted === false) && formData) {
      setStep(1);
      setSelectedBuildingId(formData?.asset);
      setSavedValues(formData?.data);
    }
  }, [fromDraft, fromSubmitted]);

  const {
    mutate: draftMutate,
    isLoading: draftIsLoading,
    isSuccess: draftIsSuccess,
    isError: isErrorUpdate,
  } = useUpdateAssumptionFrom({
    onSuccess: (data) => console.log("draft saved"),
  });

  const { dataAssetsDraftForms } = useGetAssetsDraftForms({
    isDraft: true,
  });

  useEffect(() => {
    if (isSuccess === true || draftIsSuccess === true) {
      navigate(`/${parentRoute}/campaigns`);
    }
  }, [isSuccess, draftIsSuccess, navigate, parentRoute]);

  useEffect(() => {
    if ((isError === true || isErrorUpdate === true) && isSubmitted === true) {
      notify();

      formData.last_step = lastFormData ? 2 : formData?.last_step;

      const store = JSON.stringify(formData);
      localStorage.setItem("AssumptionForm", store);
      navigate(`/${parentRoute}/hospitals`);
    }
  }, [isSubmitted, isError, isErrorUpdate, formData, navigate, parentRoute]);

  const initialValues = {
    campaignDescription: "",
    treatmentRequired: "",
    diagnosis: "",
    am_campaignDescription: "",
    am_treatmentRequired: "",
    am_diagnosis: "",
    patientId: "",
    hospitalId: "",
    targetFunding: "",
    images: "",
    coverImage: "",
    hasExplicitContent: "",
    startDate: "",
    endDate: "",
  };

  const notify = () => {
    toast("Connection is not available");
  };

  const onSubmitHandler = (data: any) => {
    if (step === 2) {
      setStep(2);
    } else {
      setStep((prevState) => prevState + 1);
    }

    if (step === 2) {
      const formData: any = {
        en_us: {
          campaignTitle: data.campaignTitle,
          campaignDescription: data.campaignDescription,
          treatmentRequired: [data.treatmentRequired],
          diagnosis: [data.diagnosis],
        },
        am_et: {
          campaignTitle: data.am_campaignTitle,
          campaignDescription: data.am_campaignDescription,
          treatmentRequired: [data.am_treatmentRequired],
          diagnosis: [data.am_diagnosis],
        },
        patientId: patientId,
        hospitalId: hospitalId,
        targetFunding: data.targetFunding,
        coverImage: imgUploadUrl,
        hasExplicitContent: data.hasExplicitContent === "Yes" ? true : false,
        startDate: data.startDate,
        endDate: data.endDate,
        images: imageUrls,
      };

      mutate(formData);

      setAssetLastPage(1);
      setAssetValue(null);
      setAssetCurrentForm(null);
    }
  };

  const onCancelClickHandler = () => {
    if (draftId) {
      if (fromSubmitted) {
        navigate(`/${parentRoute}/hospitals`, { state: { tab: 2 } });
      }
      if (fromDraft) {
        navigate(`/${parentRoute}/hospitals`, { state: { tab: 1 } });
      }
    } else {
      navigate(`/${parentRoute}/hospitals`);
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
      <Formik
        initialValues={savedValues || initialValues}
        onSubmit={onSubmitHandler}
        enableReinitialize={true}
        // validationSchema={schemas[step - 1]}
        // validateOnChange={false}
        // validateOnBlur={false}
      >
        {({ handleChange, values, setFieldValue }) => {
          return (
            <>
              <Form>
                <ProgressBar numberOfSteps={2} currentStep={step} />
                {step === 1 && (
                  <CampaignDataForm
                    formikChangeHandler={handleChange}
                    assumptionFormValues={values}
                    setImagUploadUrl={setImagUploadUrl}
                    setImageUrlGenerated={setImageUrlGenerated}
                    setImageUrls={setImageUrls}
                  />
                )}
                {step === 2 && (
                  <CampaignDataForm2
                    formikChangeHandler={handleChange}
                    assumptionFormValues={values}
                    setPatientId={setPatientId}
                    setHospitalId={setHospitalId}
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
                      key={step === 3 ? "finish" : "next"}
                      buttonType="submit"
                      disabled={isLoading || draftIsLoading}
                    >
                      {step === 2 ? (
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
        theme="light"
      />
    </>
  );
};

export default AddCampaignForm;
