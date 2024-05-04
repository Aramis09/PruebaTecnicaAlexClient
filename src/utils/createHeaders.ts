import { getCookie } from "./cookies";

export const buildHeaders = () => {
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "auth-token",
    `${getCookie({ nameCookie: "jwt-auth" }).cookiesFound || null}`
  );
  myHeaders.append(
    "auth-secret-key",
    `${import.meta.env.VITE_SOME_KEY_SECRET}`
  );
  return myHeaders
}