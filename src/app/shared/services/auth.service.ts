import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class AuthService{
    readonly baseUrl = `${environment.baseUrlUsers}/api/v1/user`
    constructor(private http:HttpClient){
    }
    login(email:string, password:string){
        return this.http.post(this.baseUrl+'/login',{
            email:email,
            password:password
        })
    }

}