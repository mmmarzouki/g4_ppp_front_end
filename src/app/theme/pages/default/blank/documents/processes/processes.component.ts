import { Component, OnInit } from '@angular/core';
import {Project} from "../../../../../../models/project";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss']
})
export class ProcessesComponent implements OnInit {

  project: Project;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.project = this.route.snapshot.data.project[0];
  }

}
