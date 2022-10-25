import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Authenticate } from '@demo/data-models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'demo-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Output() submitForm = new EventEmitter<Authenticate>();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  login() {
    this.submitForm.emit({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    } as Authenticate);
  }

}
