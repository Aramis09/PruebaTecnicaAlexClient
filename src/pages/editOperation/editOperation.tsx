import React, { useRef } from "react";
import { Form, Input, ModalDiv, H2, Button } from "../../style/styles";
import { useMutationCustom } from "../../hooks/useMutationCustom";
import { BodyEditOperation } from "../../interfaces/interfaces";
import { useParams } from "react-router-dom";
import { getCookie } from "../../utils/cookies";
import { useContextAuth } from "../../hooks/useContextAuth";
import GuestModal from "../../components/guestModal/guestModal";

export default function EditOperation() {
  const { idOperation } = useParams();
  const idSavedLocalStorage = useRef(localStorage.getItem("idUser"));
  const contextAuth = useContextAuth();
  const editMutate = useMutationCustom<BodyEditOperation, undefined>({
    url: `${import.meta.env.VITE_SOME_BASE_URL}/crypto-coin-operations`,
    method: "PATCH",
    keys: ["operations"],
  });
  const hanlderSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fields = Object.fromEntries(new window.FormData(form));
    const name = fields["name"] === "" ? null : (fields["name"] as string);
    const ticker =
      fields["ticker"] === "" ? null : (fields["ticker"] as string);
    const price =
      fields["price"] === "" ? null : (Number(fields["price"]) as number);
    const purchase_amount =
      fields["purchase_amount"] === ""
        ? null
        : (Number(fields["purchase_amount"]) as number);

    editMutate.mutate({
      idCurrency: Number(idOperation),
      name,
      ticker,
      price,
      purchase_amount,
    });
    alert("modificado");
  };

  if (!idOperation) return <>Hubo un error...</>;

  if (
    //! aqui verificamos si exiiste el id guardado (porque lo necesito) y si esta el token
    (!contextAuth.userId && !idSavedLocalStorage.current) ||
    !getCookie({ nameCookie: "jwt-auth" })
  )
    return <GuestModal />; //!Si no hay usuario, entonces lo mando hacer el login

  return (
    <ModalDiv>
      <H2>Editar operacion</H2>
      <Form onSubmit={hanlderSubmit}>
        <Input type="text" name="name" placeholder="Nombre (no obligatorio)" />
        <Input
          type="text"
          name="ticker"
          placeholder="Ticker (no obligatorio)"
        />
        <Input
          type="number"
          name="price"
          placeholder="Precio (no obligatorio)"
        />
        <Input
          type="number"
          name="purchase_amount"
          placeholder="Cantidad Comprada (no obligatorio)"
        />
        <Button>Editar</Button>
      </Form>
    </ModalDiv>
  );
}
