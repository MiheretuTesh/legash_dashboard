import React from "react";
import { useStyles } from "./index.style";
import { useNavigate } from "react-router-dom";
import FundAssetManagerHomePageCard from "../../components/FundAssetManagerHomePageCard";

const NEW_FORM_CARD_TXT =
    "Click here to access the building's data";

const DASHBOARD_CARD_TXT = "Click here to view the building's dashboards";

const CARD_TXT_ADMIN =
    "Click here to access the building’s data";

const DASHBOARD_CARD_TXT_ADMIN =
    "Click here to view the building’s dashboards";


const FundAssetManagerHomePage = ({parentRoute}: any) => {
    const styles = useStyles();
    const navigate = useNavigate();

    const onFormsViewClickHandler = () => {
        navigate(`/${parentRoute}/forms`);
    };
    const onDashboardsViewClickHandler = () => {
        navigate(`/${parentRoute}/dashboards`);
    };

    return (
        <div className={styles.container}>
            <FundAssetManagerHomePageCard
                onViewClick={onFormsViewClickHandler}
                title="Forms"
                text={parentRoute === "account-fund-admin" ? CARD_TXT_ADMIN : NEW_FORM_CARD_TXT}
            />
            <FundAssetManagerHomePageCard
                onViewClick={onDashboardsViewClickHandler}
                title="Dashboards"
                text={parentRoute === "account-fund-admin" ? DASHBOARD_CARD_TXT_ADMIN : DASHBOARD_CARD_TXT}
            />
        </div>
    );
};

export default FundAssetManagerHomePage;
