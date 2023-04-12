import { Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./index.style";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import FormButton from "../../components/FormButton";
import IconUnderlinedButton from "../../components/IconUnderlinedButton";
import CampaignDataForm from "../../components/CampaignDataForm";
import CampaignDataForm2 from "../../components/CampaignDataForm2";
import ProgressBar from "../../components/ProgressBar";
import { AssumptionFormContext } from "../../contexts/AssumptionFormContext";
import ErrorModal from "../../components/ErrorModal";
import { useUpdateAssumptionFrom } from "../../hooks/useAssumptionForm";
import { useAddCampaign } from "../../hooks/useAddCampaign";
import { useEditCampaign } from "../../hooks/useEditCampaign";
import { useGetCampaign } from "../../hooks/useGetCampaign";
import LoadingSpinner from "../../components/LoadingSpinner";
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

const CampaignEditForm = ({ parentRoute }: { parentRoute: any }) => {
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

  const voidFunction = () => {};

  const [savedValues, setSavedValues]: any = useState("");

  const [patientId, setPatientId] = useState(null);
  const [hospitalId, setHospitalId] = useState(null);

  const [imageUrlGenerated, setImageUrlGenerated] = useState(false);
  const [imgUploadUrl, setImagUploadUrl] = useState("");

  const [imageUrls, setImageUrls] = useState<any[]>([]);

  const { dataCampaign, isDataCampaignLoading, isDataCampaignSuccess } =
    useGetCampaign({
      id: location.state.id,
      onGetCampaignSuccess: voidFunction,
    });

  useEffect(() => {
    if (isDataCampaignSuccess === true) {
      console.log(
        dataCampaign?.data,
        "dataCampaign dataCampaign dataCampaign dataCampaign"
      );

      setImagUploadUrl(dataCampaign?.data?.coverImage);
      setImageUrls(dataCampaign?.data?.images);
      setPatientId(dataCampaign?.data.patientId._id);
      setHospitalId(dataCampaign?.data.hospitalId._id);

      const values = {
        campaignTitle: dataCampaign?.data.en_us.campaignTitle,
        campaignDescription: dataCampaign?.data.en_us.campaignDescription,
        treatmentRequired: dataCampaign?.data.en_us.treatmentRequired.join(""),
        diagnosis: dataCampaign?.data.en_us.diagnosis.join(""),
        am_campaignTitle: dataCampaign?.data.am_et.campaignTitle,
        am_campaignDescription: dataCampaign?.data.am_et.campaignDescription,
        am_treatmentRequired:
          dataCampaign?.data.am_et.treatmentRequired.join(""),
        am_diagnosis: dataCampaign?.data.am_et.diagnosis.join(""),
        targetFunding: dataCampaign?.data.targetFunding,
        endDate: dataCampaign?.data.endDate,
        startDate: dataCampaign?.data.startDate,
        hasExplicitContent:
          dataCampaign?.data.hasExplicitContent === true ? "Yes" : "No",
      };

      console.log(values, "values valuesvalues");

      setSavedValues(values);
    }
  }, [dataCampaign]);

  const navigate = useNavigate();
  const initialStep: number = location?.state?.initialStep;
  const draftId: any = location?.state?.draftId;
  const fromSubmitted: any = location?.state?.fromSubmitted
    ? location?.state?.fromSubmitted
    : false;
  const fromDraft: any = location?.state?.fromDraft
    ? location?.state?.fromDraft
    : false;

  const [step, setStep] = useState(1);
  const [selectedBuildingId, setSelectedBuildingId] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData]: any = useState(null);

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

  const {
    mutate: updateCampaignMutate,
    isLoading: updateCampaignLoading,
    isSuccess: updateCampaignSuccess,
  } = useEditCampaign({});

  const {
    mutate: draftMutate,
    isLoading: draftIsLoading,
    isSuccess: draftIsSuccess,
    isError: isErrorUpdate,
  } = useUpdateAssumptionFrom({
    onSuccess: (data) => console.log("draft saved"),
  });

  useEffect(() => {
    if (updateCampaignSuccess === true) {
      navigate(`/${parentRoute}/campaigns`);
    }
  }, [updateCampaignSuccess, navigate, parentRoute]);

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
        endDate: data.endDate,
        startDate: data.startDate,
        images: imageUrls,
        coverImage: imgUploadUrl,
        hasExplicitContent: data.hasExplicitContent === "Yes" ? true : false,
      };

      updateCampaignMutate({ obj: formData, id: location.state.id });

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
                        disabled={updateCampaignLoading}
                      >
                        Back
                      </FormButton>
                    )}
                    <FormButton
                      customStyle={styles.saveBtn}
                      buttonVariant="contained"
                      key={step === 3 ? "finish" : "next"}
                      buttonType="submit"
                      disabled={updateCampaignLoading}
                    >
                      {step === 2 ? (
                        updateCampaignLoading ? (
                          <LoadingSpinner
                            customStyle={styles.loaderStyle}
                            type="button"
                          />
                        ) : (
                          "Update"
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
                      disabled={updateCampaignLoading}
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

export default CampaignEditForm;
