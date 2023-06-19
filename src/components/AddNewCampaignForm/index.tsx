import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import FormField from "../FormField";
import { useStyles } from "./index.style";
import FormButton from "../FormButton";
import FormSelectField from "../FormSelectField";
import FormSelectFieldID from "../FormSelectFieldID";
import * as Yup from "yup";
import ErrorModal from "../ErrorModal";
import { useAddCampaign } from "../../hooks/useAddCampaign";
import LoadingSpinner from "../LoadingSpinner";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { useGetHospitals } from "../../hooks/useGetHospitals";
import ImageUpload from "../ImageUpload";

const CampaignAddSchema = Yup.object().shape({
  patientId: Yup.string().required("*Required"),
  hospitalId: Yup.string().required("*Required"),
  targetFunding: Yup.string().required("*Required"),
  treatmentRequired: Yup.string().required("*Required"),
  diagnosis: Yup.string().required("*Required"),
  startDate: Yup.string().required("*Required"),
  endDate: Yup.string().required("*Required"),
  currentFundedAmount: Yup.string().required("*Required"),
});

const AddNewCampaignForm = () => {
  const location = useLocation();
  const parentRoute = location.pathname.split("/")[1];
  const [imageUrlGenerated, setImageUrlGenerated] = useState(false);
  const [imgUploadUrl, setImagUploadUrl] = useState("");

  const navigate = useNavigate();
  const initialValues = {
    patientId: "",
    hospitalId: "",
    targetFunding: "",
    treatmentRequired: "",
    diagnosis: "",
    startDate: "",
    endDate: "",
    currentFundedAmount: "",
  };
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [allUsers, setAllUsers]: any = useState([]);
  const [allHospitals, setAllHospitals]: any = useState([]);

  const [patientId, setPatientId] = useState(null);
  const [hospitalId, setHospitalId] = useState(null);

  const [startDate, setStartDate] = useState(new Date());

  const styles = useStyles();

  const campaignAddHandler = () => {};
  const {
    dataUsers,
    isLoadingUsers,
    isSuccess: isAllUsersFetched,
  } = useGetAllUsers({});

  const { dataHospitals, isLoadingHospitals } = useGetHospitals({});

  useEffect(() => {
    if (dataUsers?.data?.length > 0) {
      const tableData: any[] = [];

      dataUsers?.data.forEach((data: any) => {
        if (data?.role?.roleName === "user") {
          tableData.push({
            id: data.id,
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
          });
        }
      });
      setAllUsers(tableData);
    } else {
      setAllUsers([]);
    }

    return () => {
      setAllUsers([]);
    };
  }, [dataUsers]);

  useEffect(() => {
    if (dataHospitals?.data.hospitals?.length > 0) {
      const tableData: any[] = [];

      dataHospitals?.data.hospitals.forEach((data: any) => {
        tableData.push({
          id: data._id,
          name: data.name,
          email: data.email,
        });
      });
      setAllHospitals(tableData);
    } else {
      setAllHospitals([]);
    }
    return () => {
      setAllHospitals([]);
    };
  }, [dataHospitals]);

  const onAddCampaignError = () => {
    setErrorText("Incorrect Phone Number or URL");
    setIsError(true);
  };

  const { mutate, data, isLoading, isSuccess } = useAddCampaign({
    onSuccess: campaignAddHandler,
    onError: onAddCampaignError,
  });

  useEffect(() => {
    if (isSuccess === true) {
      navigate(`/${parentRoute}/campaigns`);
    }
  }, [data, isSuccess]);

  const onSubmitHandler = (values: any) => {
    const formData = {
      currentFundedAmount: values.currentFundedAmount,
      diagnosis: values.diagnosis,
      endDate: values.endDate,
      hospitalId: hospitalId,
      patientId: patientId,
      startDate: values.startDate,
      targetFunding: values.targetFunding,
      treatmentRequired: values.treatmentRequired,
      coverImage: `${imgUploadUrl}`,
    };
    mutate(formData);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={CampaignAddSchema}
    >
      {({ handleChange }) => (
        <>
          <ErrorModal
            open={isError}
            setIsOpen={setIsError}
            errorText={errorText}
          />
          <Form>
            <div className={styles.secondContainer}>
              <div className={styles.fullWidth}>
                <div className={styles.formContainer}>
                  <div className={styles.formContainer2}>
                    <div style={{ width: "45%" }}>
                      <ImageUpload
                        setImageUrlGenerated={setImageUrlGenerated}
                        setImagUploadUrl={setImagUploadUrl}
                      />
                      <FormSelectFieldID
                        fieldName="patientId"
                        fieldLabel="Patient"
                        formikChangeHandler={handleChange}
                        options={allUsers}
                        initialValue={"none"}
                        placeholder={"Select a patient"}
                        isFormName="campaign_create_patient"
                        setHospitalId={setHospitalId}
                        setPatientId={setPatientId}
                      />
                      <FormSelectFieldID
                        fieldName="hospitalId"
                        fieldLabel="Hospital"
                        formikChangeHandler={handleChange}
                        options={allHospitals}
                        initialValue={"none"}
                        placeholder={"Select hospital"}
                        isFormName="campaign_create_hospital"
                        setHospitalId={setHospitalId}
                        setPatientId={setPatientId}
                      />
                      <FormField
                        fieldName="treatmentRequired"
                        fieldLabel="Treatment Required"
                        fieldPlaceholder="Diabetes"
                      />
                      <FormField
                        fieldName="targetFunding"
                        fieldLabel="Target Funding"
                        fieldPlaceholder="100000"
                      />
                    </div>
                    <div style={{ width: "45%" }}>
                      <FormField
                        fieldName="diagnosis"
                        fieldLabel="Diagnosis"
                        fieldPlaceholder="Diabetes"
                      />
                      <FormField
                        fieldName="startDate"
                        fieldLabel="Starting Date"
                        fieldPlaceholder="2022-10-23"
                        formikChangeHandler={handleChange}
                      />
                      <FormField
                        fieldName="endDate"
                        fieldLabel="Ending Date"
                        fieldPlaceholder="2022-10-23"
                        formikChangeHandler={handleChange}
                      />
                      {/* <FormField
                        fieldName="currentFundedAmount"
                        fieldLabel="Current Funded Amount"
                        fieldPlaceholder="12000"
                      /> */}
                    </div>
                  </div>
                  <div style={{ margin: "20px" }}>
                    <FormButton
                      buttonVariant="contained"
                      buttonType="submit"
                      customStyle={styles.customBtnStyle}
                    >
                      {isLoading ? <LoadingSpinner type="button" /> : "Submit"}
                    </FormButton>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default AddNewCampaignForm;
