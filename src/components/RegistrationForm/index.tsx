import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import FormField from "../FormField";
import { useStyles } from "./index.style";
import { useNavigate } from "react-router-dom";
import FormButton from "../FormButton";
import FormSelectField from "../FormSelectField";
import * as Yup from "yup";
import { ROLES_NAMES, GENDER } from "../../constants";
import { RegistrationFormValues } from "../../types";
import { useRegister } from "../../hooks/useRegister";
import LoadingSpinner from "../LoadingSpinner";
import ErrorModal from "../ErrorModal";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import firebase from "../../utils/firebaseConfig";

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("*Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("*Required"),
  email: Yup.string().email("Invalid email").required("*Required"),
  role: Yup.string().required("*Required"),
  gender: Yup.string().required("*Required"),
  dateOfBirth: Yup.string().required("*Required"),
  phonenumber: Yup.string().required("*Required"),
  password: Yup.string()
    .required("*Required")
    .min(8, "Must be 8 characters or more")
    .matches(/[a-z]+/, "Must have one lowercase character")
    .matches(/[A-Z]+/, "Must have one uppercase character")
    .matches(/[@$!%*#?&_-]+/, "Must have one special character")
    .matches(/\d+/, "Must have one number"),
  confirmPassword: Yup.string()
    .required("*Required")
    .oneOf([Yup.ref("password"), null], "Passwords does not match"),
});

const RegistrationForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
  };
  const styles = useStyles();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onRegisterSuccess = (values: RegistrationFormValues) => {
    // navigate(`/verify-email/${values.email}`);
  };

  const onRegisterError = (error: any) => {
    setErrorText("User already exists");
    setIsError(true);
  };

  const auth: any = getAuth(firebase);

  const { data, mutate, isLoading, isSuccess } = useRegister({
    onSuccess: (_x: any, values: RegistrationFormValues) =>
      onRegisterSuccess(values),
    onError: (error: any) => onRegisterError(error),
  });

  useEffect(() => {
    if (isSuccess === true) {
      navigate("/login");
    }
  }, [data, isSuccess]);

  const onSubmitHandler = async (values: RegistrationFormValues) => {
    const formData: any = {
      am_et: {
        firstName: "ትግስት",
        lastName: "ለማ",
        bankAccounts: [
          {
            accountHolderName: "ትግስት ለማ",
            accountNumber: "1000234567890",
            bankName: "ንግድ ባንክ",
            country: "ኢትዮጵያ",
          },
        ],
        gender: "ወንድ",
        address: {
          country: "ኢትዮጵያ",
          city: "ኒው ዮርክ",
          address: "የስራ ቦታ",
        },
        occupation: {
          occupationType: "",
          workPlaceId: "",
        },
      },
      en_us: {
        firstName: values.firstName,
        lastName: values.lastName,
        bankAccounts: [
          {
            accountHolderName: `${values.firstName} ${values.lastName}`,
            accountNumber: "1000234567890",
            bankName: "CBE",
            country: "Ethiopia",
          },
        ],
        gender: values.gender,
      },
      email: values.email,
      phonenumber: values.phonenumber,
      dateOfBirth: values.dateOfBirth,
      password: values.password,
    };

    const auth: any = getAuth(firebase);
    const user = auth.currentUser;

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((data: any) => {
        const user = data?.user;
        // if (data.user?.uid) mutate(data.user?.uid);

        // if (!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
          .then((response) => {
            formData.firebaseUserId = data.user?.uid;
            mutate(formData);
          })
          .catch((err) => {
            console.log("BYE");
          });

        //   return null;
        // } else {
        //   return data;
        // }
      })
      .then((data) => {})
      .catch((err) => {
        console.error(err);
        if (err.message === "Firebase: Error (auth/wrong-password).") {
        } else if (err.message === "Firebase: Error (auth/user-not-found).") {
        }

        return null;
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      // validationSchema={RegistrationSchema}
    >
      {({ handleChange }) => (
        <>
          <ErrorModal
            open={isError}
            setIsOpen={setIsError}
            errorText={errorText}
          />
          <h1 className={styles.formHeader}>Registration</h1>
          <Form className={styles.formContainer}>
            <div>
              <FormField
                fieldName="firstName"
                fieldLabel="First name"
                fieldPlaceholder="John"
              />
              <FormField
                fieldName="lastName"
                fieldLabel="Last name"
                fieldPlaceholder="Miller"
              />
              <FormField
                fieldName="email"
                fieldLabel="Email"
                fieldPlaceholder="johnmiller@gmail.com"
              />
              <FormField
                fieldName="phonenumber"
                fieldLabel="Phone Number"
                fieldPlaceholder="johnmiller@gmail.com"
              />
              <FormField
                fieldName="dateOfBirth"
                fieldLabel="Date of Birth"
                fieldPlaceholder="2022-10-23"
                formikChangeHandler={handleChange}
              />
              <FormButton buttonVariant="contained" buttonType="submit">
                {isLoading ? <LoadingSpinner type="button" /> : "Submit"}
              </FormButton>
            </div>
            <div>
              <FormSelectField
                fieldName="gender"
                fieldLabel="Gender"
                formikChangeHandler={handleChange}
                options={GENDER}
                initialValue={"none"}
                placeholder={"Select a gender"}
                isFormName="user_register"
              />
              <FormSelectField
                fieldName="role"
                fieldLabel="Role"
                formikChangeHandler={handleChange}
                options={ROLES_NAMES}
                initialValue={"none"}
                placeholder={"Select a role"}
                isFormName="user_register"
              />
              <FormField
                fieldName="password"
                type="password"
                fieldLabel="Password"
                fieldPlaceholder=""
              />
              <FormField
                fieldName="confirmPassword"
                type="password"
                fieldLabel="Confirm Password"
                fieldPlaceholder=""
              />
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default RegistrationForm;
