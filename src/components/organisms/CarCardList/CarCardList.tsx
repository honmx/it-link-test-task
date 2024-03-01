import { FC } from "react";
import s from "./CarCardList.module.scss";
import { useTypedSelector } from "@/store/hooks";
import CarCard from "@/components/molecules/CarCard/CarCard";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { groupCarsBy } from "@/helpers/groupCarsBy";
import { ICar } from "@/types/ICar";

interface Props {
  groupedCars: ICar[][];
}

const CarCardList: FC<Props> = ({ groupedCars }) => {

  return (
    <Container>
      {
        groupedCars.map(cars => (
          <Row key={cars[0].id}>
            {
              cars.map(car => (
                <Col key={car.id} xs={12} lg={4} className={s.carCard}>
                  <CarCard car={car} />
                </Col>
              ))
            }
          </Row>
        ))
      }
    </Container >
  )
};

export default CarCardList;