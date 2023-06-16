import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResult } from 'src/app/model/auth-result';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  
  constructor(public apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
  }

  public login() {
    if (!this.formGroup.valid) {
      return;
    }

    const user: User = this.formGroup.getRawValue();
    this.apiService.login(user).subscribe(({ token }: AuthResult) => {
      localStorage.setItem('auth_token', token)
      console.log("token", token);
    })
    this.router.navigate(['/main'])
  }
}
