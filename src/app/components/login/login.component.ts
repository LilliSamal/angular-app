import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  posts: any ='';
  outputName:String ='';
  outputEmail:String ='';
  outputBio:String ='';
  imageurl:String ='';
  active:boolean=false;

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    this.loadData();
  }

  loadData() {
    this.authService.getUserData().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
      this.active = true;
      this.outputName = this.posts.name.toString();
      this.outputEmail = this.posts.email.toString();
      this.outputBio = this.posts.bio.toString();
      this.imageurl = this.posts.img;
    }); 
  }


}
