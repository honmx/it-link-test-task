import ControlledTextField from "@/components/atoms/ControlledTextField/ControlledTextField";
// import ControlledPhotosTextFieldGroup from "@/components/molecules/ControlledPhotosTextFieldGroup/ControlledPhotosTextFieldGroup";
import SingleCarItemWrapper from "@/components/templates/SingleCarItemWrapper/SingleCarItemWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import { Young_Serif } from "next/font/google";
import { FC, useEffect, useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import { InferType } from "yup";
import s from "./CarForm.module.scss";
import { ICar } from "@/types/ICar";
import { CarWithoutId } from "@/types/CarWithoutId";
import { areTechnicalCharacteristicsFilled } from "@/helpers/areTechnicalCharacteristicsFilled";

const applicationSchema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().nullable().required(),
    images: yup.array().of(yup.string().min(1)).length(3).required(),
    contacts: yup.string().required(),
    technical_characteristics: yup.object({
      brand: yup.string(),
      model: yup.string(),
      productionYear: yup.number(),
      body: yup.string(),
      mileage: yup.number(),
    }),
    options: yup.array(yup.object({ option_name: yup.string().required() }))
  })
  .required();

export interface IFormInput extends InferType<typeof applicationSchema> { }

interface Props {
  car?: ICar;
  requestFn: (car: CarWithoutId) => Promise<void>;
}

const CarForm: FC<Props> = ({ car, requestFn }) => {

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
    mode: "onBlur",
    reValidateMode: "onBlur",
    shouldUnregister: true,
    defaultValues: {
      name: car?.name || "",
      description: car?.description || "",
      price: car?.price || undefined,
      images: car?.images || ["", "", ""],
      contacts: car?.contacts || "",
      technical_characteristics: car?.technical_characteristics || undefined,
      options: car?.options || undefined,
    },
    resolver: yupResolver(applicationSchema)
  });

  const [checked, setChecked] = useState<boolean>(!!car?.technical_characteristics || false);

  useEffect(() => {
    if (checked) return;

    reset({ ...getValues(), technical_characteristics: car?.technical_characteristics || undefined });
  }, [checked]);

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "options",
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (checked && data.technical_characteristics.brand?.length === 0) setError("technical_characteristics.brand", { type: "required" });
    if (checked && data.technical_characteristics.model?.length === 0) setError("technical_characteristics.model", { type: "required" });
    if (checked && !data.technical_characteristics.productionYear) setError("technical_characteristics.productionYear", { type: "required" });
    if (checked && data.technical_characteristics.body?.length === 0) setError("technical_characteristics.body", { type: "required" });
    if (checked && !data.technical_characteristics.mileage) setError("technical_characteristics.mileage", { type: "required" });

    if (areTechnicalCharacteristicsFilled(checked, data.technical_characteristics)) {
      await requestFn(data as CarWithoutId);
    }
  }

  return (
    <SingleCarItemWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <ControlledTextField
            control={control}
            name="name"
            label="Название"
            placeholder="Название"
            defaultValue=""
            isInvalid={!!errors.name}
          />
          <ControlledTextField
            control={control}
            name="description"
            label="Описание"
            placeholder="Описание"
            defaultValue=""
            isInvalid={!!errors.description}
          />
          <ControlledTextField
            control={control}
            name="price"
            label="Цена"
            placeholder="Цена"
            defaultValue=""
            isInvalid={!!errors.price}
          />
          <ControlledTextField
            control={control}
            name="images.[0]"
            label="Фото"
            placeholder="Фото"
            defaultValue=""
            isInvalid={!!errors.images?.[0]?.type}
          />
          <ControlledTextField
            control={control}
            name="images.[1]"
            placeholder="Фото"
            defaultValue=""
            isInvalid={!!errors.images?.[1]?.type}
          />
          <ControlledTextField
            control={control}
            name="images.[2]"
            placeholder="Фото"
            defaultValue=""
            isInvalid={!!errors.images?.[2]?.type}
          />
          <ControlledTextField
            control={control}
            name="contacts"
            label="Контакты"
            placeholder="Контакты"
            defaultValue=""
            isInvalid={!!errors.contacts?.type}
          />
          <Form.Check label="Добавить тех. хар-ки" checked={checked} onChange={() => setChecked(prev => !prev)} />
          {
            checked && <>
              <ControlledTextField
                control={control}
                name="technical_characteristics.brand"
                label="Марка"
                placeholder="Марка"
                defaultValue=""
                isInvalid={!!errors.technical_characteristics?.brand?.type}
              />
              <ControlledTextField
                control={control}
                name="technical_characteristics.model"
                label="Модель"
                placeholder="Модель"
                defaultValue=""
                isInvalid={!!errors.technical_characteristics?.model?.type}
              />
              <ControlledTextField
                control={control}
                name="technical_characteristics.productionYear"
                label="Год выпуска"
                placeholder="Год выпуска"
                defaultValue=""
                isInvalid={!!errors.technical_characteristics?.productionYear?.type}
              />
              <ControlledTextField
                control={control}
                name="technical_characteristics.body"
                label="Кузов"
                placeholder="Кузов"
                defaultValue=""
                isInvalid={!!errors.technical_characteristics?.body?.type}
              />
              <ControlledTextField
                control={control}
                name="technical_characteristics.mileage"
                label="Пробег"
                placeholder="Пробег"
                defaultValue=""
                isInvalid={!!errors.technical_characteristics?.mileage?.type}
              />
            </>
          }
          <Button onClick={() => append({ option_name: "" })} className={s.addOptionBtn}>Добавить опцию</Button>
          {
            fields.map((field, index) => (
              <Stack key={field.id} gap={1} direction="horizontal" className={s.option}>
                <ControlledTextField
                  control={control}
                  name={`options.${index}.option_name`}
                  label="Опция"
                  placeholder="Опция"
                  defaultValue={field.option_name || ""}
                  isInvalid={!!errors.options}
                />
                <Button onClick={() => remove(index)}>Удалить</Button>
              </Stack>
            ))
          }
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            Подтвердить
          </Button>
        </Stack>
      </Form>
    </SingleCarItemWrapper>
  )
};

export default CarForm;