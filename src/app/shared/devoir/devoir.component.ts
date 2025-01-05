import { Component, OnInit } from '@angular/core';
import { DevoirService } from '../services/devoir.service';

@Component({
  selector: 'app-devoir',
  standalone: false,
  
  templateUrl: './devoir.component.html',
  styleUrl: './devoir.component.css'
})
export class DevoirComponent implements OnInit {
  constructor(private devoirService: DevoirService) { 
  }

  getDevoirById(devoirId: number){
    this.devoirService.getDevoirById(devoirId).subscribe((data)=>{
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.getDevoirById(1);
  }
  getDevoirsByCoursId(coursId: number){
    return this.devoirService.getDevoirsByCoursId(coursId);
  }
  
}
