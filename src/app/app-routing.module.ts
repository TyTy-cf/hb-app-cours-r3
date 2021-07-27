import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SyntaxeAngularComponent} from "./syntaxe-angular/syntaxe-angular.component";
import {YearFinderComponent} from "./year-finder/year-finder.component";
import {AlgoTypescriptComponent} from "./algo-typescript/algo-typescript.component";
import {SyntaxeAngularCoursComponent} from "./syntaxe-angular-cours/syntaxe-angular-cours.component";

const routes: Routes = [
  { path: 'exo-syntaxe', component: SyntaxeAngularComponent },
  { path: 'cours-syntaxe', component: SyntaxeAngularCoursComponent },
  { path: 'year-finder/:age', component: YearFinderComponent },
  { path: 'algo-typescript', component: AlgoTypescriptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
