import { Component, OnInit } from '@angular/core';
import { Project } from "../../../../../../models/project";
import { ActivatedRoute } from "@angular/router";
import { Notif } from '../../../../../../models/Notif';

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

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.project = this.route.snapshot.data.project[0];
        this.notifs = this.project.notifs;
        
    }

}
