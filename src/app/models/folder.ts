import {File} from './file';
export class Folder {
  id: string;
  name: string;
  path: string;
  folders: Folder[];
  files: File[];
}
