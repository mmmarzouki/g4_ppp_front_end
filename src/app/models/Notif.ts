import { RoleType } from "./types/roletype";

export class Notif {
    _id: string;
    sender: string;
    receiver: string;
    role: RoleType;
    object: string;
    description: string;
    lien: string;
}