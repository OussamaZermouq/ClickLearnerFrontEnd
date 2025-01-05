import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class DevoirService{
    readonly baseURL = `${environment.BaseUrlDevoir}/api/v1/devoir`;

    constructor(private http: HttpClient) { }

    getDevoirById(devorId: number){
        return this.http.get(this.baseURL+'/'+devorId);
    }
    

    getDevoirsByCoursId(coursId: number){
        const devoirs =[
            {
                "devoirId": 1,
                "title": "Java Quiz",
                "deadline": "2024-02-01",
                "profId": 1,
                "coursId": 1,
                "questions": [
                    {
                        "@type": "MultipleChoiceQuestion",
                        "questionId": 1,
                        "question": "What is Java?",
                        "correctAnswer": {
                            "choixId": 1,
                            "choix": "A programming language"
                        },
                        "choixList": [
                            {
                                "choixId": 1,
                                "choix": "A programming language"
                            },
                            {
                                "choixId": 2,
                                "choix": "A programming language"
                            },
                            {
                                "choixId": 3,
                                "choix": "A type of coffee"
                            }
                        ]
                    },
                    {
                        "@type": "OpenQuestion",
                        "questionId": 2,
                        "title": "Java Features",
                        "question": "Explain the main features of Java"
                    }
                ]
            },
            {
                "devoirId": 1,
                "title": "Java Quiz",
                "deadline": "2024-02-01",
                "profId": 1,
                "coursId": 1,
                "questions": [
                    {
                        "@type": "MultipleChoiceQuestion",
                        "questionId": 1,
                        "question": "What is Java?",
                        "correctAnswer": {
                            "choixId": 1,
                            "choix": "A programming language"
                        },
                        "choixList": [
                            {
                                "choixId": 1,
                                "choix": "A programming language"
                            },
                            {
                                "choixId": 2,
                                "choix": "A programming language"
                            },
                            {
                                "choixId": 3,
                                "choix": "A type of coffee"
                            }
                        ]
                    },
                    {
                        "@type": "OpenQuestion",
                        "questionId": 2,
                        "title": "Java Features",
                        "question": "Explain the main features of Java"
                    }
                ]
            }
        ];
        return devoirs;

    }
}