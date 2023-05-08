import React from "react";
import { AssumtionFormValues } from "../types";

interface IAssumptionFormContext {
    assetCurrentForm: AssumtionFormValues | any;
    setAssetCurrentForm: React.Dispatch<
        React.SetStateAction<AssumtionFormValues | any>
        >;
    setAssetCurrentFormSavedAt: React.Dispatch<React.SetStateAction<Date | undefined>>;
    assetCurrentFormSavedAt: Date | undefined;
    assetLastPage: number;
    setAssetLastPage: React.Dispatch<React.SetStateAction<number>>;
    setAssetValue: React.Dispatch<React.SetStateAction<number | null>>;
    assetValue: number;
    windowSize: {
        innerWidth: number;
        innerHeight: number;
    };
}

export const AssumptionFormContext =
    React.createContext<IAssumptionFormContext>(undefined as any);
