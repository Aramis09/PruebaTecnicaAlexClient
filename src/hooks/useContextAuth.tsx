import { useContext } from "react";
import { contextAuth } from "../context/authContext/contextDefine";

export function useContextAuth() {
  return useContext(contextAuth);
}
