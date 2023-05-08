import React from "react";
import { NewOnSiteChecklistFormValues } from "../types";

interface INewOnsiteChecklistContext {
  currentForm: NewOnSiteChecklistFormValues | any;
  setCurrentForm: React.Dispatch<
    React.SetStateAction<NewOnSiteChecklistFormValues | any>
  >;
  setCurrentFormSavedAt: React.Dispatch<React.SetStateAction<Date | undefined>>;
  currentFormSavedAt: Date | undefined;
  lastPage: number;
  setLastPage: React.Dispatch<React.SetStateAction<number>>;

  setAssetValue: React.Dispatch<React.SetStateAction<number | null>>;
  assetValue: number;
  windowSize: {
    innerWidth: number;
    innerHeight: number;
  };
  reportPageTitle: string;
  setReportPageTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const NewOnsiteChecklistContext =
  React.createContext<INewOnsiteChecklistContext>(undefined as any);
