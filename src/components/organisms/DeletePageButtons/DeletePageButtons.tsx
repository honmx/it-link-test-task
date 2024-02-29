import { FC } from "react";
import { Button, Stack } from "react-bootstrap";
import { useRouter } from "next/router";
import s from "./DeletePageButtons.module.scss";
import LinkButton from "@/components/atoms/LinkButton/LinkButton";

interface Props {

}

const DeletePageButtons: FC<Props> = ({ }) => {

  return (
    <Stack direction="horizontal" gap={1} className={s.buttonsContainer}>
      <LinkButton href="/">Назад</LinkButton>
    </Stack>
  )
};

export default DeletePageButtons;