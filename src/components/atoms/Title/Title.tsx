import { CSSProperties, FC, PropsWithChildren } from "react";
import s from "./Title.module.scss";

interface Props extends PropsWithChildren {
  style?: CSSProperties;
}

const Title: FC<Props> = ({ children, style }) => {
  return (
    <h3 className={s.title} style={style}>{children}</h3>
  )
};

export default Title;