import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { CoursService } from '../shared/services/cours.service';
import { Cours } from '../../models/Cours';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports:[
    SharedModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    InputGroupModule, InputGroupAddonModule, InputTextModule,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{

  courses:Cours[] = [];
  coursSearch:string = '';
  constructor(private router:Router, private coursService:CoursService){

  }

  ngOnInit(): void {
    this.getAllCours();
  }
  getAllCours(){
    this.coursService.getAllCours().subscribe(data => {
      console.log(data);
      this.courses = data as Cours[];
    })
  }
  onCourseDetailClick(course:Cours){
    this.router.navigate(['/courses/coursedetails/'+course.coursId]);

  }
  
}
