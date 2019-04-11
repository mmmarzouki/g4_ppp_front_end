import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { ApiService } from '../../_services/api.service';
import { Collaborator } from '../../models/collaborator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public form: FormGroup;
  collaborator: Collaborator;
  success = false;
  error = false;
  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.apiService.classname = "users"
   }

  ngOnInit() {

    this.form = this.fb.group({
      firstName:[null, Validators.required],
      lastName:[null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  onSubmit(){
    if(this.form.valid){
      this.collaborator = new Collaborator();
      this.collaborator.firstName = this.form.controls.firstName.value;
      this.collaborator.lastName = this.form.controls.lastName.value;
      this.collaborator.email = this.form.controls.email.value;
      this.collaborator.password = this.form.controls.password.value;

      this.apiService.add(this.collaborator).subscribe( _ => {
        this.success = true;
        setTimeout(() => {
          this.router.navigate(['login'])
        }, 3500);
      },
      _ => {
        this.error = true;
      }
      )
    }
  }

}
