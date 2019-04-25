import { Process } from "./process";
import { CollaboratorRole } from "./CollaboratorRole";

export class Project {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    processes: Process[];
    collaborators: CollaboratorRole[];
}