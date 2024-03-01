"use client";

import CarForm from "@/components/organisms/CarForm/CarForm";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import Layout from "@/components/templates/Layout/Layout";
import SingleCarItemWrapper from "@/components/templates/SingleCarItemWrapper/SingleCarItemWrapper";
import { useRequest } from "@/hooks/useRequest";
import carsService from "@/services/carsService";
import { CarWithoutId } from "@/types/CarWithoutId";
import { ICar } from "@/types/ICar";
import { INextPageWithLayout } from "@/types/INextPageWithLayout";
import { useRouter } from "next/router";
import { Button, Spinner, Stack } from "react-bootstrap";

interface Props {

}

const UpdatePage: INextPageWithLayout<Props> = ({ }) => {

  const { query, isReady, push } = useRouter();

  const { data: car, isLoading, error } = useRequest(() => carsService.getCarById(query.id?.toString() as string), undefined, [isReady], !isReady || !query.id);

  const handleUpdateClick = async (newCar: CarWithoutId) => {
    if (!car) return;

    await carsService.updateCar(car.id, { id: car.id, ...newCar });
    push("/");
  }

  return (
    <SingleCarItemWrapper>
      <Button as="a" href="/" style={{ marginRight: "auto" }}>Назад</Button>
      {
        car && <CarForm car={car} requestFn={(car: CarWithoutId) => handleUpdateClick(car)} />
      }
      {
        isLoading && <Spinner style={{ margin: "0 auto" }} />
      }
      {
        error && <p style={{ textAlign: "center" }}>Элемент не найден</p>
      }
    </SingleCarItemWrapper>
  )
};

UpdatePage.getLayout = (page) => {
  return (
    <Layout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
    >
      {page}
    </Layout>
  )
}

export default UpdatePage;