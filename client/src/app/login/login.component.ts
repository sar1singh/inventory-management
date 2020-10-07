import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private fb: FormBuilder,private router: Router,private apiService: ApiService)
   { }

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
    let username = this.loginForm.get('username').value;
    let payload = {data:{
      "username": username,
      "password": this.loginForm.get('password').value
    }}
      this.apiService.post('login',payload).subscribe(res=>{
        if(res.status =='Success') {
          localStorage.setItem('token',res.data)
          localStorage.setItem('username',username)
          this.router.navigate(['dashboard']); 
        } else {
          alert(res.message)
        }
      });
  }

}
