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
    case "645e44069e60637d858a265f": {
      return "Admin";
    }
    case "645e47174c3d647470f67dfe": {
      return "Hospital Admin";
    }
    case "645e46d74c3d647470f67dfa": {
      return "Patient";
    }
    default:
      return "User";
  }
};

// export const reverseTransformRole = (roleName: string) => {
//   console.log(roleName, "roleName roleName roleName roleName");
//   switch (roleName) {
//     case Roles.Admin: {
//       return "Admin";
//     }
//     case Roles.HospitalAdmin: {
//       return "Hospital Admin";
//     }
//     case Roles.ReportAdmin: {
//       return "Report Admin";
//     }
//     case Roles.User: {
//       return "User";
//     }
//     default:
//       return "User";
//   }
// };
