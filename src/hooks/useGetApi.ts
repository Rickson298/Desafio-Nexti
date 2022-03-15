import axios from "axios";
import { useState } from "react";

export const api = axios.create({
  baseURL: "https://desafioreact.s3.amazonaws.com/menu",
});

type Response = [(endPoint: string) => Promise<void>, any, boolean];

export function useGetApi(): Response {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchData(endPoint: string): Promise<void> {
    setIsLoading(true);
    let { data } = await api.get(endPoint);
    setData(data);
    setIsLoading(false);
  }
  return [fetchData, data, isLoading];
}
