import { Search } from "../search/search";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiAstronautHelmet } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchBlockOpened, setSearchBlockOpened] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <ul>
            <li>
              <Link to="/products">Вакансии</Link>
            </li>
            <li>
              <Link to="/dealers">Контакты</Link>
            </li>
            <li>
              <Link to="/profile">Профиль</Link>
            </li>
          </ul>
        </div>

        <Link className="header__logo" to="/">
          LOGO
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
        </ul>
      </div>
    </header>
  );
};
export default Header;
