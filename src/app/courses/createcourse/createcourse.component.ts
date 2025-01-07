import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CloudinaryService } from '../../shared/services/cloudinary.service';

@Component({
  selector: 'app-createcourse',
  standalone: true,
  imports:[SharedModule],
  templateUrl: './createcourse.component.html',
  styleUrl: './createcourse.component.css'
})
export class CreatecourseComponent {

}
