import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username:['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if(this.loginForm.get('username').value =='sarwan' && this.loginForm.get('password').value=='sarwan') {
      localStorage.setItem('token','dhskdjshdshdksjdk')
      this.router.navigate(['dashboard']);
    } else {
      alert('Unauthorized Access. User not found.')
    }
  }

}
