import ControlledTextField from "@/components/atoms/ControlledTextField/ControlledTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { Control, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { InferType } from "yup";
import s from "./SearchFilters.module.scss";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { FilterActionType } from "@/types/FilterActionTypes";
import { setFilters } from "@/store/actions/setFilters";

const applicationSchema = yup
  .object({
    brand: yup.string(),
    model: yup.string(),
    productionYear: yup.number().transform((value) => (isNaN(value) ? undefined : value)).optional(),
    body: yup.string(),
    minMileage: yup.number().transform((value) => (isNaN(value) ? undefined : value)).optional(),
    maxMileage: yup.number().transform((value) => (isNaN(value) ? undefined : value)).optional(),
    minPrice: yup.number().transform((value) => (isNaN(value) ? undefined : value)).optional(),
    maxPrice: yup.number().transform((value) => (isNaN(value) ? undefined : value)).optional(),
  })
  .required();

export interface IFormInput extends InferType<typeof applicationSchema> { }


interface Props {

}

const SearchFilters: FC<Props> = ({ }) => {

  const disptach: Dispatch<FilterActionType> = useDispatch();

  const {
    setError,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
    register,
    unregister,
    getValues
  } = useForm<IFormInput>({
    defaultValues: {
      brand: "",
      model: "",
      productionYear: undefined,
      body: "",
      minMileage: undefined,
      maxMileage: undefined,
      minPrice: undefined,
      maxPrice: undefined,
    },
    resolver: yupResolver(applicationSchema)
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    disptach(setFilters(data));
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Row>
          <Col>
            <ControlledTextField
              control={control}
              name="brand"
              label="Бренд"
              placeholder="Бренд"
              defaultValue=""
              isInvalid={!!errors.brand?.type}
            />
            <ControlledTextField
              control={control}
              name="model"
              label="Модель"
              placeholder="Модель"
              defaultValue=""
              isInvalid={!!errors.model?.type}
            />
            <ControlledTextField
              control={control}
              name="productionYear"
              label="Год выпуска"
              placeholder="Год выпуска"
              defaultValue=""
              isInvalid={!!errors.productionYear?.type}
            />
            <ControlledTextField
              control={control}
              name="body"
              label="Кузов"
              placeholder="Кузов"
              defaultValue=""
              isInvalid={!!errors.body?.type}
            />
          </Col>
          <Col>
            <ControlledTextField
              control={control}
              name="minMileage"
              label="Пробег от"
              placeholder="Пробег от"
              defaultValue=""
              isInvalid={!!errors.minMileage?.type}
            />
            <ControlledTextField
              control={control}
              name="maxMileage"
              label="Пробег до"
              placeholder="Пробег до"
              defaultValue=""
              isInvalid={!!errors.maxMileage?.type}
            />
            <ControlledTextField
              control={control}
              name="minPrice"
              label="Цена от"
              placeholder="Цена от"
              defaultValue=""
              isInvalid={!!errors.minPrice?.type}
            />
            <ControlledTextField
              control={control}
              name="maxPrice"
              label="Цена до"
              placeholder="Цена до"
              defaultValue=""
              isInvalid={!!errors.maxPrice?.type}
            />
          </Col>
        </Row>
      </Container>
      <Button type="submit" className={s.submitBtn}>Искать</Button>
    </Form>
  )
};

export default SearchFilters;