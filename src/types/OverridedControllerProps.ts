import { IFormInput } from "@/components/organisms/CarForm/CarForm";
import { Control, ControllerProps, FieldValues } from "react-hook-form";

export type OverridedControllerProps = {
  control: Control<IFormInput>;
} & Omit<ControllerProps, "control" | "render">