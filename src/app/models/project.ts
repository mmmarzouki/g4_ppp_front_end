import { Process } from "./process";
import { CollaboratorRole } from "./CollaboratorRole";
import { Doc } from "./doc";

export class Project {
    _id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    processes: Process[];
    collaborators: CollaboratorRole[];
    mandate: Doc;
}