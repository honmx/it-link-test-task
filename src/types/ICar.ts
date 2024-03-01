import { IOption } from "./IOptions";
import { ITechnicalCharacteristics } from "./ITechnicalCharachteristics";

export interface ICar {
  id: number;
  images: string[];
  name: string;
  description: string;
  price: number;
  contacts: string;
  technical_characteristics?: ITechnicalCharacteristics;
  options?: IOption[];
}