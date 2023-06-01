import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useStyles } from "./index.style";
import { useLocation } from "react-router";
import * as Yup from "yup";
import AddNewCampaignForm from "../../components/AddNewCampaignForm";

const AddNewCampaign = ({ parentRoute }: { parentRoute: string }) => {
  const styles = useStyles();

  const location = useLocation();

  return (
    <div className={styles.container}>
      <AddNewCampaignForm />
    </div>
  );
};

export default AddNewCampaign;
