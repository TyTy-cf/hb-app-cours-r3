import { Component } from '@angular/core';
import {ChessBoard} from "../../model/chess/chessBoard";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent {

  chessBoard: ChessBoard = new ChessBoard();

}
