import {
  BodyDeleteOperation,
  GetOperationListData,
} from "../../interfaces/interfaces";
import { ItemTable, PTitleTable } from "../../style/styles";
import { Titles } from "../table/table";
import editImg from "../../assets/images/edit.svg";
import deleteImg from "../../assets/images/delete.svg";
import s from "./operationItemTable.module.css";
import { Link } from "react-router-dom";
import { useMutationCustom } from "../../hooks/useMutationCustom";

interface Props {
  item: GetOperationListData | Titles;
  title?: boolean;
}
export default function OperationItemTable({ item, title }: Props) {
  const deleteFetch = useMutationCustom<BodyDeleteOperation, undefined>({
    url: `${import.meta.env.VITE_SOME_BASE_URL}/crypto-coin-operations`,
    method: "DELETE",
    keys: ["operations"],
  });

  const hanlderDeleteItem = async () => {
    deleteFetch.mutate({
      idCurrency: Number(item.id),
    });
  };

  return (
    <ItemTable className={s.container}>
      {!title ? (
        <>
          <p> {item.id}</p>
          <p> {item.name}</p>
          <p> {item.price}</p>
          <p> {item.purchase_amount}</p>
          <p>{item.ticker}</p>
          <Link to={`/edit/${item.id}`}>
            <img src={editImg} alt="edit" />
          </Link>
          <button onClick={hanlderDeleteItem}>
            <img src={deleteImg} alt="delete" />
          </button>
        </>
      ) : (
        <>
          <PTitleTable> {item.id}</PTitleTable>
          <PTitleTable> {item.name}</PTitleTable>
          <PTitleTable> {item.price}</PTitleTable>
          <PTitleTable> {item.purchase_amount}</PTitleTable>
          <PTitleTable>{item.ticker}</PTitleTable>{" "}
        </>
      )}
    </ItemTable>
  );
}
