import { Component, OnInit } from '@angular/core';
import {Project} from "../../../../../../models/project";
import {ActivatedRoute} from "@angular/router";
import {Process} from "../../../../../../models/process";
import { Doc } from '../../../../../../models/doc';
import { HttpClient } from '@angular/common/http';
import { DocumentService } from '../../../../../../_services/document.service';

@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

    project: Project;
    process: Process;

    fileOpened = false;

    constructor(private route: ActivatedRoute, private documentService: DocumentService) { }

    ngOnInit() {
        this.project = this.route.snapshot.data.project[0];
        const id = this.route.snapshot.params.idprocess;
        this.project.processes.forEach(p=> {
            if (p._id === id){
                this.process = p;
            }
        });
    }
    exploreDocument(document: Doc){
        this.fileOpened = false;
        const collaborator = JSON.parse(localStorage.getItem('user'));
        let role = '';
        this.project.collaborators.forEach(collab => {
            if(collab.collaboratorId === collaborator._id)
                role = collab.role;
        });
        if (document.permittedRoles.indexOf(role) === -1){
            this.fileOpened = true;
        }
        else {
            this.documentService.viewDocument(document).subscribe(res => {
                console.log('done')
            })
        }
    }

    resetFileOpened(){
        this.fileOpened = false;
    }
}
