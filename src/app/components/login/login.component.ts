import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators'
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit{
  error =' ';
  errorMessage = '';
  loginForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private authService: AuthenticationService,
    private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  get f(){
    return this.loginForm.controls;
  }
  onSubmit(){
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f['username'].value, this.f['password'].value)
    .pipe(first())
    .subscribe({
      next : () => {
        const returnUrl ='/'
        this.router.navigateByUrl(returnUrl)
      },
      error : error => {
        console.log(error)
        console.log('Authentication error')
        this.error = 'Invalid username or password'
        // this.errorMessage = 'Invalid username or password!'
      }
    })
  }
}
