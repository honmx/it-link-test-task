import { ICar } from "@/types/ICar";
import { FC } from "react";
import { Card, OverlayTrigger, Stack } from "react-bootstrap";
import LinkIconButton from "@/components/atoms/LinkIconButton/LinkIconButton";
import { SlPencil } from "react-icons/sl";
import { AiOutlineDelete } from "react-icons/ai";
import s from "./CarCard.module.scss";

interface Props {
  car: ICar
}

const CarCard: FC<Props> = ({ car }) => {
  return (
    <Card className={s.card}>
      <Card.Header className={s.cardHeader}>
        <Stack direction="horizontal" gap={1}>
          <LinkIconButton href="/update" icon={<SlPencil />} />
          <LinkIconButton href="/delete" icon={<AiOutlineDelete />} />
        </Stack>
      </Card.Header>
      <Card.Body className={s.cardBody}>
        <pre className={s.preJsonItem}>
          <code className={s.codeJsonItem}>
            {JSON.stringify(car, null, 4)}
          </code>
        </pre>
      </Card.Body>
    </Card>
  )
};

export default CarCard;