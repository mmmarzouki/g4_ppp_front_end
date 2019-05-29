import { Component, OnInit, SystemJsNgModuleLoader, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleType } from '../../../../../../models/types/roletype';
import { NotifService } from '../../../../../../_services/notif.service';
import { User } from '../../../../../../auth/_models';
import { Project } from '../../../../../../models/project';
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-sendnotif',
  templateUrl: './sendnotif.component.html',
  styleUrls: ['./sendnotif.component.scss']
})
export class SendnotifComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private notifService: NotifService, private route: ActivatedRoute) { }

  @Input() public project;

  receiver_email = "";
  receiver_user: User;
  email: string;
  marked = false;
  theCheckbox = false;
  validRole = false;


  user = JSON.parse(localStorage.getItem('user'));

  notifForm = {
    id_sender: "",
    email_receiver: "",
    object: "",
    role: "",
    description: "",
    lien: ""
  };

  processForm = {
    name: "",
    description: "",
    startDate: "",
    endDate: ""
  };

  collaborator = JSON.parse(localStorage.getItem('user'));
  roleColab = '';


  ngOnInit() {
    this.project.collaborators.forEach(collab => {
      if (collab.collaboratorId === this.collaborator._id)
        this.roleColab = collab.role;

    });

    if (this.roleColab === "Project Manager")
      this.validRole = true;
    console.log(this.validRole);
  }


  sendNotif() {
    const formData = new FormData();
    formData.append('project', this.project._id);
    formData.append('email_sender', this.user.email);
    formData.append('email_receiver', this.email);
    formData.append('object', this.notifForm.object);
    formData.append('lien', this.notifForm.lien);
    formData.append('role', this.notifForm.role);
    formData.append('description', this.notifForm.description);


     this.notifService.create(formData).subscribe(res=>{
     this.project = res;
     location.reload();
    });
 
    if (this.theCheckbox){
       const processFormDate = new FormData();
       processFormDate.append('project',this.project._id);
       processFormDate.append('description',this.processForm.description);
       processFormDate.append('name',this.processForm.name);
       processFormDate.append('startDate',this.processForm.startDate);
       processFormDate.append('endDate',this.processForm.endDate);
 
       const body = {
         description: this.processForm.description,
         name: this.processForm.name,
         endDate: this.processForm.endDate,
         startDate: this.processForm.startDate,
         type: 'Project Initiation',
         docs: [],
         isActive: true
       }

       this.notifService.createProcess(body,this.project._id).subscribe(res=>{
         this.project=res;
         this.activeModal.close('close');
        });


  }}

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }

}


