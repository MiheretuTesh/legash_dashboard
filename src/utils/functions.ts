import { Roles } from "../constants";

export const transformRoleName = (roleName: string) => {
  switch (roleName) {
    case "Admin": {
      return Roles.Admin;
    }
    case "Hospital Admin": {
      return Roles.HospitalAdmin;
    }
    case "Report Admin": {
      return Roles.ReportAdmin;
    }
    case "User": {
      return Roles.User;
    }
    default:
      return "643fcc7d9cbbe5517bf42776";
  }
};

export const reverseTransformRole = (roleName: string) => {
  switch (roleName) {
    case Roles.Admin: {
      return "Admin";
    }
    case Roles.HospitalAdmin: {
      return "Hospital Admin";
    }
    case Roles.ReportAdmin: {
      return "Report Admin";
    }
    case Roles.User: {
      return "User";
    }
    default:
      return "User";
  }
};
