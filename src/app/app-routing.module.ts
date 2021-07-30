import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SyntaxeAngularComponent} from "./syntaxe-angular/syntaxe-angular.component";
import {YearFinderComponent} from "./year-finder/year-finder.component";
import {AlgoTypescriptComponent} from "./algo-typescript/algo-typescript.component";
import {SyntaxeAngularCoursComponent} from "./syntaxe-angular-cours/syntaxe-angular-cours.component";
import {YatzeeComponent} from "./yatzee/yatzee.component";
import {ArenaComponent} from "./arena/arena.component";
import {ChessComponent} from "./chess/chess.component";
import {BattlegroundComponent} from "./battleground/battleground.component";
import {PrepBattlegroundComponent} from "./prep-battleground/prep-battleground.component";
import {PokerComponent} from "./poker/poker.component";
import {FormUserComponent} from "./form-user/form-user.component";
import {FormUserCodeComponent} from "./form-user-code/form-user-code.component";
import {RaceComponent} from "./race/race.component";
import {FormRaceComponent} from "./form-race/form-race.component";

const routes: Routes = [
  { path: 'exo-syntaxe', component: SyntaxeAngularComponent },
  { path: 'cours-syntaxe', component: SyntaxeAngularCoursComponent },
  { path: 'year-finder/:age', component: YearFinderComponent },
  { path: 'algo-typescript', component: AlgoTypescriptComponent},
  { path: 'yatzee', component: YatzeeComponent},
  { path: 'arena', component: ArenaComponent},
  { path: 'chess', component: ChessComponent},
  { path: 'poker', component: PokerComponent},
  { path: 'battleground/:heroName/:heroNameDeux', component: BattlegroundComponent},
  { path: 'prep-battleground', component: PrepBattlegroundComponent},
  { path: 'form/user/template', component: FormUserComponent},
  { path: 'form/user/code', component: FormUserCodeComponent},
  { path: 'race', component: RaceComponent},
  { path: 'form/race', component: FormRaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
