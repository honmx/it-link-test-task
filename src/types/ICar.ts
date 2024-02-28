import { IOption } from "./IOptions";
import { ITechnicalCharachteristics } from "./ITechnicalCharachteristics";

export interface ICar {
  id: number;
  images: string[];
  name: string;
  description: string;
  price: number;
  contacts: string;
  technical_charachteristics?: ITechnicalCharachteristics;
  options?: IOption[];
}