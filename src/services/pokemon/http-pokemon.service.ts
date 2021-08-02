import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPokemon} from "../../model/pokemon/IPokemon";
import {JsonArray, JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import {IPokemonResults} from "../../model/pokemon/ipokemon-results";

@Injectable({
  providedIn: 'root'
})
export class HttpPokemonService {

  public static urlPokemons = 'https://pokeapi.co/api/v2/pokemon/';
  public static urlPokemonById = 'https://pokeapi.co/api/v2/pokemon/%s';

  constructor(private httpClient: HttpClient) { }

  getPokemons(): IPokemon[] {
    const pokemons: IPokemon[] = [];
    this.httpClient.get<IPokemonResults>(HttpPokemonService.urlPokemons).subscribe((jsonPokemon) => {
      for (const jsonPokemonElement of jsonPokemon.results) {
        this.httpClient.get<IPokemon>(jsonPokemonElement.url)
          .subscribe((pokemon) => {
            pokemons.push(pokemon);
          });
      }
    });
    return pokemons;
  }
}
