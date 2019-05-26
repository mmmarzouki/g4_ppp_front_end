import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-case',
  templateUrl: './business-case.component.html',
  styleUrls: ['./business-case.component.scss']
})
export class BusinessCaseComponent implements OnInit {

  version = '';
  executiveSummary = '';
  reasons = '';
  options = '';
  expectedBenefitsAndDisbenefits = '';
  risks = '';
  cost = '';
  timescales = '';
  investmentAppraisal = '';
  
  public form: FormGroup;
  submitted= false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      version: [null, Validators.required],
      executiveSummary: [null, Validators.required],
      reasons: [null, Validators.required],
      options: [null, Validators.required],
      expectedBenefitsAndDisbenefits: [null, Validators.required],
      risks: [null, Validators.required],
      cost: [null, Validators.required],
      timescales: [null, Validators.required],
      investmentAppraisal: [null, Validators.required],
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
