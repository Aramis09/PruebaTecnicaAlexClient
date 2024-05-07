import { useMutationCustom } from "../../hooks/useMutationCustom";
import {
  ResCreateUser,
  ResValidateUserReapeat,
  UserCredentials,
} from "../../interfaces/interfaces";
import { Button, Form, H2, Input, PNotes } from "../../style/styles";
import s from "./signUp.module.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const { mutateAsync, isError, isPending, data } = useMutationCustom<
    UserCredentials,
    ResCreateUser
  >({
    url: `${import.meta.env.VITE_SOME_BASE_URL}/user`,
    method: "POST",
    keys: [],
  });

  const checkUserExist = useMutationCustom<
    Pick<UserCredentials, "user">,
    ResValidateUserReapeat
  >({
    url: `${import.meta.env.VITE_SOME_BASE_URL}/user/validate-repeate-user`,
    method: "POST",
  });

  const saveUser = async (body: UserCredentials) => {
    mutateAsync({
      user: body.user,
      password: body.password,
    });
  };

  const hanlderSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fields = Object.fromEntries(new window.FormData(form));
    const user = fields["user"] as string;
    const password = fields["password"] as string;

    await saveUser({
      user,
      password,
    });
  };

  const hanlderValidateUserExist = async (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (evt.target.value === "" && !evt.target.value) return;
    await checkUserExist.mutate({
      user: evt.target.value,
    });
  };

  if (data?.status === 200) {
    navigate("/login");
  }

  return (
    <div className={s.container}>
      <H2>Crear usuario</H2>
      <Form onSubmit={hanlderSubmit}>
        <Input
          type="text"
          name="user"
          id="user"
          placeholder="user"
          required
          onChange={hanlderValidateUserExist}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
        />
        <Button type="submit">Crear usuario</Button>
      </Form>
      {isError ? <PNotes> Error... Intente de nuevo</PNotes> : <></>}
      {isPending ? <PNotes>Cargando...</PNotes> : <></>}
      {!checkUserExist.data?.data.validUser ? (
        <PNotes>Usuario no disponible</PNotes>
      ) : (
        <></>
      )}
    </div>
  );
}
