import { Link } from "react-router-dom";
import styled from "styled-components";

export const Input = styled.input`
  background-color: #2f2d36;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  width: 100%;
`


export const H2 = styled.h2`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  font-size: 2rem;
  color: #8665f7;
  background-image: linear-gradient(to right, #8665f7, #fff);
  -webkit-background-clip: text; /* Para navegadores webkit como Chrome y Safari */
  background-clip: text; /* Para navegadores modernos */
  color: transparent; /* Oculta el color original del texto */
`

export const Button = styled.button`
  background: linear-gradient(to right, #433476,#8665f7, #8665f7,#433476);
  padding: 1rem;
  border-radius: 10rem;
  border: none;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
  width: 100%;
  &:hover {
    transform: scale(1.01);
  }
`


export const Form = styled.form`
    padding: 2rem;
    background-color: #1D1D21;
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
`

export const LinkStyled = styled(Link)`
  background: linear-gradient(to right, #433476,#8665f7, #8665f7,#433476);
  padding: 1rem;
  border-radius: 10rem;
  border: none;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
  text-decoration: none;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  &:hover {
    transform: scale(1.01);
}
`

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-inline: 35%;
  padding-top: 10%;
`


export const PNotes = styled.p`
  color: white;
`
export const ItemTable = styled.div`
  background-color: #2f2d36;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  padding-inline: 1rem;
`

export const TableStyled = styled.div`
    width: 100%;
    padding: 5%;
    border: solid 3px #8665f7;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`



export const PTitleTable = styled.p`
  color: white;
  font-size: 1.7rem;
  color: #9F84FC;
`


