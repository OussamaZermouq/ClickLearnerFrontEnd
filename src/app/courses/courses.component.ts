import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { CoursService } from '../shared/services/cours.service';
import { Cours } from '../../models/Cours';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports:[
    SharedModule,
    CommonModule,
    ButtonModule,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{

  courses:Cours[] = [];

  constructor(private coursService:CoursService){

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
  
}
