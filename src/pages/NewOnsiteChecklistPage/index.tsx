import { Form, Formik } from "formik";
import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FormButton from "../../components/FormButton";
import FormSelectFieldAsset from "../../components/FormSelectFieldAsset";
import { useStyles } from "./index.style";
import * as Yup from "yup";
import ProgressBar from "../../components/ProgressBar";
import SystemsCheckListForm from "../../components/SystemsCheckListForm";
import ResourcesManagementCheckListForm from "../../components/ResourcesManagementCheckListForm";
import SafetyAndSecurityCheckListForm from "../../components/SafetyAndSecurityCheckListForm";
import ConnectivityCheckListForm from "../../components/ConnectivityCheckListForm";
import DataCheckListForm from "../../components/DataCheckListForm";
import HealthAndWellbeingCheckListForm from "../../components/HealthAndWellbeingCheckListForm";
import DigitalServicesCheckListForm from "../../components/DigitalServicesCheckListForm";
import { useNavigate } from "react-router-dom";
import IconUnderlinedButton from "../../components/IconUnderlinedButton";
import { NewOnSiteChecklistFormValues } from "../../types";
import { NewOnsiteChecklistContext } from "../../contexts/NewOnsiteChecklistContext";
import {
  FetchFormDataIndexedDB,
  saveStudentToIndexedDb,
  emptyStore,
} from "../../components/FormDataIndexedDB";
import {
  useConsultantForm,
  useUpdateConsultantForm,
} from "../../hooks/useConsultantForm";
import { useGetHospitals } from "../../hooks/useGetHospitals";
import { useGetFormData } from "../../hooks/useGetFormData";
import { useGetAssetsDraftForms } from "../../hooks/useGetAssetsDraftForms";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BUILDING_OPTIONS = ["Building A", "Building B", "Building C"];

const NewOnsiteChecklistPageSchema1 = Yup.object().shape({
  company: Yup.string().required("*Required"),
});
const NewOnsiteChecklistPageSchema2 = Yup.object().shape({
  systems1: Yup.string().required("*Required"),
  systemsInstallation1: Yup.string().required("*Required"),
  systemsEquipment1: Yup.string().required("*Required"),
  systemsUsers1: Yup.string().required("*Required"),
  systems1Q1: Yup.string().required("*Required"),
  systems1Q2: Yup.string().required("*Required"),
  systems1Q21: Yup.string().required("*Required"),
  systems2: Yup.string().required("*Required"),
  systemsInstallation2: Yup.string().required("*Required"),
  systemsEquipment2: Yup.string().required("*Required"),
  systemsUsers2: Yup.string().required("*Required"),
  systems2Q1: Yup.string().required("*Required"),
  systems2Q2: Yup.string().required("*Required"),
  systems21: Yup.string().required("*Required"),
  systemsInstallation21: Yup.string().required("*Required"),
  systemsEquipment21: Yup.string().required("*Required"),
  systemsUsers21: Yup.string().required("*Required"),
  systems2Q21: Yup.string().required("*Required"),
  systems22: Yup.string().required("*Required"),
  systemsInstallation22: Yup.string().required("*Required"),
  systemsEquipment22: Yup.string().required("*Required"),
  systemsUsers22: Yup.string().required("*Required"),
  systems3: Yup.string().required("*Required"),
  systemsInstallation3: Yup.string().required("*Required"),
  systemsEquipment3: Yup.string().required("*Required"),
  systemsUsers3: Yup.string().required("*Required"),
  systems3Q1: Yup.string().required("*Required"),
  systems3Q2: Yup.string().required("*Required"),
  systems4: Yup.string().required("*Required"),
  systemsInstallation4: Yup.string().required("*Required"),
  systemsEquipment4: Yup.string().required("*Required"),
  systemsUsers4: Yup.string().required("*Required"),
  systems4Q1: Yup.string().required("*Required"),
  systems4Q2: Yup.string().required("*Required"),
  systems5: Yup.string().required("*Required"),
  systemsInstallation5: Yup.string().required("*Required"),
  systemsEquipment5: Yup.string().required("*Required"),
  systemsUsers5: Yup.string().required("*Required"),
  systems5Q1: Yup.string().required("*Required"),
  systems5Q2: Yup.string().required("*Required"),
  systems5Q3: Yup.string().required("*Required"),
  systems6: Yup.string().required("*Required"),
  systemsInstallation6: Yup.string().required("*Required"),
  systemsEquipment6: Yup.string().required("*Required"),
  systemsUsers6: Yup.string().required("*Required"),
  systems6Q1: Yup.string().required("*Required"),
  systems7: Yup.string().required("*Required"),
  systemsInstallation7: Yup.string().required("*Required"),
  systemsEquipment7: Yup.string().required("*Required"),
  systemsUsers7: Yup.string().required("*Required"),
  systems7Q1: Yup.string().required("*Required"),
  systems7Q2: Yup.string().required("*Required"),
  systems8: Yup.string().required("*Required"),
  systemsInstallation8: Yup.string().required("*Required"),
  systemsEquipment8: Yup.string().required("*Required"),
  systemsUsers8: Yup.string().required("*Required"),
  systems8Q1: Yup.string().required("*Required"),
  systems8Q2: Yup.string().required("*Required"),
  systems9: Yup.string().required("*Required"),
  systemsInstallation9: Yup.string().required("*Required"),
  systemsEquipment9: Yup.string().required("*Required"),
  systemsUsers9: Yup.string().required("*Required"),
  systems9Q1: Yup.string().required("*Required"),
  systems9Q2: Yup.string().required("*Required"),
  systems9Q3: Yup.string().required("*Required"),
  systems9Q4: Yup.string().required("*Required"),
  systems10: Yup.string().required("*Required"),
  systemsInstallation10: Yup.string().required("*Required"),
  systemsEquipment10: Yup.string().required("*Required"),
  systemsUsers10: Yup.string().required("*Required"),
  systems10Q1: Yup.string().required("*Required"),
  systems10Q2: Yup.string().required("*Required"),
  systems10Q3: Yup.string().required("*Required"),
  systems10Q4: Yup.string().required("*Required"),
  systems11: Yup.string().required("*Required"),
  systemsInstallation11: Yup.string().required("*Required"),
  systemsEquipment11: Yup.string().required("*Required"),
  systemsUsers11: Yup.string().required("*Required"),
  systems11Q1: Yup.string().required("*Required"),
  systems11Q2: Yup.string().required("*Required"),
  systems11Q3: Yup.string().required("*Required"),
  systems12: Yup.string().required("*Required"),
  systemsInstallation12: Yup.string().required("*Required"),
  systemsEquipment12: Yup.string().required("*Required"),
  systemsUsers12: Yup.string().required("*Required"),
  systems12Q1: Yup.string().required("*Required"),
  systems12Q2: Yup.string().required("*Required"),
  systems13: Yup.string().required("*Required"),
  systemsInstallation13: Yup.string().required("*Required"),
  systemsEquipment13: Yup.string().required("*Required"),
  systemsUsers13: Yup.string().required("*Required"),
  systems13Q1: Yup.string().required("*Required"),
  systems13Q2: Yup.string().required("*Required"),
  systems13Q3: Yup.string().required("*Required"),
});
const NewOnsiteChecklistPageSchema3 = Yup.object().shape({
  resourcesManagement1: Yup.string().required("*Required"),
  resourcesManagementInstallation1: Yup.string().required("*Required"),
  resourcesManagementEquipment1: Yup.string().required("*Required"),
  resourcesManagementUsers1: Yup.string().required("*Required"),
  resourcesManagement1Q1: Yup.string().required("*Required"),
  resourcesManagement1Q2: Yup.string().required("*Required"),
  resourcesManagement1Q3: Yup.string().required("*Required"),
  resourcesManagement2: Yup.string().required("*Required"),
  resourcesManagementInstallation2: Yup.string().required("*Required"),
  resourcesManagementEquipment2: Yup.string().required("*Required"),
  resourcesManagementUsers2: Yup.string().required("*Required"),
  resourcesManagement2Q1: Yup.string().required("*Required"),
  resourcesManagement2Q2: Yup.string().required("*Required"),
  resourcesManagement3: Yup.string().required("*Required"),
  resourcesManagementInstallation3: Yup.string().required("*Required"),
  resourcesManagementEquipment3: Yup.string().required("*Required"),
  resourcesManagementUsers3: Yup.string().required("*Required"),
  resourcesManagement3Q1: Yup.string().required("*Required"),
  resourcesManagement3Q2: Yup.string().required("*Required"),
  resourcesManagement3Q3: Yup.string().required("*Required"),
  resourcesManagement32: Yup.string().required("*Required"),
  resourcesManagementInstallation32: Yup.string().required("*Required"),
  resourcesManagementEquipment32: Yup.string().required("*Required"),
  resourcesManagementUsers32: Yup.string().required("*Required"),
  resourcesManagement3Q21: Yup.string().required("*Required"),
  resourcesManagement4: Yup.string().required("*Required"),
  resourcesManagementInstallation4: Yup.string().required("*Required"),
  resourcesManagementEquipment4: Yup.string().required("*Required"),
  resourcesManagementUsers4: Yup.string().required("*Required"),
  resourcesManagement4Q1: Yup.string().required("*Required"),
  resourcesManagement4Q2: Yup.string().required("*Required"),
  resourcesManagement4Q3: Yup.string().required("*Required"),
  resourcesManagement5: Yup.string().required("*Required"),
  resourcesManagementInstallation5: Yup.string().required("*Required"),
  resourcesManagementEquipment5: Yup.string().required("*Required"),
  resourcesManagementUsers5: Yup.string().required("*Required"),
  resourcesManagement5Q1: Yup.string().required("*Required"),
  resourcesManagement5Q2: Yup.string().required("*Required"),
  resourcesManagement6: Yup.string().required("*Required"),
  resourcesManagementInstallation6: Yup.string().required("*Required"),
  resourcesManagementEquipment6: Yup.string().required("*Required"),
  resourcesManagementUsers6: Yup.string().required("*Required"),
  resourcesManagement6Q1: Yup.string().required("*Required"),
  resourcesManagement6Q2: Yup.string().required("*Required"),
});
const NewOnsiteChecklistPageSchema4 = Yup.object().shape({
  safetyAndSecurity1: Yup.string().required("*Required"),
  safetyAndSecurityInstallation1: Yup.string().required("*Required"),
  safetyAndSecurityEquipment1: Yup.string().required("*Required"),
  safetyAndSecurityUsers1: Yup.string().required("*Required"),
  safetyAndSecurity1Q1: Yup.string().required("*Required"),
  safetyAndSecurity1Q2: Yup.string().required("*Required"),
  safetyAndSecurity1Q3: Yup.string().required("*Required"),
  safetyAndSecurity1Q4: Yup.string().required("*Required"),
  safetyAndSecurity2: Yup.string().required("*Required"),
  safetyAndSecurityInstallation2: Yup.string().required("*Required"),
  safetyAndSecurityEquipment2: Yup.string().required("*Required"),
  safetyAndSecurityUsers2: Yup.string().required("*Required"),
  safetyAndSecurity2Q1: Yup.string().required("*Required"),
  safetyAndSecurity3: Yup.string().required("*Required"),
  safetyAndSecurityInstallation3: Yup.string().required("*Required"),
  safetyAndSecurityEquipment3: Yup.string().required("*Required"),
  safetyAndSecurityUsers3: Yup.string().required("*Required"),
  safetyAndSecurity3Q1: Yup.string().required("*Required"),
  safetyAndSecurity4: Yup.string().required("*Required"),
  safetyAndSecurityInstallation4: Yup.string().required("*Required"),
  safetyAndSecurityEquipment4: Yup.string().required("*Required"),
  safetyAndSecurityUsers4: Yup.string().required("*Required"),
  safetyAndSecurity4Q1: Yup.string().required("*Required"),
  safetyAndSecurity4Q2: Yup.string().required("*Required"),
  safetyAndSecurity5: Yup.string().required("*Required"),
  safetyAndSecurityInstallation5: Yup.string().required("*Required"),
  safetyAndSecurityEquipment5: Yup.string().required("*Required"),
  safetyAndSecurityUsers5: Yup.string().required("*Required"),
  // safetyAndSecurity5Q1: Yup.string().required("*Required"),
  safetyAndSecurity6: Yup.string().required("*Required"),
  safetyAndSecurityInstallation6: Yup.string().required("*Required"),
  safetyAndSecurityEquipment6: Yup.string().required("*Required"),
  safetyAndSecurityUsers6: Yup.string().required("*Required"),
  safetyAndSecurity6Q1: Yup.string().required("*Required"),
  safetyAndSecurity6Q2: Yup.string().required("*Required"),
  safetyAndSecurity6Q3: Yup.string().required("*Required"),
  safetyAndSecurity7: Yup.string().required("*Required"),
  safetyAndSecurityInstallation7: Yup.string().required("*Required"),
  safetyAndSecurityEquipment7: Yup.string().required("*Required"),
  safetyAndSecurityUsers7: Yup.string().required("*Required"),
  safetyAndSecurity7Q1: Yup.string().required("*Required"),
  safetyAndSecurity7Q2: Yup.string().required("*Required"),
  safetyAndSecurity7Q3: Yup.string().required("*Required"),
  safetyAndSecurity8: Yup.string().required("*Required"),
  safetyAndSecurityInstallation8: Yup.string().required("*Required"),
  safetyAndSecurityEquipment8: Yup.string().required("*Required"),
  safetyAndSecurityUsers8: Yup.string().required("*Required"),
  safetyAndSecurity9: Yup.string().required("*Required"),
  safetyAndSecurityInstallation9: Yup.string().required("*Required"),
  safetyAndSecurityEquipment9: Yup.string().required("*Required"),
  safetyAndSecurityUsers9: Yup.string().required("*Required"),
  safetyAndSecurity9Q1: Yup.string().required("*Required"),
  safetyAndSecurity9Q2: Yup.string().required("*Required"),
  safetyAndSecurity10: Yup.string().required("*Required"),
  safetyAndSecurityInstallation10: Yup.string().required("*Required"),
  safetyAndSecurityEquipment10: Yup.string().required("*Required"),
  safetyAndSecurityUsers10: Yup.string().required("*Required"),
  safetyAndSecurity10Q1: Yup.string().required("*Required"),
  safetyAndSecurity10Q2: Yup.string().required("*Required"),
  safetyAndSecurity10Q3: Yup.string().required("*Required"),
});
const NewOnsiteChecklistPageSchema5 = Yup.object().shape({
  connectivity1: Yup.string().required("*Required"),
  connectivityInstallation1: Yup.string().required("*Required"),
  connectivityEquipment1: Yup.string().required("*Required"),
  connectivityUsers1: Yup.string().required("*Required"),
  connectivity1Q1: Yup.string().required("*Required"),
  connectivity2: Yup.string().required("*Required"),
  connectivityInstallation2: Yup.string().required("*Required"),
  connectivityEquipment2: Yup.string().required("*Required"),
  connectivityUsers2: Yup.string().required("*Required"),
  connectivity2Q1: Yup.string().required("*Required"),
  connectivity2Q2: Yup.string().required("*Required"),
  connectivity3: Yup.string().required("*Required"),
  connectivityInstallation3: Yup.string().required("*Required"),
  connectivityEquipment3: Yup.string().required("*Required"),
  connectivityUsers3: Yup.string().required("*Required"),
  connectivity3Q1: Yup.string().required("*Required"),
  connectivity3Q2: Yup.string().required("*Required"),
  connectivity4: Yup.string().required("*Required"),
  connectivityInstallation4: Yup.string().required("*Required"),
  connectivityEquipment4: Yup.string().required("*Required"),
  connectivityUsers4: Yup.string().required("*Required"),
  connectivity4Q1: Yup.string().required("*Required"),
  connectivity4Q2: Yup.string().required("*Required"),
  connectivity4Q3: Yup.string().required("*Required"),
  connectivity4Q4: Yup.string().required("*Required"),
});
const NewOnsiteChecklistPageSchema6 = Yup.object().shape({
  data1: Yup.string().required("*Required"),
  dataInstallation1: Yup.string().required("*Required"),
  dataEquipment1: Yup.string().required("*Required"),
  dataUsers1: Yup.string().required("*Required"),
  data1Q1: Yup.string().required("*Required"),
  data1Q2: Yup.string().required("*Required"),
  data2: Yup.string().required("*Required"),
  dataInstallation2: Yup.string().required("*Required"),
  dataEquipment2: Yup.string().required("*Required"),
  dataUsers2: Yup.string().required("*Required"),
  data2Q1: Yup.string().required("*Required"),
  data2Q2: Yup.string().required("*Required"),
  data2Q3: Yup.string().required("*Required"),
  data3: Yup.string().required("*Required"),
  dataInstallation3: Yup.string().required("*Required"),
  dataEquipment3: Yup.string().required("*Required"),
  dataUsers3: Yup.string().required("*Required"),
  data3Q1: Yup.string().required("*Required"),
  data3Q2: Yup.string().required("*Required"),
  data3Q3: Yup.string().required("*Required"),
});
const NewOnsiteChecklistPageSchema7 = Yup.object().shape({
  healthAndWellbeing1: Yup.string().required("*Required"),
  healthAndWellbeingInstallation1: Yup.string().required("*Required"),
  healthAndWellbeingEquipment1: Yup.string().required("*Required"),
  healthAndWellbeingUsers1: Yup.string().required("*Required"),
  healthAndWellbeing1Q1: Yup.string().required("*Required"),
  healthAndWellbeing1Q2: Yup.string().required("*Required"),
  healthAndWellbeing2: Yup.string().required("*Required"),
  healthAndWellbeingInstallation2: Yup.string().required("*Required"),
  healthAndWellbeingEquipment2: Yup.string().required("*Required"),
  healthAndWellbeingUsers2: Yup.string().required("*Required"),
  healthAndWellbeing2Q1: Yup.string().required("*Required"),
  healthAndWellbeing2Q2: Yup.string().required("*Required"),
  healthAndWellbeing3: Yup.string().required("*Required"),
  healthAndWellbeingInstallation3: Yup.string().required("*Required"),
  healthAndWellbeingEquipment3: Yup.string().required("*Required"),
  healthAndWellbeingUsers3: Yup.string().required("*Required"),
  healthAndWellbeing3Q1: Yup.string().required("*Required"),
  healthAndWellbeing3Q2: Yup.string().required("*Required"),
  healthAndWellbeing3Q3: Yup.string().required("*Required"),
  healthAndWellbeing4: Yup.string().required("*Required"),
  healthAndWellbeingInstallation4: Yup.string().required("*Required"),
  healthAndWellbeingEquipment4: Yup.string().required("*Required"),
  healthAndWellbeingUsers4: Yup.string().required("*Required"),
  healthAndWellbeing4Q1: Yup.string().required("*Required"),
  healthAndWellbeing4Q2: Yup.string().required("*Required"),
  healthAndWellbeing5: Yup.string().required("*Required"),
  healthAndWellbeingInstallation5: Yup.string().required("*Required"),
  healthAndWellbeingEquipment5: Yup.string().required("*Required"),
  healthAndWellbeingUsers5: Yup.string().required("*Required"),
  healthAndWellbeing5Q1: Yup.string().required("*Required"),
});
const NewOnsiteChecklistPageSchema8 = Yup.object().shape({
  digitalServices1: Yup.string().required("*Required"),
  digitalServicesInstallation1: Yup.string().required("*Required"),
  digitalServicesEquipment1: Yup.string().required("*Required"),
  digitalServicesUsers1: Yup.string().required("*Required"),
  digitalServices1Q1: Yup.string().required("*Required"),
  digitalServices1Q2: Yup.string().required("*Required"),
  digitalServices1Q3: Yup.string().required("*Required"),
  digitalServices1Q4: Yup.string().required("*Required"),
  digitalServices1Q5: Yup.string().required("*Required"),
});

const schemas = [
  NewOnsiteChecklistPageSchema1,
  NewOnsiteChecklistPageSchema2,
  NewOnsiteChecklistPageSchema3,
  NewOnsiteChecklistPageSchema4,
  NewOnsiteChecklistPageSchema5,
  NewOnsiteChecklistPageSchema6,
  NewOnsiteChecklistPageSchema7,
  NewOnsiteChecklistPageSchema8,
];

const NewOnsiteChecklistPage = ({ parentRoute }: { parentRoute: string }) => {
  const styles = useStyles();
  const location = useLocation();

  const {
    assetValue,
    setAssetValue,
    setCurrentForm,
    setCurrentFormSavedAt,
    lastPage,
    setLastPage,
  } = useContext(NewOnsiteChecklistContext);

  const [selectedBuildingId, setSelectedBuildingId] = useState(null);

  // const { dataAssets } = useGetHospitals({
  //   // limit: 0,
  //   // offset: 0,
  // });

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
  const [lastFormData, setLastFormData] = useState(false);

  const [onsiteFormData, setOnsiteFormData]: any = useState(null);

  const { dataForm, isDataFormSuccess } = useGetFormData({
    onGetFormSuccess: function () {},
    id: draftId,
  });

  useEffect(() => {
    if (isDataFormSuccess) {
      setSavedValues(dataForm.data);
      setSavedAsset(dataForm.asset);
    } else {
      setSavedAsset("");
      setSavedValues("");
    }
  }, [isDataFormSuccess, dataForm]);

  const [step, setStep] = useState(initialStep || lastPage);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData]: any = useState(null);

  const navigate = useNavigate();

  const {
    mutate: consultantForm,
    isLoading,
    isSuccess,
    isError,
  } = useConsultantForm({
    onSuccess: (data) => console.log("just"),
  });

  const notify = () => {
    toast("Connection is not available");
  };

  const {
    mutate: updateConsultantDraft,
    isLoading: updateConsultantDraftIsLoading,
    isSuccess: updateConsultantDraftIsSuccess,
    isError: isErrorUpdate,
  } = useUpdateConsultantForm({
    onSuccess: (data) => console.log("draft updated"),
  });

  useEffect(() => {
    if ((isError === true || isErrorUpdate === true) && isSubmitted === true) {
      notify();
      emptyStore("onsite-form-data");

      formData.last_step = lastFormData ? 8 : formData?.last_step;

      saveStudentToIndexedDb(formData);
      navigate(`/${parentRoute}/forms`);
    }
  }, [isSubmitted, isError, isErrorUpdate, formData, navigate, parentRoute]);

  const { dataAssetsDraftForms } = useGetAssetsDraftForms({
    isDraft: true,
  });

  FetchFormDataIndexedDB("onsite-form-data", setOnsiteFormData);

  useEffect(() => {
    if (
      (fromDraft === false || fromSubmitted === false) &&
      (onsiteFormData !== "" || onsiteFormData !== undefined)
    ) {
      if (onsiteFormData?.data) {
        setSavedValues(onsiteFormData.data);
        setStep(onsiteFormData.last_step);
        setAssetValue(onsiteFormData.asset);
      }
    }
  }, [onsiteFormData, fromDraft, fromSubmitted, setAssetValue]);

  useEffect(() => {
    if (savedAsset !== null) {
      setAssetValue(savedAsset);
    }
  }, [savedAsset, setAssetValue]);

  const initialValues = {
    company: "",
    systems1: "",
    systemsInstallation1: "",
    systemsEquipment1: "",
    systemsUsers1: "",
    systems1Q1: "",
    systems1QImg: "",
    systems1Q2: "",
    systems1Q21: "",
    systems1Q3: "",
    systems1Q4: "",
    systems1Q5: "",
    systems2: "",
    systemsInstallation2: "",
    systemsEquipment2: "",
    systemsUsers2: "",
    systems2Q1: "",
    systems2Q2: "",
    systems21: "",
    systemsInstallation21: "",
    systemsEquipment21: "",
    systemsUsers21: "",
    systems21Img: "",
    systems2QImg: "",
    systems2Q21: "",
    systems22: "",
    systemsInstallation22: "",
    systemsEquipment22: "",
    systemsUsers22: "",
    systems22Img: "",
    systems3: "",
    systemsInstallation3: "",
    systemsEquipment3: "",
    systemsUsers3: "",
    systems3Q1: "",
    systems3Q2: "",
    systems3QImg: "",
    systems4: "",
    systemsInstallation4: "",
    systemsEquipment4: "",
    systemsUsers4: "",
    systems4Q1: "",
    systems4Q2: "",
    systems4Img: "",
    systems5: "",
    systemsInstallation5: "",
    systemsEquipment5: "",
    systemsUsers5: "",
    systems5Q1: "",
    systems5Q2: "",
    systems5Q3: "",
    systems5QImg: "",
    systems6: "",
    systemsInstallation6: "",
    systemsEquipment6: "",
    systemsUsers6: "",
    systems6Q1: "",
    systems6QImg: "",
    systems7: "",
    systemsInstallation7: "",
    systemsEquipment7: "",
    systemsUsers7: "",
    systems7Q1: "",
    systems7Q2: "",
    systems7Img: "",
    systems8: "",
    systemsInstallation8: "",
    systemsEquipment8: "",
    systemsUsers8: "",
    systems8Img: "",
    systems8Q1: "",
    systems8Q2: "",
    systems9: "",
    systemsInstallation9: "",
    systemsEquipment9: "",
    systemsUsers9: "",
    systems9Q1: "",
    systems9Q2: "",
    systems9Q3: "",
    systems9Q4: "",
    systems9Img: "",
    systems10: "",
    systemsInstallation10: "",
    systemsEquipment10: "",
    systemsUsers10: "",
    systems10Q1: "",
    systems10Q2: "",
    systems10Q3: "",
    systems10Q4: "",
    systems10Img: "",
    systems11: "",
    systemsInstallation11: "",
    systemsEquipment11: "",
    systemsUsers11: "",
    systems11Img: "",
    systems11Q1: "",
    systems11Q2: "",
    systems11Q3: "",
    systems12: "",
    systemsInstallation12: "",
    systemsEquipment12: "",
    systemsUsers12: "",
    systems12Q1: "",
    systems12Q2: "",
    systems12Img: "",
    systems13: "",
    systemsInstallation13: "",
    systemsEquipment13: "",
    systemsUsers13: "",
    systems13Q1: "",
    systems13Q2: "",
    systems13Q3: "",
    systems13Img: "",
    resourcesManagement1: "",
    resourcesManagementInstallation1: "",
    resourcesManagementEquipment1: "",
    resourcesManagementUsers1: "",
    resourcesManagement1Img: "",
    resourcesManagement1Q1: "",
    resourcesManagement1Q2: "",
    resourcesManagement1Q3: "",
    resourcesManagement2: "",
    resourcesManagementInstallation2: "",
    resourcesManagementEquipment2: "",
    resourcesManagementUsers2: "",
    resourcesManagement2Img: "",
    resourcesManagement2Q1: "",
    resourcesManagement2Q2: "",
    resourcesManagement3: "",
    resourcesManagementInstallation3: "",
    resourcesManagementEquipment3: "",
    resourcesManagementUsers3: "",
    resourcesManagement3Img: "",
    resourcesManagement3Q1: "",
    resourcesManagement3Q2: "",
    resourcesManagement3Q3: "",
    resourcesManagement32: "",
    resourcesManagementInstallation32: "",
    resourcesManagementEquipment32: "",
    resourcesManagementUsers32: "",
    resourcesManagement32Img: "",
    resourcesManagement3Q21: "",
    resourcesManagement4: "",
    resourcesManagementInstallation4: "",
    resourcesManagementEquipment4: "",
    resourcesManagementUsers4: "",
    resourcesManagement4Img: "",
    resourcesManagement4Q1: "",
    resourcesManagement4Q2: "",
    resourcesManagement4Q3: "",
    resourcesManagement5: "",
    resourcesManagementInstallation5: "",
    resourcesManagementEquipment5: "",
    resourcesManagementUsers5: "",
    resourcesManagement5Img: "",
    resourcesManagement5Q1: "",
    resourcesManagement5Q2: "",
    resourcesManagement6: "",
    resourcesManagementInstallation6: "",
    resourcesManagementEquipment6: "",
    resourcesManagementUsers6: "",
    resourcesManagement6Img: "",
    resourcesManagement6Q1: "",
    resourcesManagement6Q2: "",
    safetyAndSecurity1: "",
    safetyAndSecurityInstallation1: "",
    safetyAndSecurityEquipment1: "",
    safetyAndSecurityUsers1: "",
    safetyAndSecurity1Img: "",
    safetyAndSecurity1Q1: "",
    safetyAndSecurity1Q2: "",
    safetyAndSecurity1Q3: "",
    safetyAndSecurity1Q4: "",
    safetyAndSecurity2: "",
    safetyAndSecurityInstallation2: "",
    safetyAndSecurityEquipment2: "",
    safetyAndSecurityUsers2: "",
    safetyAndSecurity2Img: "",
    safetyAndSecurity2Q1: "",
    safetyAndSecurity3: "",
    safetyAndSecurityInstallation3: "",
    safetyAndSecurityEquipment3: "",
    safetyAndSecurityUsers3: "",
    safetyAndSecurity3Img: "",
    safetyAndSecurity3Q1: "",
    safetyAndSecurity4: "",
    safetyAndSecurityInstallation4: "",
    safetyAndSecurityEquipment4: "",
    safetyAndSecurityUsers4: "",
    safetyAndSecurity4Img: "",
    safetyAndSecurity4Q1: "",
    safetyAndSecurity4Q2: "",
    safetyAndSecurity5: "",
    safetyAndSecurityInstallation5: "",
    safetyAndSecurityEquipment5: "",
    safetyAndSecurityUsers5: "",
    safetyAndSecurity5Img: "",
    // safetyAndSecurity5Q1: "",
    safetyAndSecurity6: "",
    safetyAndSecurityInstallation6: "",
    safetyAndSecurityEquipment6: "",
    safetyAndSecurityUsers6: "",
    safetyAndSecurity6Img: "",
    safetyAndSecurity6Q1: "",
    safetyAndSecurity6Q2: "",
    safetyAndSecurity6Q3: "",
    safetyAndSecurity7: "",
    safetyAndSecurityInstallation7: "",
    safetyAndSecurityEquipment7: "",
    safetyAndSecurityUsers7: "",
    safetyAndSecurity7Img: "",
    safetyAndSecurity7Q1: "",
    safetyAndSecurity7Q2: "",
    safetyAndSecurity7Q3: "",
    safetyAndSecurity8: "",
    safetyAndSecurityInstallation8: "",
    safetyAndSecurityEquipment8: "",
    safetyAndSecurityUsers8: "",
    safetyAndSecurity8Img: "",
    safetyAndSecurity9: "",
    safetyAndSecurityInstallation9: "",
    safetyAndSecurityEquipment9: "",
    safetyAndSecurityUsers9: "",
    safetyAndSecurity9Img: "",
    safetyAndSecurity9Q1: "",
    safetyAndSecurity9Q2: "",
    safetyAndSecurity10: "",
    safetyAndSecurityInstallation10: "",
    safetyAndSecurityEquipment10: "",
    safetyAndSecurityUsers10: "",
    safetyAndSecurity10Img: "",
    safetyAndSecurity10Q1: "",
    safetyAndSecurity10Q2: "",
    safetyAndSecurity10Q3: "",
    connectivity1: "",
    connectivityInstallation1: "",
    connectivityEquipment1: "",
    connectivityUsers1: "",
    connectivity1Img: "",
    connectivity1Q1: "",
    connectivity2: "",
    connectivityInstallation2: "",
    connectivityEquipment2: "",
    connectivityUsers2: "",
    connectivity2Img: "",
    connectivity2Q1: "",
    connectivity2Q2: "",
    connectivity3: "",
    connectivityInstallation3: "",
    connectivityEquipment3: "",
    connectivityUsers3: "",
    connectivity3Img: "",
    connectivity3Q1: "",
    connectivity3Q2: "",
    connectivity4: "",
    connectivityInstallation4: "",
    connectivityEquipment4: "",
    connectivityUsers4: "",
    connectivity4Img: "",
    connectivity4Q1: "",
    connectivity4Q2: "",
    connectivity4Q3: "",
    connectivity4Q4: "",
    data1: "",
    dataInstallation1: "",
    dataEquipment1: "",
    dataUsers1: "",
    data1Img: "",
    data1Q1: "",
    data1Q2: "",
    data2: "",
    dataInstallation2: "",
    dataEquipment2: "",
    dataUsers2: "",
    data2Img: "",
    data2Q1: "",
    data2Q2: "",
    data2Q3: "",
    data3: "",
    dataInstallation3: "",
    dataEquipment3: "",
    dataUsers3: "",
    data3Img: "",
    data3Q1: "",
    data3Q2: "",
    data3Q3: "",
    healthAndWellbeing1: "",
    healthAndWellbeingInstallation1: "",
    healthAndWellbeingEquipment1: "",
    healthAndWellbeingUsers1: "",
    healthAndWellbeing1Img: "",
    healthAndWellbeing1Q1: "",
    healthAndWellbeing1Q2: "",
    healthAndWellbeing2: "",
    healthAndWellbeingInstallation2: "",
    healthAndWellbeingEquipment2: "",
    healthAndWellbeingUsers2: "",
    healthAndWellbeing2Img: "",
    healthAndWellbeing2Q1: "",
    healthAndWellbeing2Q2: "",
    healthAndWellbeing3: "",
    healthAndWellbeingInstallation3: "",
    healthAndWellbeingEquipment3: "",
    healthAndWellbeingUsers3: "",
    healthAndWellbeing3Img: "",
    healthAndWellbeing3Q1: "",
    healthAndWellbeing3Q2: "",
    healthAndWellbeing3Q3: "",
    healthAndWellbeing4: "",
    healthAndWellbeingInstallation4: "",
    healthAndWellbeingEquipment4: "",
    healthAndWellbeingUsers4: "",
    healthAndWellbeing4Img: "",
    healthAndWellbeing4Q1: "",
    healthAndWellbeing4Q2: "",
    healthAndWellbeing5: "",
    healthAndWellbeingInstallation5: "",
    healthAndWellbeingEquipment5: "",
    healthAndWellbeingUsers5: "",
    healthAndWellbeing5Img: "",
    healthAndWellbeing5Q1: "",
    digitalServices1: "",
    digitalServicesInstallation1: "",
    digitalServicesEquipment1: "",
    digitalServicesUsers1: "",
    digitalServices1Img: "",
    digitalServices1Q1: "",
    digitalServices1Q2: "",
    digitalServices1Q3: "",
    digitalServices1Q4: "",
    digitalServices1Q5: "",
  };

  const onSubmitHandler = (data: NewOnSiteChecklistFormValues) => {
    if (step === 8) {
      setStep(8);
    } else {
      setStep((prevState) => prevState + 1);
    }

    const formData: any = {
      data,
      type: "ONSITE_CHECKLIST",
      asset: selectedBuildingId !== null ? selectedBuildingId : assetValue,
      last_step: 2,
    };

    setCurrentFormSavedAt(new Date());
    setCurrentForm(formData);

    if (step === 8) {
      setFormSubmitted(true);

      if (draftId) {
        formData.is_draft = false;
        formData.id = draftId;

        console.log("One");

        updateConsultantDraft(formData);

        setFormData(formData);
        setIsSubmitted(true);
        setLastFormData(true);
      } else {
        consultantForm(formData);

        console.log("Two");

        setFormData(formData);
        setIsSubmitted(true);
        setLastFormData(true);
      }

      setLastPage(1);
      setAssetValue(null);
      setCurrentForm(null);
    }
  };

  useEffect(() => {
    if (isSuccess === true || updateConsultantDraftIsSuccess === true) {
      emptyStore("onsite-form-data");
      navigate(`/${parentRoute}/forms`);
    }
  }, [isSuccess, updateConsultantDraftIsSuccess, navigate, parentRoute]);

  const onCancelClickHandler = () => {
    if (draftId) {
      if (fromSubmitted) {
        navigate(`/${parentRoute}/forms`, { state: { tab: 3 } });
      }
      if (fromDraft) {
        navigate(`/${parentRoute}/forms`, { state: { tab: 2 } });
      }
    } else {
      navigate(`/${parentRoute}/forms`);
    }
  };

  const onSaveAndExitClickHandler = (data: NewOnSiteChecklistFormValues) => {
    setCurrentFormSavedAt(new Date());

    let draftedBuilding: any = null;

    dataAssetsDraftForms?.results.forEach((result: any) => {
      if (
        result.building_name === data.company &&
        result.type === "ONSITE_CHECKLIST"
      ) {
        draftedBuilding = result;
      }
    });

    console.log(
      draftedBuilding,
      "draftedBuilding draftedBuilding draftedBuilding"
    );

    if (draftId) {
      const formData: any = {
        asset: selectedBuildingId !== null ? selectedBuildingId : assetValue,
        data: data,
        type: "ONSITE_CHECKLIST",
        last_step: step,
        is_draft: true,
        id: draftId,
      };

      updateConsultantDraft(formData);

      console.log("Three", draftId);

      setFormData(formData);
      setIsSubmitted(true);

      setCurrentForm(null);
      setLastPage(1);
    } else if (draftedBuilding !== null) {
      console.log(draftedBuilding?.id, "draftedBuilding");

      const formData: any = {
        asset: draftedBuilding?.asset_id,
        data: data,
        type: "ONSITE_CHECKLIST",
        last_step: step,
        is_draft: true,
        id: draftedBuilding?.id,
      };

      consultantForm(formData);

      console.log(formData?.id, "Four");

      setFormData(formData);
      setIsSubmitted(true);

      setCurrentForm(null);
      setLastPage(1);
    } else {
      const formData: any = {
        asset: selectedBuildingId !== null ? selectedBuildingId : assetValue,
        data: data,
        type: "ONSITE_CHECKLIST",
        last_step: step,
        is_draft: true,
      };

      consultantForm(formData);

      console.log("Five");

      setFormData(formData);
      setIsSubmitted(true);

      setCurrentForm(null);
      setLastPage(1);
    }
  };

  const onBackButtonClickHandler = () => {
    setStep((prevState) => prevState - 1);
  };

  return (
    <>
      {fromDraft || fromSubmitted ? (
        isDataFormSuccess ? (
          <Formik
            initialValues={savedValues || initialValues}
            onSubmit={onSubmitHandler}
            enableReinitialize={true}
            // validationSchema={schemas[step - 1]}
            // validateOnChange={false}
            // validateOnBlur={false}
          >
            {({ handleChange, values, validateForm }) => (
              <>
                <ProgressBar
                  customStyle={styles.progressBar}
                  numberOfSteps={8}
                  currentStep={step}
                />
                <Form className={styles.formContainer}>
                  {step === 1 && (
                    <FormSelectFieldAsset
                      fieldName="company"
                      formikChangeHandler={handleChange}
                      options={BUILDING_OPTIONS}
                      initialValue={
                        values.company !== "" ? values.company : "none"
                      }
                      placeholder={"Building"}
                      customStyle={styles.buildingChoiceContainer}
                      isAssetSelect={true}
                      setSelectedBuildingId={setSelectedBuildingId}
                      assumptionFormSetFieldValue={() => null}
                    />
                  )}
                  {step === 2 && (
                    <SystemsCheckListForm
                      formikChangeHandler={handleChange}
                      initialValue={"none"}
                      placeholder={"Select answer"}
                      formValues={values}
                    />
                  )}
                  {step === 3 && (
                    <ResourcesManagementCheckListForm
                      formikChangeHandler={handleChange}
                      initialValue={"none"}
                      placeholder={"Select answer"}
                      formValues={values}
                    />
                  )}
                  {step === 4 && (
                    <SafetyAndSecurityCheckListForm
                      formikChangeHandler={handleChange}
                      initialValue={"none"}
                      placeholder={"Select answer"}
                      formValues={values}
                    />
                  )}
                  {step === 5 && (
                    <ConnectivityCheckListForm
                      formikChangeHandler={handleChange}
                      initialValue={"none"}
                      placeholder={"Select answer"}
                      formValues={values}
                    />
                  )}
                  {step === 6 && (
                    <DataCheckListForm
                      formikChangeHandler={handleChange}
                      initialValue={"none"}
                      placeholder={"Select answer"}
                      formValues={values}
                    />
                  )}
                  {step === 7 && (
                    <HealthAndWellbeingCheckListForm
                      formikChangeHandler={handleChange}
                      initialValue={"none"}
                      placeholder={"Select answer"}
                      formValues={values}
                    />
                  )}
                  {step === 8 && (
                    <DigitalServicesCheckListForm
                      formikChangeHandler={handleChange}
                      initialValue={"none"}
                      placeholder={"Select answer"}
                      formValues={values}
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
                          disabled={isLoading || updateConsultantDraftIsLoading}
                        >
                          Back
                        </FormButton>
                      )}
                      <FormButton
                        customStyle={styles.nextPageBtn}
                        buttonVariant="contained"
                        key={step === 8 ? "finish" : "next"}
                        buttonType="submit"
                        disabled={isLoading || updateConsultantDraftIsLoading}
                      >
                        {step === 8 ? (
                          (isLoading || updateConsultantDraftIsLoading) &&
                          formSubmitted ? (
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
                        disabled={isLoading || updateConsultantDraftIsLoading}
                      >
                        {(isLoading || updateConsultantDraftIsLoading) &&
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
                        disabled={isLoading || updateConsultantDraftIsLoading}
                      >
                        Cancel
                      </IconUnderlinedButton>
                    </div>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        ) : (
          <LoadingSpinner />
        )
      ) : (
        <Formik
          initialValues={savedValues || initialValues}
          onSubmit={onSubmitHandler}
          // validationSchema={schemas[step - 1]}
          // validateOnChange={false}
          // validateOnBlur={false}
          enableReinitialize={true}
        >
          {({ handleChange, values, validateForm }) => (
            <>
              <ProgressBar
                customStyle={styles.progressBar}
                numberOfSteps={8}
                currentStep={step}
              />
              <Form className={styles.formContainer}>
                {step === 1 && (
                  <FormSelectFieldAsset
                    fieldName="company"
                    formikChangeHandler={handleChange}
                    options={BUILDING_OPTIONS}
                    initialValue={
                      values.company !== "" ? values.company : "none"
                    }
                    placeholder={"Building"}
                    customStyle={styles.buildingChoiceContainer}
                    isAssetSelect={true}
                    setSelectedBuildingId={setSelectedBuildingId}
                    assumptionFormSetFieldValue={() => null}
                  />
                )}
                {step === 2 && (
                  <SystemsCheckListForm
                    formikChangeHandler={handleChange}
                    initialValue={"none"}
                    placeholder={"Select answer"}
                    formValues={values}
                  />
                )}
                {step === 3 && (
                  <ResourcesManagementCheckListForm
                    formikChangeHandler={handleChange}
                    initialValue={"none"}
                    placeholder={"Select answer"}
                    formValues={values}
                  />
                )}
                {step === 4 && (
                  <SafetyAndSecurityCheckListForm
                    formikChangeHandler={handleChange}
                    initialValue={"none"}
                    placeholder={"Select answer"}
                    formValues={values}
                  />
                )}
                {step === 5 && (
                  <ConnectivityCheckListForm
                    formikChangeHandler={handleChange}
                    initialValue={"none"}
                    placeholder={"Select answer"}
                    formValues={values}
                  />
                )}
                {step === 6 && (
                  <DataCheckListForm
                    formikChangeHandler={handleChange}
                    initialValue={"none"}
                    placeholder={"Select answer"}
                    formValues={values}
                  />
                )}
                {step === 7 && (
                  <HealthAndWellbeingCheckListForm
                    formikChangeHandler={handleChange}
                    initialValue={"none"}
                    placeholder={"Select answer"}
                    formValues={values}
                  />
                )}
                {step === 8 && (
                  <DigitalServicesCheckListForm
                    formikChangeHandler={handleChange}
                    initialValue={"none"}
                    placeholder={"Select answer"}
                    formValues={values}
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
                        disabled={isLoading || updateConsultantDraftIsLoading}
                      >
                        Back
                      </FormButton>
                    )}
                    <FormButton
                      customStyle={styles.nextPageBtn}
                      buttonVariant="contained"
                      key={step === 8 ? "finish" : "next"}
                      buttonType="submit"
                      disabled={isLoading || updateConsultantDraftIsLoading}
                    >
                      {step === 8 ? (
                        (isLoading || updateConsultantDraftIsLoading) &&
                        formSubmitted ? (
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
                      disabled={isLoading || updateConsultantDraftIsLoading}
                    >
                      {(isLoading || updateConsultantDraftIsLoading) &&
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
                      disabled={isLoading || updateConsultantDraftIsLoading}
                    >
                      Cancel
                    </IconUnderlinedButton>
                  </div>
                </div>
              </Form>
            </>
          )}
        </Formik>
      )}
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

export default NewOnsiteChecklistPage;
