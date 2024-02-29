"use client";

import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import Layout from "@/components/templates/Layout/Layout";
import { INextPageWithLayout } from "@/types/INextPageWithLayout";

interface Props {

}

const CreatePage: INextPageWithLayout<Props> = ({ }) => {
  return (
    <div>
      
    </div>
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