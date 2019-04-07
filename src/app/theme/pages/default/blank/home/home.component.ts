import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../_services/api.service';
import { Project } from '../../../../../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  model: Project[];
  addProject = false;
  collaboratorsNumber = 5;
  constructor(private api: ApiService) { 
    this.api.classname = "project"
  }

  add()
  {
    this.addProject = true;
  }
  ngOnInit() {
    this.api.getMany<Project>().subscribe(projects => {
      this.model = projects;
    })
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }
  addCollaborator()
  {
    this.collaboratorsNumber += 1;
  }
  removeLastCollaborator(){
    this.collaboratorsNumber = this.collaboratorsNumber <= 1 ? 0 : this.collaboratorsNumber - 1;
  }
}
