import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  posts: any ='';
  success:String='';
  active:boolean=false;
  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    bio: new FormControl(null, [Validators.required]),
  },
    
  )

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  
  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.loadData();
        
  }

  loadData() {
    this.authService.getStatus().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
      this.success="Registration Successful";
      this.active=this.posts.success.toString();
    });
  }
}
