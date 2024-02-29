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

const applicationSchema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().nullable().required(),
    photos: yup.array().of(yup.string().min(1)).length(3).required(),
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

}

const CarForm: FC<Props> = ({ }) => {

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
      // add props from passed car
      name: "",
      description: "",
      photos: ["", "", ""],
    },
    resolver: yupResolver(applicationSchema)
  });

  // add props from passed car
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (!checked) {
      reset({ ...getValues(), technical_characteristics: undefined });
    } else {
      // register("technical_characteristics", { required: true });
      // unregister(["technical_characteristics"]);
    }
  }, [checked]);

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "options",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (checked && !data.technical_characteristics.brand) setError("technical_characteristics.brand", { type: "required" });
    if (checked && !data.technical_characteristics.model) setError("technical_characteristics.model", { type: "required" });
    if (checked && !data.technical_characteristics.productionYear) setError("technical_characteristics.productionYear", { type: "required" });
    if (checked && !data.technical_characteristics.body) setError("technical_characteristics.body", { type: "required" });
    if (checked && !data.technical_characteristics.mileage) setError("technical_characteristics.mileage", { type: "required" });

    else {
      console.log(data);
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
            name="photos.[0]"
            label="Фото"
            placeholder="Фото"
            defaultValue=""
            isInvalid={!!errors.photos?.[0]?.type}
          />
          <ControlledTextField
            control={control}
            name="photos.[1]"
            placeholder="Фото"
            defaultValue=""
            isInvalid={!!errors.photos?.[1]?.type}
          />
          <ControlledTextField
            control={control}
            name="photos.[2]"
            placeholder="Фото"
            defaultValue=""
            isInvalid={!!errors.photos?.[2]?.type}
          />
          <ControlledTextField
            control={control}
            name="contacts"
            label="Контакты"
            placeholder="Контакты"
            defaultValue=""
            isInvalid={!!errors.contacts?.type}
          />
          <Form.Check label="Добавить тех. хар-ки" onChange={() => setChecked(prev => !prev)} />
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