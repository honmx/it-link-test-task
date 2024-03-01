import CarCard from "@/components/molecules/CarCard/CarCard";
import { useRequest } from "@/hooks/useRequest";
import carsService from "@/services/carsService";
import { CarActionType } from "@/types/CarActionTypes";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import s from "./CarCardWithRequest.module.scss";

interface Props {

}

const CarCardWithRequest: FC<Props> = ({ }) => {

  const { query, isReady, push } = useRouter();
  
  const { data: car, isLoading, error } = useRequest(() => carsService.getCarById(query.id?.toString() as string), null, [isReady], !isReady || !query.id);

  const handleDeleteClick = async () => {
    if (!query.id) return;

    await carsService.deleteCar(query.id?.toString());
    push("/");
  }

  return (
    <>
      {
        car && <>
          <CarCard car={car} isEdit={false} isDelete={false} />
          <Button variant="danger" disabled={!isReady} onClick={handleDeleteClick}>Удалить</Button>
        </>
      }
      {
        isLoading && <Spinner style={{ margin: "0 auto" }} />
      }
      {
        error && <p style={{ textAlign: "center" }}>Элемент не найден</p>
      }
    </>
  )
};

export default CarCardWithRequest;