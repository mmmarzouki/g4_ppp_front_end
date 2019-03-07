import { Component, OnInit } from '@angular/core';
import {Folder} from '../../../../models/folder';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {

  folderExample: Folder = {
    id: '1',
    files: [{
      name: 'file1.pdf'
    },
      {
      name: 'file2.pdf'
      }
    ],
    name: 'folder_root',
    path: '/folder_root',
    folders: [
      {
        id: '2',
        files: [],
        name: 'subfolder1',
        path: '/folder_root/subfolder1',
        folders: []
      },
      {
        id: '3',
        files: [],
        name: 'subfolder2',
        path: '/folder_root/subfolder2',
        folders:
          [
            {
              id: '4',
              files: [],
              name: 'sub_subfolder',
              path: '/folder_root/sub_subfolder/sub_subfolder',
              folders: []
            }
          ]
      }
    ]
  };

  path: Folder[] = [];
  folder: Folder;

  constructor() { }

  ngOnInit() {
    this.folder = this.folderExample;
    this.path.push(this.folder);
  }

  setFolder(folder: Folder) {
    this.folder = folder;
    if (this.path.indexOf(folder) === -1) {
      this.path.push(folder);
    } else {
      this.path = this.path.slice(0, this.path.indexOf(folder) + 1);
    }
  }

  openParent() {
    if (this.folder !== this.path[0]) {
      this.path.pop();
      const parentFolder = this.path.pop();
      this.setFolder(parentFolder);
    }
  }
}
