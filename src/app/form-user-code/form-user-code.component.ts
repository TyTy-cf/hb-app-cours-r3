import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";

@Component({
  selector: 'app-form-user-code',
  templateUrl: './form-user-code.component.html',
  styleUrls: ['./form-user-code.component.scss']
})
export class FormUserCodeComponent implements OnInit {

  userFormGroup!: FormGroup;
  user: User = new User();

  constructor() { }

  ngOnInit(): void {
    this.userFormGroup = new FormGroup(
      {
        _nickname: new FormControl(
          '', [
            Validators.required,
          ]
        ),
        _email: new FormControl(
          '', [
            Validators.required,
          ]
        )
      }
    );
  }

  get nickname(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_nickname');
  }

  get email(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_email');
  }

  onSubmit(): void {
    console.log('En soumission de form...');
    this.user.nickname = this.nickname.value;
    this.user.email = this.email.value;
    console.log(this.user);
  }

}
