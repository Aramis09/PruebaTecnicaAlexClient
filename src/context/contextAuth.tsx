import { useState } from "react";
import { contextAuth } from "./authContext/contextDefine";

interface Props {
  children: JSX.Element;
}

export const ContextAuthProvider = ({ children }: Props) => {
  const [userId, setUserId] = useState<string | undefined>(
    localStorage.getItem("idUser") || undefined
  );
  const [token, setToken] = useState<string>();

  const state = {
    userId,
    setUserId,
    setToken,
    token,
  };

  return (
    <contextAuth.Provider value={{ ...state }}>{children}</contextAuth.Provider>
  );
};
