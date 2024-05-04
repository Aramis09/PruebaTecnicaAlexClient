import React, { useRef } from "react";
import s from "./createOperation.module.css";

import { useMutationCustom } from "../../hooks/useMutationCustom";
import {
  BodyCreateOperation,
  ResCreateOperationData,
} from "../../interfaces/interfaces";
import { Button, Form, H2, Input } from "../../style/styles";
import { useContextAuth } from "../../hooks/useContextAuth";
import GuestModal from "../../components/guestModal/guestModal";
import { getCookie } from "../../utils/cookies";

export default function CreateOperation() {
  const { userId } = useContextAuth();
  const idSavedLocalStorage = useRef(localStorage.getItem("idUser"));

  console.log(userId);

  const operationMutate = useMutationCustom<
    BodyCreateOperation,
    ResCreateOperationData
  >({
    url: `${import.meta.env.VITE_SOME_BASE_URL}/crypto-coin-operations`,
    method: "POST",
  });

  const hanlderSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fields = Object.fromEntries(new window.FormData(form));
    const name = fields["name"] as string;
    const price = Number(fields["price"]) as number;
    const purchase_amount = Number(fields["purchase_amount"]) as number;
    const ticker = fields["ticker"] as string;

    await operationMutate.mutate({
      idUser: Number(userId),
      name,
      purchase_amount,
      price,
      ticker,
    });
  };

  if (
    (!userId && !idSavedLocalStorage.current) ||
    !getCookie({ nameCookie: "jwt-auth" })
  )
    return <GuestModal />;

  return (
    <div className={s.container}>
      <H2>Guardar nueva operacion</H2>
      <Form onSubmit={hanlderSubmit}>
        <Input
          type="text"
          name="name"
          required
          placeholder="Nombre de crypto moneda"
        />
        <Input type="text" name="ticker" placeholder="Ticker" />
        <Input
          type="number"
          name="price"
          required
          placeholder="Precio de compra"
        />
        <Input
          type="number"
          name="purchase_amount"
          required
          placeholder="Cantidad de compra"
        />
        <Button> Crear operacion</Button>
      </Form>
    </div>
  );
}
