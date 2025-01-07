import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // This makes the service available application-wide
  })

export class ProgressionService{
    readonly baseUrl =  `${environment.baseUrlProgression}/api/v1/progression/create`

    constructor(private http:HttpClient){

    }

    subscribeToCours(coursId:number){
        const body = {
            coursId:coursId,
            etudiantId:Number.parseInt(localStorage.getItem("userId")!),
            progression:0
        };
        return this.http.post(`${this.baseUrl}`,body)
    }

    getProgression(coursId:number){
        const userId = localStorage.getItem('userId');
        return this.http.get(`${this.baseUrl}/?userId=${userId}&coursId=${coursId}`)
    }

}