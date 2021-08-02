
export interface IPokemonResults {
  next: string;
  previous: string;
  results: {
    name: string,
    url: string
  }[];
}
