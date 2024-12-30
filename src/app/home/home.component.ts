import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgresscardComponent } from '../shared/progresscard/progresscard.component';
import { Image } from 'primeng/image';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports :[SharedModule, ChartModule, CardModule, ButtonModule, Image],
  
})
export class HomeComponent {

  
}
