import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../../../../models/project';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }

    model: Project;
    ngOnInit() {
        this.model = this.route.snapshot.data.project[0];
    }

}
