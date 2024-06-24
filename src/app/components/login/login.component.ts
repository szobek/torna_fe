import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm=new FormGroup({
  email: new FormControl('kn2@test.hu'),
  password: new FormControl('12345678'),
})
onSubmit(){
  console.log(this.loginForm.value)
}
}
