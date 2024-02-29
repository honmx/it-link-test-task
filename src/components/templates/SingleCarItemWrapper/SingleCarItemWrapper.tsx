import { FC, PropsWithChildren } from "react";
import { Stack } from "react-bootstrap";
import s from "./SingleCarItemWrapper.module.scss";

interface Props extends PropsWithChildren {

}

const SingleCarItemWrapper: FC<Props> = ({ children }) => {
  return (
    <Stack gap={2} className={s.wrapper}>
      {children}
    </Stack>
  )
};

export default SingleCarItemWrapper;