import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useStyles } from "./index.style";
import { useLocation } from "react-router";
import * as Yup from "yup";
import AddNewCampaignForm from "../../components/AddNewCampaignForm";

const AddNewCampaign = ({ parentRoute }: { parentRoute: string }) => {
  const styles = useStyles();

  const location = useLocation();

  useEffect(() => {}, [location]);

  const onSubmitHandler = (data: any) => {};

  const initialValues = {
    buildingName: "",
  };
  const AddNewCampaignSchema = Yup.object().shape({
    // company: Yup.string().required("*Required"),
  });

  const schema = [AddNewCampaignSchema];

  const BUILDING_OPTIONS = ["Building A1", "Building A2", "Building A3"];

  const [selectedBuildingId, setSelectedBuildingId] = useState(null);

  return (
    <div className={styles.container}>
      <AddNewCampaignForm />
    </div>
  );
};

export default AddNewCampaign;
