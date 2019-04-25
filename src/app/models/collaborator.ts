import { Doc } from "./doc";

export class Collaborator {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    docs: Doc[];
}