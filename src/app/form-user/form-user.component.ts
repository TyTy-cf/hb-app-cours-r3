import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  user: User = new User();

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('On soumet le form');
    console.log(this.user);
  }
}
