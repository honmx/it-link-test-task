"use client";

import Title from "@/components/atoms/Title/Title";
import CarCard from "@/components/molecules/CarCard/CarCard";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import DeletePageButtons from "@/components/organisms/DeletePageButtons/DeletePageButtons";
import Layout from "@/components/templates/Layout/Layout";
import { useTypedSelector } from "@/store/hooks";
import { INextPageWithLayout } from "@/types/INextPageWithLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Spinner, Stack } from "react-bootstrap";
import { useRequest } from "@/hooks/useRequest";
import carsService from "@/services/carsService";
import CarCardWithRequest from "@/components/organisms/CarCardWithRequest/CarCardWithRequest";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { CarActionType } from "@/types/CarActionTypes";

interface Props {

}

const DeletePage: INextPageWithLayout<Props> = ({ }) => {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack gap={2} style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Title style={{ textAlign: "center" }}>Delete page</Title>
        <DeletePageButtons />
        <CarCardWithRequest />
      </Stack>
    </>
  )
};

DeletePage.getLayout = (page) => {
  return (
    <Layout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
    >
      {page}
    </Layout>
  )
}

export default DeletePage;