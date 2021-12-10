import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../services/api";

type Country = {
  id: string;
  name: string;
  capital: string;
  flag: string;
};

type Continent = {
  id: string;
  slug: string;
  name: string;
  description: string;
  text: string;
  number_of_cities: string;
  number_of_countries: string;
  number_of_languages: string;
  image: string;
  countries: Country[];
};

type GetContinentsResponse = {
  continent: Continent;
};

export async function getContinent(id): Promise<GetContinentsResponse> {
  const { data } = await api.get(`/continents/${id}`);
  console.log('getContinent', data);

  const continent = data.continent;
  return { continent };
}

export function useContinent(id, options?: UseQueryOptions<GetContinentsResponse>) {
  return useQuery('continents', () => getContinent(id), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  });
}