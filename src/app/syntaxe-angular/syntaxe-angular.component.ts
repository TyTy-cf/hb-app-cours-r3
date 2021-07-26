import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";

@Component({
  selector: 'app-syntaxe-angular',
  templateUrl: './syntaxe-angular.component.html',
  styleUrls: ['./syntaxe-angular.component.scss']
})
export class SyntaxeAngularComponent implements OnInit {

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
  }

  ngOnInit(): void {
  }

  displayPause(value: string) {
    alert('C est '+value+' la pause ');
    this.studentClass = '';
  }
}
