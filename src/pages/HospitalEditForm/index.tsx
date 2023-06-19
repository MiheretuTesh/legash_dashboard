import { Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./index.style";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import FormButton from "../../components/FormButton";
import IconUnderlinedButton from "../../components/IconUnderlinedButton";
import { AssumtionFormValues } from "../../types";
import HospitalsDataForm from "../../components/HospitalsDataForm";
import HospitalAdminForm from "../../components/HospitalAdminForm";
import HospitalAdminForm2 from "../../components/HospitalAdminForm2";
import ProgressBar from "../../components/ProgressBar";
import { AssumptionFormContext } from "../../contexts/AssumptionFormContext";
import ErrorModal from "../../components/ErrorModal";
import {
  // useAssumptionForm,
  useUpdateAssumptionFrom,
} from "../../hooks/useAssumptionForm";
import { useAddHospital } from "../../hooks/useAddHospital";
import { useGetFormData } from "../../hooks/useGetFormData";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useGetAssetsDraftForms } from "../../hooks/useGetAssetsDraftForms";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetHospital } from "../../hooks/useGetHospital";
import { useEditHospital } from "../../hooks/useEditHospital";

const HospitalSchema1 = Yup.object().shape({
  name: Yup.string().required("*Required"),
  address: Yup.string().required("*Required"),
  city: Yup.string().required("*Required"),
  state: Yup.string().required("*Required"),
  country: Yup.string().required("*Required"),
  phone: Yup.string().required("*Required"),
  email: Yup.string().required("*Required"),
  website: Yup.string().required("*Required"),
  // bankAccounts: Yup.string().required("*Required"),
  am_name: Yup.string().required("*Required"),
  am_address: Yup.string().required("*Required"),
  am_city: Yup.string().required("*Required"),
  am_state: Yup.string().required("*Required"),
  am_country: Yup.string().required("*Required"),
});

const HospitalSchema2 = Yup.object().shape({
  // accountNumber: Yup.string().required("*Required"),
  // accountHolderName: Yup.string().required("*Required"),
  // bankName: Yup.string().required("*Required"),
  // bankCountry: Yup.string().required("*Required"),
});

const HospitalSchema3 = Yup.object().shape({
  hospitalAdmins: Yup.string().required("*Required"),
});

const schemas = [HospitalSchema1, HospitalSchema2, HospitalSchema3];

const HospitalEditForm = ({ parentRoute }: { parentRoute: any }) => {
  const styles = useStyles();
  const location = useLocation();

  const {
    assetValue,
    setAssetValue,
    setAssetCurrentForm,
    setAssetCurrentFormSavedAt,
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

  const [imageUrlGenerated, setImageUrlGenerated] = useState(false);
  const [imgUploadUrl, setImagUploadUrl] = useState("");

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
  const [hospitalAdminId, setHospitalAdminId] = useState(null);

  const [lastFormData, setLastFormData] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const hospitalHandler = () => {};

  const onAddHospitalError = () => {
    setErrorText("Incorrect Phone Number or URL");
    setIsError(true);
  };

  const { mutate, data, isLoading, isSuccess } = useAddHospital({
    onSuccess: hospitalHandler,
    onError: onAddHospitalError,
  });

  const {
    mutate: updateHospital,
    isLoading: updateHospitalLoading,
    isSuccess: updateHospitalSuccess,
  } = useEditHospital({});

  const voidFunction = () => {};

  const { dataHospital, isDataHospitalLoading, isDataHospitalSuccess } =
    useGetHospital({
      id: location.state.hospital.id,
      onGetHospitalSuccess: voidFunction,
    });

  useEffect(() => {
    if (isDataHospitalSuccess === true) {
      setHospitalAdminId(dataHospital?.data.hospitalAdmins[0]);
      const values = {
        name: dataHospital?.data.en_us.name,
        address: dataHospital?.data.en_us?.location?.address,
        city: dataHospital?.data.en_us?.location?.city,
        state: dataHospital?.data.en_us?.location?.state,
        country: dataHospital?.data.en_us?.location?.country,
        // bankAccounts: dataHospital?.data.en_us?.bankAccounts,

        phone: dataHospital?.data.phone.join(""),
        email: dataHospital?.data.email,
        website: dataHospital?.data.website,
        hospitalAdmins: dataHospital?.data.hospitalAdmins.join(""),
        id: dataHospital?.data._id,

        am_name: dataHospital?.data.am_et.name,
        am_address: dataHospital?.data.am_et?.location?.address,
        am_city: dataHospital?.data.am_et?.location?.city,
        am_state: dataHospital?.data.am_et?.location?.state,
        am_country: dataHospital?.data.am_et?.location?.country,
      };

      setSavedValues(values);
    }
  }, [dataHospital]);

  const {
    mutate: draftMutate,
    isLoading: draftIsLoading,
    isSuccess: draftIsSuccess,
    isError: isErrorUpdate,
  } = useUpdateAssumptionFrom({
    onSuccess: (data) => console.log("draft saved"),
  });

  useEffect(() => {
    if (updateHospitalSuccess === true) {
      navigate(`/${parentRoute}/hospitals`);
    }
  }, [updateHospitalSuccess, navigate, parentRoute]);

  const initialValues = {
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    email: "",
    website: "",
    bankAccounts: "1000255336437",
    am_name: "",
    am_address: "",
    am_city: "",
    am_state: "",
    am_country: "",
    accountHolderName: "Abebe Kebede",
    bankName: "",
    bankCountry: "",
    accountNumber: "1000255336437",
    hospitalAdmins: "",
  };

  const notify = () => {
    toast("Connection is not available");
  };

  const onSubmitHandler = (data: any) => {
    console.log(imgUploadUrl, data, "data data data data");
    if (step === 3) {
      setStep(3);
    } else {
      setStep((prevState) => prevState + 1);
    }

    if (step === 3) {
      const formData: any = {
        en_us: {
          name: data.name,
          location: {
            address: data.address,
            city: data.city,
            state: data.state,
            country: data.country,
          },
          services: ["Treating Patient"],
          bankAccounts: [],
        },
        am_et: {
          name: data.am_name,
          location: {
            address: data.am_address,
            city: data.am_city,
            state: data.am_state,
            country: data.am_country,
          },
          services: ["Treating Patient"],
          bankAccounts: [],
        },
        phone: data.phone,
        email: data.email,
        website: data.website,
        hospitalAdmins: [hospitalAdminId],
        images: [imgUploadUrl],
        bankAccounts: [
          {
            accountNumber: data.accountNumber,
            accountHolderName: data.accountHolderName,
            bankName: data.bankName,
            bankCountry: data.bankCountry,
          },
        ],
      };
      
      updateHospital({ obj: formData, id: location.state.hospital.id });

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
        validationSchema={schemas[step - 1]}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ handleChange, values, setFieldValue }) => {
          return (
            <>
              <Form>
                <ProgressBar numberOfSteps={3} currentStep={step} />
                {step === 1 && (
                  <HospitalsDataForm
                    formikChangeHandler={handleChange}
                    assumptionFormValues={values}
                    setImagUploadUrl={setImagUploadUrl}
                    setImageUrlGenerated={setImageUrlGenerated}
                  />
                )}
                {step === 2 && (
                  <HospitalAdminForm
                    formikChangeHandler={handleChange}
                    assumptionFormValues={values}
                  />
                )}
                {step === 3 && (
                  <HospitalAdminForm2
                    formikChangeHandler={handleChange}
                    assumptionFormValues={values}
                    setHospitalAdminId={setHospitalAdminId}
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
                      {step === 3 ? (
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
    </>
  );
};

export default HospitalEditForm;
