import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Project } from '../../../../../../../models/project';
import { DocumentService } from '../../../../../../../_services/document.service';

@Component({
  selector: 'app-business-case',
  templateUrl: './business-case.component.html',
  styleUrls: ['./business-case.component.scss']
})
export class BusinessCaseComponent implements OnInit {

  @Input()
  project: Project;

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
  submitted = false;

  constructor(private fb: FormBuilder, private documentService: DocumentService) { }

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

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const user = JSON.parse(localStorage.getItem('user'));
      const author = user.firstName + " " + user.lastName;
      const body = {
        version : this.version,
        executiveSummary : this.executiveSummary,
        reasons : this.reasons,
        options : this.options,
        expectedBenefitsAndDisbenefits : this.expectedBenefitsAndDisbenefits,
        risks : this.risks,
        cost : this.cost,
        timescales : this.timescales,
        investmentAppraisal : this.investmentAppraisal,
        author: author
      }
      const projectId = this.project._id;
      let processId = '';
      this.project.processes.forEach(el => {
        if (el.isActive)
          processId = el._id;
      })

      this.documentService.uploadBusinessCase(body, projectId, processId).subscribe(res => {
        this.project = res;
      })
      this.submitted = false;
    }
  }
}
