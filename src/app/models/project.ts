import { Process } from "./process";
import { CollaboratorRole } from "./CollaboratorRole";
import { Doc } from "./doc";
import { Notif } from "./Notif";

export class Project {
    _id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    processes: Process[];
    collaborators: CollaboratorRole[];
    mandate: Doc;

    notifs: Notif[];
}