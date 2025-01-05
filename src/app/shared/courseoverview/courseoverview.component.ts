import { Component, OnInit } from '@angular/core';
import { Cours } from '../../../models/Cours';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from '../services/cours.service';
import { Professor } from '../../../models/Professor';

@Component({
  selector: 'app-courseoverview',
  standalone: false,
  
  templateUrl: './courseoverview.component.html',
  styleUrl: './courseoverview.component.css'
})
export class CourseoverviewComponent implements OnInit {

  courseId: number | null = null;
  cours: Cours;
  prof:Professor;
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursService
  ) {
    this.route.params.subscribe((params: any) => {
      this.courseId = params['id'];
      console.log(this.courseId);
    });
    this.cours = new Cours();
    this.prof = new Professor();
  }

  ngOnInit(): void {
    this.coursesService.getCoursById(this.courseId!).subscribe((data) => {
      this.cours = data as Cours;
      this.prof = this.cours.prof!;
      console.log(this.cours);
    });
  }
}
