import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-year-finder',
  templateUrl: './year-finder.component.html',
  styleUrls: ['./year-finder.component.scss']
})
export class YearFinderComponent implements OnInit {

  age!: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        this.age = params.age;
    });
  }

  public getYearByAge(age: number): number {
    return (new Date()).getFullYear() - age;
  }

}
