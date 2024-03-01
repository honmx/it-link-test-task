import CarCardList from "@/components/organisms/CarCardList/CarCardList";
import CarForm from "@/components/organisms/CarForm/CarForm";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import SearchFilters from "@/components/organisms/SearchFilters/SearchFilters";
import Layout from "@/components/templates/Layout/Layout";
import SingleCarItemWrapper from "@/components/templates/SingleCarItemWrapper/SingleCarItemWrapper";
import { groupCarsBy } from "@/helpers/groupCarsBy";
import { useFilteredCars } from "@/hooks/useFilteredCars";
import { useRequest } from "@/hooks/useRequest";
import carsService from "@/services/carsService";
import { useTypedSelector } from "@/store/hooks";
import { CarWithoutId } from "@/types/CarWithoutId";
import { ICar } from "@/types/ICar";
import { INextPageWithLayout } from "@/types/INextPageWithLayout";
import { useRouter } from "next/router";
import { Button, Spinner, Stack } from "react-bootstrap";

interface Props {

}

const SearchPage: INextPageWithLayout<Props> = ({ }) => {

  const filteredCars = useFilteredCars();
  const groupedCars = groupCarsBy(filteredCars, 3);

  return (
    <>
      <Button as="a" href="/">Назад</Button>
      <SearchFilters />
      <CarCardList groupedCars={groupedCars} />
    </>
  )
};

SearchPage.getLayout = (page) => {
  return (
    <Layout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
    >
      {page}
    </Layout>
  )
}

export default SearchPage;