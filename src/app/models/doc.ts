import { DocType } from "./types/doctype";

export class Doc {
    _id: string;
    docName: string;
    docPath: string;
    docType: DocType;
    permittedRoles: string[];
}
