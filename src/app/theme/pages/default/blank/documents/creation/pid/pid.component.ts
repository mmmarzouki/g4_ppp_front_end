import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pid',
  templateUrl: './pid.component.html',
  styleUrls: ['./pid.component.scss']
})
export class PidComponent implements OnInit {

  background = '';
  public form: FormGroup;
  submitted= false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      background: [null, Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;
    if (this.form.valid) {
      console.log('test');
      this.submitted = false;
    }
  }
}
