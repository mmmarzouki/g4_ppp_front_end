import { Component, OnInit } from '@angular/core';
import { Project } from "../../../../../../models/project";
import { ActivatedRoute } from "@angular/router";
import { DocumentService } from '../../../../../../_services/document.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../creation/modal/modal.component';

@Component({
    selector: 'app-processes',
    templateUrl: './processes.component.html',
    styleUrls: ['./processes.component.scss']
})
export class ProcessesComponent implements OnInit {

    project: Project;

    constructor(private route: ActivatedRoute, private documentService: DocumentService, private modalService: NgbModal) { }


    ngOnInit() {
        this.project = this.route.snapshot.data.project[0];
    }

    openMandate() {
        this.documentService.openMandate(this.project).subscribe(res => {
        });
    }

    openModal() {
        const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    }

}
