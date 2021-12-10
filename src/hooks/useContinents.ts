import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../services/api";


type Continent = {
  id: string;
  slug: string;
  name: string;
  description: string;
  countries: string[];
  numberOfCities: number;
  numberOfLanguages: number;
  numberOfCountries: number;
};
type GetContinentsResponse = {
  continents: Continent[];
};

export async function getContinents(): Promise<GetContinentsResponse> {
  const { data } = await api.get('continents');

  const continents = data.continents.map((continent: any) => ({
    id: continent.id,
    slug: continent.slug,
    name: continent.name,
    description: continent.description,
    image: continent.image,
    countries: continent.countries,
    numberOfCities: continent.numberOfCities,
    numberOfLanguages: continent.numberOfLanguages,
    numberOfCountries: continent.numberOfCountries,
  }));

  return { continents };
}

export function useContinents(options?: UseQueryOptions<GetContinentsResponse>) {
  return useQuery('continents', getContinents, {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  });
}