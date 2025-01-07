import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProgressionService } from '../../shared/services/progression.service';

@Component({
  selector: 'app-coursedetails',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.css',
})
export class CoursedetailsComponent {

}
