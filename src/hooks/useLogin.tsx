import { useMutationCustom } from "./useMutationCustom";
import { ValidateToken } from "../../../api/src/interfaces/interfaces";
import { deleteCookie } from "../utils/cookies";
import { useEffect } from "react";

export default function useLogin() {
  const jwtValidate = useMutationCustom<undefined, ValidateToken>({
    url: `${import.meta.env.VITE_SOME_BASE_URL}/jwt/verificationToken`,
    method: "POST",
    keys: ["none"],
  });

  const logOutUser = async () => {
    deleteCookie({ nameCookie: "jwt-auth" });
    localStorage.removeItem("idUser");
    window.location.reload();
    console.log("entreee");
  };
  const checkerUserLogin = () => {
    jwtValidate.mutate(undefined);
    return jwtValidate.data;
  };
  useEffect(() => {
    checkerUserLogin();
  }, []);
  return {
    statusToken: jwtValidate.data,
    logOutUser,
    checkerUserLogin,
  };
}
