import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  LegashIconTextDark,
  AmbioWallpaperLeft,
  AmbioWallpaperRight,
} from "../../assets";
import { useStyles } from "./index.style";

const preloadSrcList: string[] = [
  LegashIconTextDark,
  AmbioWallpaperLeft,
  AmbioWallpaperRight,
];

const RootRouter = () => {
  const styles = useStyles();
  const [asstesLoaded, setAssetsLoaded] = useState(false);
  const navigate = useNavigate();

  function preloadImage(src: string) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.onerror = img.onabort = function () {
        reject(src);
      };
      img.src = src;
    });
  }

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      if (isCancelled) {
        return;
      }

      const imagesPromiseList: Promise<any>[] = [];
      for (const i of preloadSrcList) {
        imagesPromiseList.push(preloadImage(i));
      }

      await Promise.all(imagesPromiseList);

      if (isCancelled) {
        return;
      }

      setAssetsLoaded(true);
    }

    effect();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role_type = localStorage.getItem("type");
    if (token) {
      if (role_type === "ADMIN") {
        navigate("/account-admin");
      } else if (role_type === "FUND_ASSET_MANAGER") {
        navigate("/account");
      } else if (role_type === "FUND_ASSET_MANAGER_ADMIN") {
        navigate("/account-fund-admin");
      } else if (role_type === "ENGINEER") {
        navigate("/account-consultant");
      } else {
        navigate("/");
      }
    }
  }, [navigate]);

  // const onSkipToAccountHandler = () => {
  //   navigate("/account");
  // };
  // const onSkipToConsultantAccountHandler = () => {
  //   navigate("/account-consultant");
  // };
  // const onSkipToAdminAccountHandler = () => {
  //   navigate("/account-admin");
  // };

  return (
    <>
      {asstesLoaded ? (
        <div className={styles.pageContainer}>
          <img
            className={styles.leftWallpaper}
            src={AmbioWallpaperLeft}
            alt="left-logo"
          />
          <img
            className={styles.rightWallpaper}
            src={AmbioWallpaperRight}
            alt="right-logo"
          />
          <img
            className={styles.ambioLogoText}
            src={LegashIconTextDark}
            alt="legash"
          />
          <div className={styles.outletContainer}>
            <Outlet />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RootRouter;
