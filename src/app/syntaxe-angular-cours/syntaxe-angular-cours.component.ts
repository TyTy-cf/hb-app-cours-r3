import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {ChessBoard} from "../../model/chess/chessBoard";

@Component({
  selector: 'app-syntaxe-angular-cours',
  templateUrl: './syntaxe-angular-cours.component.html',
  styleUrls: ['./syntaxe-angular-cours.component.scss']
})
export class SyntaxeAngularCoursComponent implements OnInit {

  student: Student;
  student2: Student;
  nomFormation: string;
  dateObj: Date = new Date();
  studentClass: string = 'text-center';

  constructor() {
    this.nomFormation = 'HB R3';
    this.student = {
      name: 'Oui',
      notes: [10, 12, 14]
    }
    this.student2 = {
      name: 'Zboui',
      notes: [],
    }
    let chessBoard = new ChessBoard();
    console.log(chessBoard.board);
  }

  ngOnInit(): void {
  }

  displayPause(value: string) {
    alert('C est '+value+' la pause ');
    this.studentClass = '';
  }
}
