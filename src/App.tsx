import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AssumtionFormValues, NewOnSiteChecklistFormValues } from "./types";
import { NewOnsiteChecklistContext } from "./contexts/NewOnsiteChecklistContext";
import { AssumptionFormContext } from "./contexts/AssumptionFormContext";
import LoadingSpinner from "./components/LoadingSpinner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SelectRolePage from "./pages/SelectRolePage";
import firebase from "./utils/firebaseConfig";
// import Landing from "./Landing/src/screens/Landing";

const RootRouter = React.lazy(() => import("./routers/RootRouter"));
const AccountRouter = React.lazy(() => import("./routers/AccountRouter"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const HospitalPage = React.lazy(() => import("./pages/HospitalPage"));
const CampaignPage = React.lazy(() => import("./pages/CampaignPage"));
const UserPage = React.lazy(() => import("./pages/UsersPage"));
const DashboardsPage = React.lazy(() => import("./pages/DashboardsPage"));
const AdminHomePage = React.lazy(() => import("./pages/AdminHomePage"));

const AddNewHospital = React.lazy(() => import("./pages/AddNewHospital"));
const AddNewCampaign = React.lazy(() => import("./pages/AddNewCampaign"));
const AddCampaignForm = React.lazy(() => import("./pages/AddCampaignForm"));

const AddHospitalForm = React.lazy(() => import("./pages/AddHospitalForm"));

const FundAssetManagerHomePage = React.lazy(
  () => import("./pages/FundAssetManagerHomePage")
);
const HelpPage = React.lazy(() => import("./pages/HelpPage"));
const SettingsPage = React.lazy(() => import("./pages/SettingsPage"));
const HospitalDetailsPage = React.lazy(
  () => import("./pages/HospitalDetailsPage")
);
const CampaignDetailsPage = React.lazy(
  () => import("./pages/CampaignDetailsPage")
);

const AssumptionsFormPage = React.lazy(
  () => import("./pages/AssumptionsFormPage")
);
const AdminNewForm = React.lazy(() => import("./pages/AdminNewForm"));
const AssumptionsFormPageOnSiteCheckList = React.lazy(
  () => import("./pages/AssumptionsFormPageOnSiteCheckList")
);
const ForgotPasswordPage = React.lazy(
  () => import("./pages/ForgotPasswordPage")
);
const SetNewPasswordPage = React.lazy(
  () => import("./pages/SetNewPasswordPage")
);
const SuccessRegistrationStepPage = React.lazy(
  () => import("./pages/SuccessRegistrationStepPage")
);
const CheckYourEmailPage = React.lazy(
  () => import("./pages/CheckYourEmailPage")
);
const VerifyEmailPage = React.lazy(() => import("./pages/VerifyEmailPage"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function App() {
  const queryClient = new QueryClient();
  const [currentForm, setCurrentForm] = useState<
    NewOnSiteChecklistFormValues | any
  >();

  const [currentFormSavedAt, setCurrentFormSavedAt] = useState<Date>();

  const [lastPage, setLastPage] = useState(1);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [assetCurrentForm, setAssetCurrentForm] = useState<
    AssumtionFormValues | any
  >();
  const [assetCurrentFormSavedAt, setAssetCurrentFormSavedAt] =
    useState<Date>();
  const [assetLastPage, setAssetLastPage] = useState(1);

  const [assetValue, setAssetValue] = useState<any>(1);

  const [reportPageTitle, setReportPageTitle] = useState("");

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const appContextValue = {
    currentForm,
    setCurrentForm,
    currentFormSavedAt,
    setCurrentFormSavedAt,
    lastPage,
    setLastPage,
    assetValue,
    setAssetValue,
    windowSize,
    reportPageTitle,
    setReportPageTitle,
  };

  const assumptionContextValue = {
    assetCurrentForm,
    setAssetCurrentForm,
    assetCurrentFormSavedAt,
    setAssetCurrentFormSavedAt,
    assetLastPage,
    setAssetLastPage,
    assetValue,
    setAssetValue,
    windowSize,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <NewOnsiteChecklistContext.Provider value={appContextValue}>
        <AssumptionFormContext.Provider value={assumptionContextValue}>
          <div className="App">
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<LoadingSpinner type="page" />}>
                      <RootRouter />
                    </Suspense>
                  }
                  errorElement={<ErrorPage />}
                >
                  <Route
                    index
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <Navigate replace to="login" />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  />
                  <Route
                    path="register"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <RegisterPage />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  />
                  <Route
                    path="login"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <LoginPage />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  />
                  {/* <Route
                    path="home"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <Landing />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  /> */}
                  <Route
                    path="forgot-password"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <ForgotPasswordPage />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  />
                  <Route
                    path="check-your-email/:email"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <CheckYourEmailPage />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  />
                  <Route
                    path="password-reset/confirm"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <SetNewPasswordPage />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  />
                  <Route
                    path="verify-email/:email"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <VerifyEmailPage />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  />
                  <Route
                    path="success/:type"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <SuccessRegistrationStepPage />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  />
                </Route>

                <Route element={<ProtectedRoutes />}>
                  <Route
                    path="selectrole"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <SelectRolePage />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  />

                  {/* Account Admin */}
                  <Route
                    path="account-admin"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <AccountRouter userType="admin" />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  >
                    <Route
                      index
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AdminHomePage />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="dashboards"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <DashboardsPage />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="hospitals"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <HospitalPage parentRoute="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="new-hospitals"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AddHospitalForm parentRoute="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="hospital-detail/:id"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <HospitalDetailsPage userType="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    {/* <Route
                      path="campaigns"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <CampaignPage parentRoute="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    /> */}
                    <Route
                      path="campaign/:id"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <CampaignDetailsPage userType="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="new-campaign"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AddCampaignForm parentRoute="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="users"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <UserPage parentRoute="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="report"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AssumptionsFormPage parentRoute="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="archive"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AssumptionsFormPage parentRoute="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="newform"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AdminNewForm />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    {/* <Route
                      path="consultant-form"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <NewOnsiteChecklistPage parentRoute="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    /> */}
                    <Route
                      path="new-onsite-checklist"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AssumptionsFormPageOnSiteCheckList parentRoute="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="settings"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <SettingsPage userType="admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="help"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <HelpPage userType="admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                  </Route>

                  {/* Hospital Admin */}
                  <Route
                    path="hospital-admin"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <AccountRouter userType="hospital-admin" />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  >
                    <Route
                      index
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AdminHomePage />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    {/* <Route
                      path="report/:reportId"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <PBIReportPage />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    /> */}
                    <Route
                      path="dashboards"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <DashboardsPage />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="hospitals"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <HospitalPage parentRoute="hospital-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="hospital-detail/:id"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <HospitalDetailsPage userType="hospital-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="new-hospitals"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AddHospitalForm parentRoute="hospital-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="campaigns"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <CampaignPage parentRoute="hospital-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="campaign/:id"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <CampaignDetailsPage userType="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="new-campaign"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AddCampaignForm parentRoute="account-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="report"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AssumptionsFormPage parentRoute="hospital-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="archive"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AssumptionsFormPage parentRoute="hospital-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="newform"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AdminNewForm />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    {/* <Route
                      path="consultant-form"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <NewOnsiteChecklistPage parentRoute="hospital-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    /> */}
                    <Route
                      path="new-onsite-checklist"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AssumptionsFormPageOnSiteCheckList parentRoute="hospital-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="settings"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <SettingsPage userType="hospital-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="help"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <HelpPage userType="hospital-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                  </Route>

                  {/* REPORT ADMIN */}
                  <Route
                    path="report-admin"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <AccountRouter userType="report-admin" />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  >
                    <Route
                      index
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <FundAssetManagerHomePage parentRoute="report-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="archive"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <DashboardsPage />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="forms"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AssumptionsFormPage parentRoute="report-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="new-onsite-checklist"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AssumptionsFormPageOnSiteCheckList parentRoute="report-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="settings"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <SettingsPage userType="report-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="help"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <HelpPage userType="report-admin" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                  </Route>

                  {/* User */}
                  <Route
                    path="user"
                    element={
                      <Suspense fallback={<LoadingSpinner type="page" />}>
                        <AccountRouter userType="user" />
                      </Suspense>
                    }
                    errorElement={<ErrorPage />}
                  >
                    <Route
                      index
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AdminHomePage />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="users"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <UserPage parentRoute="user" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="dashboards"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <DashboardsPage />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="report"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AssumptionsFormPage parentRoute="user" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="archive"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AssumptionsFormPage parentRoute="user" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="new-onsite-checklist"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <AssumptionsFormPageOnSiteCheckList parentRoute="user" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="settings"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <SettingsPage userType="user" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                    <Route
                      path="help"
                      element={
                        <Suspense fallback={<LoadingSpinner type="page" />}>
                          <HelpPage userType="user" />
                        </Suspense>
                      }
                      errorElement={<ErrorPage />}
                    />
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </AssumptionFormContext.Provider>
      </NewOnsiteChecklistContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
