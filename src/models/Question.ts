import { Choix } from "./Choix";
import { Devoir } from "./devoir";

export class Question{
    questionId?: number;
    Devoir?: Devoir;
    title?: string;
    question?:string;
    correctAnswer?: Choix;
    choixList?: Choix[];
}