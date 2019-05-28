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
        background : this.background,
        version : this.version,
        mainGoal : this.mainGoal,
        desiredOutcomes : this.desiredOutcomes,
        interfaces : this.interfaces,
        projectApproach : this.projectApproach,
        acceptanceResponsibilities : this.acceptanceResponsibilities,
        projectProductDescription : this.projectProductDescription,
        businessCase : this.businessCase,
        stakeHolderList : this.stakeHolderList,
        qualityManagementApproach : this.qualityManagementApproach,
        changeControlApproach : this.changeControlApproach,
        riskManagementApproach : this.riskManagementApproach,
        communicationManagementApproach : this.communicationManagementApproach,
        projectPlan : this.projectPlan,
        projectManagementTeam : this.projectManagementTeam,
        projectControls : this.projectControls,
        tailoring : this.tailoring,
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
