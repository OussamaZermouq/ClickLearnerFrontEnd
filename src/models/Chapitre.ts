import { Cours } from "./Cours";
import { Video } from "./Video";
import { Document } from "./Document";

export class Chapitre{
    chapitreId?:number;
    titreChapitre?:string;
    chapitreDescription?:string;
    numChapitre?:number;
    cours?:Cours;
    documents?:Document[];
    videos?:Video[];
}