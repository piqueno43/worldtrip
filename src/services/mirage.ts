import { createServer, Factory, Model, ActiveModelSerializer } from "miragejs";
import { continentes } from "./data/continents";

type Continente = {
  name: string;
  description: string;
  text: string;
  slug: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfCities: number;
  countries: Country[];
};

type Country = {
  id: string;
  name: string;
  capital: string;
  flag: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      continent: Model.extend<Partial<Continente>>({}),
    },
    factories: {
      continent: Factory.extend(
        {
          name(i: number) {
            return continentes[i].name;
          },
          description(i: number) {
            return continentes[i].description;
          },
          text(i: number) {
            return continentes[i].text;
          },
          slug(i: number) {
            return continentes[i].slug;
          },
          numberOfCountries(i: number) {
            return continentes[i].numberOfCountries;
          },
          numberOfLanguages(i: number) {
            return continentes[i].numberOfLanguages;
          },
          numberOfCities(i: number) {
            return continentes[i].numberOfCities;
          },
          countries(i: number) {
            return continentes[i].countries;
          },
        }
      ),
    },
    seeds(server) {
      server.createList("continent", continentes.length);
    },
    routes() {
      this.namespace = "api";
      this.timing = 1000;

      this.get('/continents')
      this.get('/continents/:id')
      // this.get('/continents/:id/countries')

      this.namespace = "";
      this.passthrough();
    },
  }
  );
  return server;
}