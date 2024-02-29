import { IFormInput } from "@/components/organisms/CarForm/CarForm";
import { OverridedControllerProps } from "@/types/OverridedControllerProps";
import { FC } from "react";
import { Form } from "react-bootstrap";
import { Control, Controller, ControllerProps, FieldValues } from "react-hook-form";
import s from "./ControlledTextField.module.scss";

interface Props extends OverridedControllerProps {
  label?: string;
  placeholder: string;
  defaultValue: string;
  isInvalid: boolean;
}

const ControlledTextField: FC<Props> = ({ label, placeholder, defaultValue, isInvalid, control, name, ...restProps }) => {
  return (
    <Form.Group controlId={name}>
      {
        label && <Form.Label className={s.label}>{label}</Form.Label>
      }
      <Controller
        control={control as unknown as Control<FieldValues>}
        name={name}
        defaultValue={defaultValue}
        {...restProps}
        render={({ field }) => (
          <Form.Control
            type="text"
            {...field}
            isInvalid={isInvalid}
            placeholder={placeholder}
          />
        )}
      />
    </Form.Group>
  )
};

export default ControlledTextField;