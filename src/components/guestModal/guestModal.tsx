import s from "./guestModal.module.css";
import { LinkStyled, ModalDiv, PNotes } from "../../style/styles";

export default function GuestModal() {
  return (
    <ModalDiv className={s.container}>
      <PNotes> Por favor inicie sesion</PNotes>
      <LinkStyled to="/login"> Iniciar Sesion</LinkStyled>
      <LinkStyled to="/sign-up"> Registrarse</LinkStyled>
    </ModalDiv>
  );
}
