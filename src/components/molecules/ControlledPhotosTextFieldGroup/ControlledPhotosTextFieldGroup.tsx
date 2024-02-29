// import { OverridedControllerProps } from "@/types/OverridedControllerProps";
// import { FC } from "react";
// import { Form, Stack } from "react-bootstrap";
// import { Control, Controller, FieldArray, FieldValues, useFieldArray } from "react-hook-form";
// import s from "./ControlledPhotosTextFieldGroup.module.scss";

// interface Props extends Omit<OverridedControllerProps, "name"> {
//   label?: string;
//   name: "photos";
//   placeholder: string;
// }

// const ControlledPhotosTextFieldGroup: FC<Props> = ({ label, control, name, placeholder }) => {

//   const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
//     control,
//     name: name,
//   });

//   return (
//     <Form.Group controlId={name}>
//       <Form.Label className={s.label}>{label}</Form.Label>
//       <Stack gap={1}>
//         {
//           fields.map(field => (
//             <Controller
//               key={field.id}
//               control={control as unknown as Control<FieldValues>}
//               name={`${name}.${field.}`}
//               defaultValue={field.photo}
//               render={({ field }) => (
//                 <Form.Control
//                   type="text"
//                   {...field}
//                   isInvalid={field.value.length === 0}
//                   placeholder={placeholder}
//                 />
//               )}
//             />
//           ))
//         }
//       </Stack>
//     </Form.Group>
//   )
// };

// export default ControlledPhotosTextFieldGroup;