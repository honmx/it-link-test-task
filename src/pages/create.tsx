"use client";

import CarForm from "@/components/organisms/CarForm/CarForm";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import Layout from "@/components/templates/Layout/Layout";
import SingleCarItemWrapper from "@/components/templates/SingleCarItemWrapper/SingleCarItemWrapper";
import { useRequest } from "@/hooks/useRequest";
import carsService from "@/services/carsService";
import { INextPageWithLayout } from "@/types/INextPageWithLayout";
import { useRouter } from "next/router";
import { Button, Stack } from "react-bootstrap";

interface Props {

}

const CreatePage: INextPageWithLayout<Props> = ({ }) => {

  return (
    <SingleCarItemWrapper>
      <Button as="a" href="/" style={{ marginRight: "auto" }}>Назад</Button>
      <CarForm />
    </SingleCarItemWrapper>
  )
};

CreatePage.getLayout = (page) => {
  return (
    <Layout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
    >
      {page}
    </Layout>
  )
}

export default CreatePage;