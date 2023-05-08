import React from "react";

interface IUserContext {
  userToken: string | undefined;
  setUserToken: React.Dispatch<React.SetStateAction<undefined>>;
}

const UserContext = React.createContext<IUserContext>(undefined as any);
export default UserContext;
