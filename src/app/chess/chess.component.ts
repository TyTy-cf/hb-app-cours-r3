import { Component, OnInit } from '@angular/core';
import {ChessBoard} from "../../model/chess/chessBoard";
import {Case} from "../../model/chess/case";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit {

  chessBoard: ChessBoard = new ChessBoard();
  selectedCase: Case|undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  clickCase(clickedCase: Case) {
    // Si j'ai déjà sélectionné une case
    // Que la case précédemment sélectionnée est égale à la case que je viens de cliquer
    if (this.selectedCase?.getName() === clickedCase.getName()) {
      // Alors je réinitialise la valeur de ma case sélectionnée
      this.selectedCase = undefined;
      // Je remet la case que je viens de cliquer à sa couleur initiale
      clickedCase.color = clickedCase.initialColor;
    } else {
      // Si la case cliquée a une piece
      if (clickedCase.piece) {
        // Si l'on avait précédemment sélectionné une
        if (this.selectedCase) {
          // Alors on réinitialise sa couleur
          this.selectedCase.color = this.selectedCase.initialColor;
        }
        // On change la couleur de la case cliquée
        clickedCase.color = 'selected-case';
        // Et notre attribut de case sélectionnée devient la case cliquée
        this.selectedCase = clickedCase;
      }
    }
    // S'il y a bien une piece sur cette case, alors
    //        si je clique sur une autre case
    // Et que je peux m'y déplacer
    //        (pas de pièce de la même couleur présente dessus)
    // Alors je peux y déplacer ma piece
  }
}
