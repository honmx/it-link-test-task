import { apiAxios } from "@/http/apiAxios";
import { ICar } from "@/types/ICar";

const getCars = async () => {
  const { data: cars } = await apiAxios.get<ICar[]>("/cars");
  return cars;
}

const getCarById = async (id: number) => {
  const { data: car } = await apiAxios.get<ICar>(`/cars/${id}`);
  return car;
}

const deleteCar = async (id: number) => {
  const { data: car } = await apiAxios.delete<ICar>(`/cars/${id}`);
  return car;
}

export default {
  getCars,
  getCarById,
  deleteCar
}
