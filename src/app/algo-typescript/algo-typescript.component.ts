import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";

@Component({
  selector: 'app-algo-typescript',
  templateUrl: './algo-typescript.component.html',
  styleUrls: ['./algo-typescript.component.scss']
})
export class AlgoTypescriptComponent implements OnInit {

  public students: Student[];

  constructor() {
    // Exo 5 :
    this.students = [
      {
        name: 'Albert',
        notes: new Array<number>(12, 8, 9, 7, 13),
      },
      {
        name: 'Michel',
        notes: new Array<number>(14, 13, 12, 11, 10),
      },
      {
        name: 'Vincent',
        notes: new Array<number>(17, 16, 15, 18, 13),
      },
    ];
  }

  ngOnInit(): void {
    this.exoMoyenne([ 12, 15, 19, 2]);
    this.studentsAverage();
  }

  private exoMoyenne(numbers: number[]): number {
    return this.calculateAverage(numbers);
  }

  private studentsAverage(): void {
    console.log('Résultat exos 5 : ');
    for (const student of this.students) {
      console.log('La moyenne de : ' + student.name + ' est de ' +
        this.calculateAverage(student.notes))
      ;
    }
  }

  calculateAverage(notes: number[]): number {
    let sumNotes = 0;
    for (const note of notes) {
      sumNotes += note;
    }
    return sumNotes/notes.length;
  }

}
