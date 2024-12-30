import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-upcomingexams',
  standalone: false,
  
  templateUrl: './upcomingexams.component.html',
  styleUrl: './upcomingexams.component.css'
})
export class UpcomingexamsComponent implements OnInit {
  date: Date[] | undefined;
  ngOnInit(): void {
    this.date = [new Date("Sun Dec 22 2024 "), 
      new Date("Sun Dec 20 2024"),
      new Date("Sun Dec 27 2024"),
      new Date("Sun Jan 6 2025"),
    ];
  }

}
