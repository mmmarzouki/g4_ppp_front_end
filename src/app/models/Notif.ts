import { RoleType } from "./types/roletype";

export class Notif {
    _id: string;
    email_sender: string;
    email_receiver: string;
    role: RoleType;
    object: string;
    description: string;
    lien: string;
}