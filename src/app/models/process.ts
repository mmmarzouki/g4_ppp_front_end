import { Doc } from "./doc";
import { ProcessType } from "./types/stagetype";

export class Process{
    id: string;
    startDate: string;
    endDate: string;
    processType: ProcessType;
    isActive: boolean;
    docs: Doc[];
}