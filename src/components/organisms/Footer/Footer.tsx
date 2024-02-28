import { FC } from "react";
import s from "./Footer.module.scss";

interface Props {

}

const Footer: FC<Props> = ({ }) => {
  return (
    <footer className={s.footer}>
      Footer
    </footer>
  )
};

export default Footer;