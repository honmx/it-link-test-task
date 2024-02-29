import { FC } from "react";
import { Button, Stack } from "react-bootstrap";
import s from "./HomePageButtons.module.scss";
import LinkButton from "@/components/atoms/LinkButton/LinkButton";

interface Props {

}

const HomePageButtons: FC<Props> = ({ }) => {
  return (
    <Stack direction="horizontal" gap={1} className={s.buttonsContainer}>
      <LinkButton href="/search">Искать</LinkButton>
      <LinkButton href="/create">Создать</LinkButton>
    </Stack>
  )
};

export default HomePageButtons;