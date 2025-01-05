import { Chapitre } from "./Chapitre";
import { Matiere } from "./Matiere";
import { Professor } from "./Professor";
import { DifficultyEnum } from "./DifficultyEnum";

export class Cours{
    coursId?: number;
    descriptionCours?:string;
    coursImage?:any;
    titreCours?:string;
    prof?:Professor;
    matiere?:Matiere;
    estimatedDuration?:number;
    difficulty?:DifficultyEnum;
    chapitres?: Chapitre[];
}