import { FC } from "react";
import s from "./Header.module.scss";

interface Props {

}

const Header: FC<Props> = ({ }) => {
  return (
    <header className={s.header}>
      Header
    </header>
  )
};

export default Header;