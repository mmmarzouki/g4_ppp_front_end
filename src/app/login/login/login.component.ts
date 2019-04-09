import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Collaborator } from '../../models/collaborator';
import { AuthService } from '../../_services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  collaborator: Collaborator;
  invalid = false;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.isLogged){
      this.router.navigate(['/'])
    }
      else
      {
        this.form = this.fb.group({
          email: [null],
          password: [null]
        })
      }


  }

  close(){
    this.invalid = false;
  }
  onSubmit(){
    if(this.form.valid){
      this.authService.login(this.form.controls.email.value,this.form.controls.password.value).subscribe(null, err =>{
        this.invalid = true;
      });
    }
  }

}
