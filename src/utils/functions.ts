import {Roles} from "../constants";

export const transformRoleName = (roleName: string) => {
  switch (roleName) {
    case "Fund Asset Manager": {
      return Roles.FundAssetManager;
    }
    case "Fund Asset Manager Admin": {
      return Roles.FundAssetManagerAdmin;
    }
    case "Engineer": {
      return Roles.Engineer;
    }
    case "Admin": {
      return Roles.Admin
    }
    default:
      return Roles.FundAssetManager;
  }
};

export const reverseTransformRole = (roleName: string) => {
  switch (roleName) {
    case Roles.FundAssetManager: {
      return "Fund Asset Manager";
    }
    case Roles.FundAssetManagerAdmin: {
      return "Fund Asset Manager Admin";
    }
    case Roles.Engineer: {
      return "Engineer";
    }
    case Roles.Admin: {
      return "Admin"
    }
    default:
      return "Fund Asset Manager";
  }
};
