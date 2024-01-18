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

  posts: any[] = [];
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
  ngOnInit() {
    //this.loadData();
  }
  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.loadData();
    //this.authService.register(this.registerForm.value).pipe(
      // If registration was successfull, then navigate to login route
      //tap(() => this.router.navigate(['../login']))
    //).subscribe();
        
  }

  loadData() {
    this.authService.getStatus().subscribe((data: any[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
}
