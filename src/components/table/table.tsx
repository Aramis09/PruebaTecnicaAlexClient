import React from "react";
import { GetOperationListData } from "../../interfaces/interfaces";
import OperationItemTable from "../operationItemTable/operationItemTable";
import { TableStyled } from "../../style/styles";
interface Props {
  items: GetOperationListData[];
}
export interface Titles {
  id: string;
  name: string;
  price: string;
  purchase_amount: string;
  ticker: string;
}

export default function Table({ items }: Props) {
  const titles: Titles = {
    id: "Id",
    name: "Nombre",
    price: "Precio",
    purchase_amount: "Cantidad Comprada",
    ticker: "Ticker",
  };
  return (
    <TableStyled>
      <OperationItemTable item={titles} title />
      {items.map((item) => (
        <OperationItemTable item={item} key={crypto.randomUUID()} />
      ))}
    </TableStyled>
  );
}
