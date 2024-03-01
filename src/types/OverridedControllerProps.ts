import { Control, ControllerProps, FieldValues } from "react-hook-form";

export type OverridedControllerProps = {
  control: Control<any>;
} & Omit<ControllerProps, "control" | "render">