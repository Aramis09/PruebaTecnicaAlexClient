import React, { useEffect } from "react";
import s from "./login.module.css";

import { ResLogin, UserCredentials } from "../../interfaces/interfaces";
import { useMutationCustom } from "../../hooks/useMutationCustom";
import { useContextAuth } from "../../hooks/useContextAuth";
import { Button, Form, Input, H2 } from "../../style/styles";
// import { Link } from "react-router-dom";

export default function Login() {
  const { setToken, setUserId } = useContextAuth();
  const loginMutate = useMutationCustom<UserCredentials, ResLogin>({
    url: `${import.meta.env.VITE_SOME_BASE_URL}/user/login`,
    method: "POST",
    keys: ["null"],
  });
  const hanlderSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fields = Object.fromEntries(new window.FormData(form));
    const user = fields["user"] as string;
    const password = fields["password"] as string;
    await loginMutate.mutate({
      user,
      password,
    });
  };

  useEffect(() => {
    if (loginMutate.data?.status === 200 && setUserId && setToken) {
      setUserId(loginMutate.data.data.id);
      setToken(loginMutate.data.data.token);
      localStorage.setItem("idUser", loginMutate.data.data.id);
      window.location.href = "/";
    }
  }, [loginMutate]);

  console.log(loginMutate);
  // localStorage.setItem("userId", loginMutate.data.data.id);

  return (
    <div className={s.container}>
      <H2>Iniciair sesion</H2>
      <Form onSubmit={hanlderSubmit}>
        <Input type="text" name="user" id="user" placeholder="user" required />
        <Input
          type="text"
          name="password"
          id="password"
          placeholder="password"
          required
        />
        <Button type="submit">mandar usuario</Button>
      </Form>
      {!loginMutate.isError ? <>{loginMutate.data?.msg}</> : <></>}
      {loginMutate.isPending ? <>Cargando</> : <></>}
    </div>
  );
}
