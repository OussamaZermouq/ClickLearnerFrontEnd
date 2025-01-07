import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({    // Add this decorator
    providedIn: 'root'
  })

export class CloudinaryService{
    readonly baseUrl = 'https://api.cloudinary.com/v1_1/dlnxxztxa/auto/upload';
    readonly uploadPreset= 'clickLearnerBackend';
    constructor(private http:HttpClient){
    }


    uploadImage(image: any):Observable<CloudinaryResponse> {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset',this.uploadPreset);
        formData.append("api_key", '218447796454176');
        return this.http.post<CloudinaryResponse>(this.baseUrl, formData);
    }
}
interface CloudinaryResponse {
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: string;
    tags: string[];
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string;
    secure_url: string;
    asset_folder: string;
    display_name: string;
    access_mode: string;
    original_filename: string;
}