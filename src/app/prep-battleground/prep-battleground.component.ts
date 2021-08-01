import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prep-battleground',
  templateUrl: './prep-battleground.component.html',
  styleUrls: ['./prep-battleground.component.scss']
})
export class PrepBattlegroundComponent implements OnInit {

  heroName: string = 'Sebastien';
  heroNameDeux: string = 'Quentin';

  constructor() { }

  ngOnInit(): void {
  }

}
