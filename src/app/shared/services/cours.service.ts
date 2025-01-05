import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Cours } from "../../../models/Cours";


@Injectable({
    providedIn: 'root'
})

export class CoursService{
    readonly baseUrl = `${environment.baseUrlCours}/api/v1/cours`

    constructor(private http:HttpClient){

    }

    getAllCours(){
        return this.http.get(`${this.baseUrl}/`);
    }

    getCoursById(coursId:number){
        return this.http.get(`${this.baseUrl}/${coursId}`);
    }

}