import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from '../../../../../../../_services/document.service';
import { projectionDef } from '@angular/core/src/render3/instructions';
import { Project } from '../../../../../../../models/project';

@Component({
  selector: 'app-pid',
  templateUrl: './pid.component.html',
  styleUrls: ['./pid.component.scss']
})
export class PidComponent implements OnInit {

  @Input()
  project: Project;

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

  constructor(private fb: FormBuilder, private documentService: DocumentService) { }

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
      const user = JSON.parse(localStorage.getItem('user'));
      const author = user.firstName + " " + user.lastName;
      const body = {
        projectName : this.project.name,
        background : this.form.controls.background.value,
        version : this.form.controls.version.value,
        mainGoal : this.form.controls.mainGoal.value,
        desiredOutcomes : this.form.controls.desiredOutcomes.value,
        interfaces : this.form.controls.interfaces.value,
        projectApproach : this.form.controls.projectApproach.value,
        acceptanceResponsibilities : this.form.controls.acceptanceResponsibilities.value,
        projectProductDescription : this.form.controls.projectProductDescription.value,
        businessCase : this.form.controls.businessCase.value,
        stakeHolderList : this.form.controls.stakeHolderList.value,
        qualityManagementApproach : this.form.controls.qualityManagementApproach.value,
        changeControlApproach : this.form.controls.changeControlApproach.value,
        riskManagementApproach : this.form.controls.riskManagementApproach.value,
        communicationManagementApproach : this.form.controls.communicationManagementApproach.value,
        projectPlan : this.form.controls.projectPlan.value,
        projectManagementTeam : this.form.controls.projectManagementTeam.value,
        projectControls : this.form.controls.projectControls.value,
        tailoring : this.form.controls.tailoring.value,
        author : author
      }
      const projectId = this.project._id;
      let processId = '';
      this.project.processes.forEach(el => {
        if (el.isActive)
          processId = el._id;
      })

      this.documentService.uploadPid(body, projectId, processId).subscribe(res=> {
        this.project = res;
      })
      this.submitted = false;
    }
  }
}
