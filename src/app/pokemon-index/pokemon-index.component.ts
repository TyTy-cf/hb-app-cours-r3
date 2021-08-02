import { Component, OnInit } from '@angular/core';
import {IPokemon} from "../../model/pokemon/IPokemon";
import {HttpPokemonService} from "../../services/pokemon/http-pokemon.service";

@Component({
  selector: 'app-pokemon-index',
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.scss']
})
export class PokemonIndexComponent implements OnInit {

  pokemons: IPokemon[] = [];

  constructor(private httpPokemonService: HttpPokemonService) { }

  ngOnInit(): void {
    this.pokemons = this.httpPokemonService.getPokemons();
    console.log(this.pokemons);
  }

}
