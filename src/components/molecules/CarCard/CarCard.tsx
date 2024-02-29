import { ICar } from "@/types/ICar";
import { CSSProperties, FC } from "react";
import { Card, OverlayTrigger, Stack } from "react-bootstrap";
import LinkIconButton from "@/components/atoms/LinkIconButton/LinkIconButton";
import { SlPencil } from "react-icons/sl";
import { AiOutlineDelete } from "react-icons/ai";
import s from "./CarCard.module.scss";

interface Props {
  car: ICar;
  isEdit?: boolean;
  isDelete?: boolean;
}

const CarCard: FC<Props> = ({ car, isEdit = true, isDelete = true }) => {
  return (
    <Card>
      {
        (isEdit || isDelete) &&
        <Card.Header className={s.cardHeader}>
          <Stack direction="horizontal" gap={1}>
            {isEdit && <LinkIconButton href={`/update?id=${car.id}`} icon={<SlPencil />} />}
            {isDelete && <LinkIconButton href={`/delete?id=${car.id}`} icon={<AiOutlineDelete />} />}
          </Stack>
        </Card.Header>
      }
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