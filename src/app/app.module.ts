import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyntaxeAngularComponent } from './syntaxe-angular/syntaxe-angular.component';
import { YearFinderComponent } from './year-finder/year-finder.component';
import { AlgoTypescriptComponent } from './algo-typescript/algo-typescript.component';
import { SyntaxeAngularCoursComponent } from './syntaxe-angular-cours/syntaxe-angular-cours.component';
import { YatzeeComponent } from './yatzee/yatzee.component';
import { ExoTypescriptComponent } from './exo-typescript/exo-typescript.component';
import { ArenaComponent } from './arena/arena.component';
import { ChessComponent } from './chess/chess.component';
import { BattlegroundComponent } from './battleground/battleground.component';
import { PrepBattlegroundComponent } from './prep-battleground/prep-battleground.component';
import { PokerComponent } from './poker/poker.component';
import { PokerPlayerComponent } from './poker-player/poker-player.component';
import { HeroComponent } from './hero/hero.component';
import { FormUserComponent } from './form-user/form-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormUserCodeComponent } from './form-user-code/form-user-code.component';

@NgModule({
  declarations: [
    AppComponent,
    SyntaxeAngularComponent,
    YearFinderComponent,
    AlgoTypescriptComponent,
    SyntaxeAngularCoursComponent,
    YatzeeComponent,
    ExoTypescriptComponent,
    ArenaComponent,
    ChessComponent,
    BattlegroundComponent,
    PrepBattlegroundComponent,
    PokerComponent,
    PokerPlayerComponent,
    HeroComponent,
    FormUserComponent,
    FormUserCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Obligatoire pour formulaire par le template
    ReactiveFormsModule, // Obligatoire pour formulaire par le code
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
