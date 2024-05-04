import { Link, useLocation } from "react-router-dom";
import s from "./navbar.module.css";
import addIcon from "../../assets/images/plus.svg";
import homeIcon from "../../assets/images/home.svg";
import logOutIcon from "../../assets/images/logout.svg";

import useLogin from "../../hooks/useLogin";

export default function Navbar() {
  const { pathname } = useLocation();
  const { statusToken, logOutUser } = useLogin();

  return (
    <div className={s.container}>
      {pathname !== "/" ? (
        <Link to="/">
          <img src={homeIcon} alt="Home" />
        </Link>
      ) : (
        <></>
      )}
      <Link to="/create-operation">
        <img src={addIcon} alt="add operation" />
      </Link>
      {statusToken?.acces ? (
        <button onClick={() => logOutUser()}>
          <img src={logOutIcon} alt="log out" />
        </button>
      ) : (
        <Link to="login"></Link>
      )}
    </div>
  );
}
