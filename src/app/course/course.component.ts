import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursService } from '../shared/services/cours.service';
import { Cours } from '../../models/Cours';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    CommonModule, SharedModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent implements OnInit {
  cours?: Cours;
  courseId?: number;
  content:SafeHtml[] = [];

  
@ViewChild('videoPlayer') videoplayer: any;
public startedPlay:boolean = false;
public show:boolean = false;
pauseVideo(videoplayer:any)
{
  videoplayer.nativeElement.play();
  // this.startedPlay = true;
  // if(this.startedPlay == true)
  // {
     setTimeout(() => 
     {
      videoplayer.nativeElement.pause();
       if(videoplayer.nativeElement.paused)
      {
        this.show = !this.show;       
      } 
     }, 5000);
  // }
}



  constructor(
    private route: ActivatedRoute,
    private coursService: CoursService,
    private sanitizer:DomSanitizer,
  ) {
    
    this.route.params.subscribe((params: any) => {
      this.courseId = params['id'];
    });
  }
  ngOnInit(): void {
    this.coursService.getCoursById(this.courseId!).subscribe((data) => {
      this.cours = data as Cours;
      console.log(this.cours);
      this.content = this.cours.chapitres!.map(chapitre => 
        this.sanitizer.bypassSecurityTrustHtml(chapitre.chapitreContent!)
      );
    });
  }
}
