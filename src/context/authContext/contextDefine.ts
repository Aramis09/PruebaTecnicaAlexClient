import { createContext } from "react";
export interface StateAuth {
  userId?: string | undefined;
  setUserId?: React.Dispatch<React.SetStateAction<string | undefined>>;
  setToken?: React.Dispatch<React.SetStateAction<string | undefined>>;
  token?: string | undefined;
}
export const contextAuth = createContext<StateAuth>({});
