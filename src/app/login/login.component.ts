import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  
  constructor( 
    private fb: FormBuilder,
    private toastr: ToastrService,
    private auth: AuthService,
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    })
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid){
      this.toastr.error('Preencha os campos corretamente!');
      return;
    }
    
    try {
      const {name, password} = this.loginForm.getRawValue()
      this.auth.login(name, password)
    } catch(error: any) {
      this.toastr.error(error.message);
    }

  }

}
