import { Professor } from './Professor';
import { Question } from './Question';

export class Devoir{
    devoirId?: number;
    title?: string;
    deadline?: Date;
    //should be changed to actual type
    coursId?: number;
    prof?: Professor;
    questions?: Question[];
}