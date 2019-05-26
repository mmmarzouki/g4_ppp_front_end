import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pid',
  templateUrl: './pid.component.html',
  styleUrls: ['./pid.component.scss']
})
export class PidComponent implements OnInit {

  background = '';
  version = '';
  mainGoal = '';
  desiredOutcomes = '';
  interfaces = '';
  projectApproach = '';
  acceptanceResponsibilities = '';
  projectProductDescription = '';
  businessCase = '';
  stakeHolderList = '';
  qualityManagementApproach = '';
  changeControlApproach = '';
  riskManagementApproach = '';
  communicationManagementApproach = '';
  projectPlan = '';
  projectManagementTeam = '';
  projectControls = '';
  tailoring = '';
  public form: FormGroup;
  submitted= false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      version: [null, Validators.required],
      background: [null, Validators.required],
      mainGoal: [null, Validators.required],
      desiredOutcomes: [null, Validators.required],
      interfaces: [null, Validators.required],
      projectApproach: [null, Validators.required],
      acceptanceResponsibilities: [null, Validators.required],
      projectProductDescription: [null, Validators.required],
      businessCase: [null, Validators.required],
      stakeHolderList: [null, Validators.required],
      qualityManagementApproach: [null, Validators.required],
      changeControlApproach: [null, Validators.required],
      riskManagementApproach: [null, Validators.required],
      communicationManagementApproach: [null, Validators.required],
      projectPlan: [null, Validators.required],
      projectManagementTeam: [null, Validators.required],
      projectControls: [null, Validators.required],
      tailoring: [null, Validators.required]
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
