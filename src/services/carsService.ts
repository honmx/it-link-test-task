import { apiAxios } from "@/http/apiAxios";
import { ICar } from "@/types/ICar";

const getCars = async () => {
  const { data: cars } = await apiAxios.get<ICar[]>("/cars");
  return cars;
}

export default {
  getCars
}
