import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyntaxeAngularComponent } from './syntaxe-angular/syntaxe-angular.component';
import { YearFinderComponent } from './year-finder/year-finder.component';
import { AlgoTypescriptComponent } from './algo-typescript/algo-typescript.component';
import { SyntaxeAngularCoursComponent } from './syntaxe-angular-cours/syntaxe-angular-cours.component';

@NgModule({
  declarations: [
    AppComponent,
    SyntaxeAngularComponent,
    YearFinderComponent,
    AlgoTypescriptComponent,
    SyntaxeAngularCoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
