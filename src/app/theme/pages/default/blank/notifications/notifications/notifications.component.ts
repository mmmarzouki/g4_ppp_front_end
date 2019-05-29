import { Component, OnInit } from '@angular/core';
import { Project } from "../../../../../../models/project";
import { ActivatedRoute } from "@angular/router";
import { Notif } from '../../../../../../models/Notif';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SendnotifComponent } from '../sendnotif/sendnotif.component';
import { NotifService } from '../../../../../../_services/notif.service';


@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
    panelOpenState = false;

    project: Project;
    notifs: Notif[];
    decimal: number = 6;
    

    constructor(private route: ActivatedRoute ,private modalService: NgbModal, private notifService: NotifService) { }
   

    ngOnInit() {
        this.project = this.route.snapshot.data.project[0];
        this.notifs = [];
        const collaborator = JSON.parse(localStorage.getItem('user'));
        let roleColab = '';
        this.project.collaborators.forEach(collab => {
          if (collab.collaboratorId === collaborator._id)
              roleColab = collab.role;
      });
      this.project.notifs.forEach(el => {
        if (collaborator.email === el.email_receiver)
        { this.notifs.push(el) ;
        }
      })
        
    }
    
    openSend() {
        const modalRef = this.modalService.open(SendnotifComponent, { size: 'lg' });
        modalRef.componentInstance.project = this.project;
    }



    

}
