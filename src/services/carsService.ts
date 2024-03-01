import { apiAxios } from "@/http/apiAxios";
import { ICar } from "@/types/ICar";

const getCars = async () => {
  const { data: cars } = await apiAxios.get<ICar[]>("/cars");
  return cars;
}

const getCarById = async (id: string) => {
  const { data: car } = await apiAxios.get<ICar>(`/cars/${id}`);
  return car;
}

const createCar = async (data: Omit<ICar, "id">) => {
  const { data: car } = await apiAxios.post<ICar>(`/cars`, data);
  return car;
}

const updateCar = async (id: number, data: ICar) => {
  const { data: car } = await apiAxios.patch<ICar>(`/cars/${id}`, data);
  return car;
}

const deleteCar = async (id: string) => {
  const { data: car } = await apiAxios.delete<ICar>(`/cars/${id}`);
  return car;
}

export default {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar
}
