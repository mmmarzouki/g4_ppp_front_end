import { Doc } from "./doc";
import { ProcessType } from "./types/processtype";

export class Process {
    id: string;
    startDate: string;
    endDate: string;
    name: string;
    processType: ProcessType;
    isActive: boolean;
    docs: Doc[];
}