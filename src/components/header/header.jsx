import { Search } from "../search/search";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiAstronautHelmet } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { Typography } from "@mui/material";

const Header = () => {
  const { handleLogout } = useAuth();
  const [searchBlockOpened, setSearchBlockOpened] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <ul>
            <li>
              <Link to="/vacancy">Вакансии</Link>
            </li>
            {/* <li>
              <Link to="/dealers">Контакты</Link>
            </li> */}
            <li>
              <Link to="/profile">Профиль</Link>
            </li>
            <li>
              <Link to="/companies">Компании</Link>
            </li>
            <li>
              <Link to="/resume">резюме</Link>
            </li>
          </ul>
        </div>

        <Link className="header__logo" to="/">
          <img src={require("../../img/hhlogo.png")} alt="" />
        </Link>

        {searchBlockOpened && (
          <Search setSearchBlockOpened={setSearchBlockOpened} />
        )}
        <ul className="header__cart">
          <li>
            <AiOutlineSearch
              width={16}
              hanging={16}
              onClick={() => setSearchBlockOpened(true)}
            />
          </li>
          <li style={{ fontSize: "16px", fontWeight: 400 }}>
            <Link to="/register">Регистрация </Link>
          </li>
          <li>
            <Link to="/login" className="header__cart__price">
              Вход
            </Link>
          </li>
          <li>
            <Typography onClick={handleLogout}>Выйти</Typography>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
