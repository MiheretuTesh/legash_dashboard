import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useStyles } from "./index.style";
import FormField from "../FormField";
import RememberMe from "../RememberMe";
import { Link, useNavigate } from "react-router-dom";
import FormButton from "../FormButton";
import * as Yup from "yup";
import { useLogin } from "../../hooks/useLogin";
import LoadingSpinner from "../LoadingSpinner";
import { LoginFormValues } from "../../types";
import ErrorModal from "../ErrorModal";
import AxiosInstance from "../../api/AxiosInstance";
import { loginRequest } from "../../utils/MicrosoftRedirect/authConfig";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const styles = useStyles();
  const navigate = useNavigate();
  const [rememberMeState, setRememberMeState] = useState(false);

  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onLoginSuccess = (data: any) => {
    localStorage.setItem("token", data.data.token.authToken);
    sessionStorage.setItem("token", data.data.token.authToken);
    /*navigate("/account");*/
  };

  const onLoginError = (error: any) => {
    setErrorText("Incorrect email or password");
    setIsError(true);
  };

  /*const userCode = useGetCode();*/

  const { mutate, isLoading, isSuccess, data } = useLogin({
    onSuccess: (data) => onLoginSuccess(data),
    onError: (error) => onLoginError(error),
  });

  useEffect(() => {
    if (isSuccess) {
      // navigate("/account-admin");
      // const userProfile = async () => {
      //   const { data } = await AxiosInstance.get("users/profile/");
      if (data.data.data.role.roleName === "Admin") {
        localStorage.setItem("role", data.data.data.role.roleName);
        navigate("/account-admin");
      } else if (data.data.data.role.roleName === "Hospital Admin") {
        localStorage.setItem("role", data.data.data.role.roleName);
        navigate("/hospital-admin");
      } else if (data.data.data.role.roleName === "Patient") {
        localStorage.setItem("role", data.data.data.role.roleName);
        navigate("/user");
      } else if (data.data.data.role.roleName === "user") {
        localStorage.setItem("role", data.data.data.role.roleName);
        navigate("/user");
      } else {
        window.location.reload();
      }
      // };
      // userProfile();
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const role = localStorage.getItem("role");
      if (role === "Admin") {
        navigate("/account-admin");
      } else if (role === "Hospital Admin") {
        navigate("/hospital-admin");
      } else if (role === "Patient") {
        navigate("/user");
      } else if (role === "user") {
        navigate("/user");
      } else {
        window.location.reload();
      }
    }
  }, [localStorage]);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("*Required"),
    password: Yup.string().required("*Required"),
  });

  const onSubmitHandler = (values: LoginFormValues) => {
    console.log(values, "values  values values");
    mutate(values);
    // navigate("/account-admin");

    // if (isAmbioAuthenticated) {
    //   mutate(values);
    // } else {
    //   /*
    //    * check if domain is @patrizia
    //    * */
    //   var check_email = "[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})[@](patrizia.ag)";
    //   var patt = new RegExp(check_email);
    //   var result = patt.test(values.email);
    //   if (result) {
    //     setIsPatrizia(true);
    //     instance.loginRedirect(loginRequest).catch((e) => {
    //       console.log(e);
    //     });
    //     /*userCode.mutate(values);*/
    //   } else {
    //     setIsPatrizia(false);
    //     setIsAmbioAuthenticated(true);
    //   }
    // }
  };

  // useEffect(() => {
  //    if ( isPatrizia) {
  //      /!*redirect to ms login*!/
  //      instance.loginRedirect(loginRequest).catch((e) => {
  //        console.log(e);
  //      });
  //    } else if (userCode.isError && isPatrizia) {
  //      /!*redirect to registration form*!/
  //      navigate("/register");
  //    }
  //
  //  }, [userCode, instance, isPatrizia, navigate]);

  //   useEffect(()=>{
  //     instance
  //         .acquireTokenSilent({
  //           ...loginRequest,
  //           account: accounts[0],
  //         })
  //         .then((response) => {
  //               const callApi = async () => {

  //                   setIsPageLoading(true);

  //                   const {data} = await AxiosInstance.post("users/validate_microsoft_token/", {token: response.idToken});
  //                   if(data.access){
  //                     localStorage.setItem("token", data.access);
  //                     localStorage.setItem("type", data.type);
  //                     sessionStorage.setItem("token", data.access);

  //                     /*setIsPageLoading(false);*/

  //                     if (data.new_user) {
  //                       setTimeout(() => {
  //                         navigate('/selectrole')
  //                       }, 1000);

  //                     } else {
  //                       switch (data.type) {
  //                         case "FUND_ASSET_MANAGER":
  //                           navigate('/account');
  //                           break;
  //                         case "FUND_ASSET_MANAGER_ADMIN":
  //                           navigate('/account-fund-admin');
  //                           break;
  //                         case "ENGINEER":
  //                           navigate('/account-consultant');
  //                           break;
  //                         case "ADMIN":
  //                           navigate('/account-admin');
  //                           break;
  //                       }
  //                     }
  //                   }

  //               };

  //   callApi();
  // }
  // ).catch((err) => {
  // });

  // },[inProgress, accounts, instance, navigate]);

  return (
    <>
      {isPageLoading ? (
        <LoadingSpinner type="page" />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitHandler}
          validationSchema={LoginSchema}
        >
          {() => (
            <>
              <ErrorModal
                open={isError}
                setIsOpen={setIsError}
                errorText={errorText}
              />
              <Form className={styles.formContainer}>
                <h1 className={styles.formHeader}>Login</h1>
                <FormField
                  fieldName="email"
                  fieldLabel="Email"
                  fieldPlaceholder="johnmiller@gmail.com"
                />
                <>
                  <FormField
                    fieldName="password"
                    type="password"
                    fieldLabel="Password"
                    fieldPlaceholder=""
                  />
                  <div className={styles.rememberForgotPasswordContainer}>
                    <RememberMe
                      state={rememberMeState}
                      setState={setRememberMeState}
                    />
                    <Link
                      to={"/forgot-password"}
                      className={styles.forgotPasswordTxt}
                    >
                      Forgot password?
                    </Link>
                  </div>
                </>

                <FormButton buttonVariant="contained" buttonType="submit">
                  {isLoading ? <LoadingSpinner type="button" /> : "Login"}
                </FormButton>
              </Form>
            </>
          )}
        </Formik>
      )}
    </>
  );
};

export default LoginForm;
