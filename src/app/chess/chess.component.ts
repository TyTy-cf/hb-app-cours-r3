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

  constructor() { }

  ngOnInit(): void {
  }

  clickCase(oneCase: Case) {
    alert(oneCase.getName());
    // En tant qu'utilisateur je souhaite que lorsque je clique sur une case
    // J'ai un effet visuel qui me montre la case cliquée,
    //        si celle-ci a une piece de présente dessus
    // S'il y a bien une piece sur cette case, alors
    //        si je clique sur une autre case
    // Et que je peux m'y déplacer
    //        (pas de pièce de la même couleur présente dessus)
    // Alors je peux y déplacer ma piece
  }
}
