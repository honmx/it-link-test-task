import { ITechnicalCharacteristics } from "@/types/ITechnicalCharachteristics";

export const areTechnicalCharacteristicsFilled = (checked: boolean, data: Partial<ITechnicalCharacteristics>) => {
  return checked
    ? data?.brand?.length !== 0
    && data?.model?.length !== 0
    && data?.productionYear
    && data?.body?.length !== 0
    && data.mileage
    : true;
}