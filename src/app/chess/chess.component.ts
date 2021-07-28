import { Component, OnInit } from '@angular/core';
import {ChessBoard} from "../../model/chess/chessBoard";

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

}
