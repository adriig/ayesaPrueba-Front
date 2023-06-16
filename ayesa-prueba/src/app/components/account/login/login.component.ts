import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  
  constructor() {}

  ngOnInit(): void {
  }

  public register() {
    console.log(this.formGroup.valid)
    if (this.formGroup.valid) {
      const user = this.formGroup.value;
      console.log(user);
      // Aquí puedes agregar la lógica para enviar los datos del registro al servidor
    }
  }

}
