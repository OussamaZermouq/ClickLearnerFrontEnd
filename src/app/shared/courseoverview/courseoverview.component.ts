import { Component, OnInit } from '@angular/core';
import { Cours } from '../../../models/Cours';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from '../services/cours.service';
import { Professor } from '../../../models/Professor';
import { ProgressionService } from '../services/progression.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-courseoverview',
  standalone: false,
  providers:[MessageService],
  templateUrl: './courseoverview.component.html',
  styleUrl: './courseoverview.component.css'
})
export class CourseoverviewComponent implements OnInit {

  courseId: number | null = null;
  cours?: Cours;
  prof?:Professor;
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursService,
    private progressionService:ProgressionService,
    private messageService:MessageService
  ) {
    this.route.params.subscribe((params: any) => {
      this.courseId = params['id'];
      console.log(this.courseId);
    });
    this.prof = new Professor();
    this.cours = new Cours();
  }



  subscribeToCours(coursId:number){
    this.progressionService.subscribeToCours(coursId).subscribe((data)=>{
      const response = data as Response;
      console.log(response);

      if (response.code === "OK"){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Succesfully subscribed' });
      }
      else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured, try again later' });
      }
    });
  }


  ngOnInit(): void {
    this.coursesService.getCoursById(this.courseId!).subscribe((data) => {
      this.cours = data as Cours;
      this.prof = this.cours.prof!;
      console.log(this.cours);

    });
  }
}
interface Response{
  code:string;
  message: string;
}