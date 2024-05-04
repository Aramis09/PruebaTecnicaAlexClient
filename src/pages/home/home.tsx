import { useRef } from "react";
import ModalCreate from "../../components/createModal/createModal";
import GuestModal from "../../components/guestModal/guestModal";
import Table from "../../components/table/table";
import { useContextAuth } from "../../hooks/useContextAuth";
import useQueryCustom from "../../hooks/useQueryCustom";
import { GetOperationList, ResponseError } from "../../interfaces/interfaces";
import { H2 } from "../../style/styles";
import s from "./home.module.css";
import { getCookie } from "../../utils/cookies";

export default function Home() {
  const contextAuth = useContextAuth();
  const idSavedLocalStorage = useRef(localStorage.getItem("idUser"));
  const query = useQueryCustom<GetOperationList | ResponseError>({
    url: `${import.meta.env.VITE_SOME_BASE_URL}/crypto-coin-operations?idUser=${
      contextAuth.userId || idSavedLocalStorage.current
    }`,
    keys: ["operations"],
  });

  if (
    //! aqui verificamos si exiiste el id guardado (porque lo necesito) y si esta el token
    (!contextAuth.userId && !idSavedLocalStorage.current) ||
    !getCookie({ nameCookie: "jwt-auth" })
  )
    return <GuestModal />; //!Si no hay usuario, entonces lo mando hacer el login

  if (query.data?.error) return <>Error ...</>;
  if (
    query.data?.error !== true &&
    query.data?.data &&
    query.data.data[0].length === 0
  )
    return <ModalCreate />;

  if (query?.data && query?.data.data && query.data.data[0])
    return (
      <div className={s.container}>
        <H2>Operaciones realizadas</H2>
        <Table items={query.data.data[0]} />
      </div>
    );
}
