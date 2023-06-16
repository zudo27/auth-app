import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup ({});
  public loading: Boolean = false;
  public  submitted: Boolean = false;
  constructor(
    private formBuilder:  FormBuilder,
    private service: AuthService,

  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]]
    })
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    if(this.loginForm.valid){
      this.loading = true;
      this.service.login(this.loginForm.value);
    }
  }

}
