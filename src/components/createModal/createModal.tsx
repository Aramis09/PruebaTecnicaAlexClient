import { LinkStyled, ModalDiv, PNotes } from "../../style/styles";

export default function ModalCreate() {
  return (
    <ModalDiv>
      <PNotes> No hay ninguna operacion</PNotes>
      <LinkStyled to="/create-operation"> Crear nueva operacioin</LinkStyled>
    </ModalDiv>
  );
}
