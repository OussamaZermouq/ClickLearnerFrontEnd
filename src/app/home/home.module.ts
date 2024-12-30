import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { ProgresscardComponent } from '../shared/progresscard/progresscard.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    
  ],
})
export class HomeModule { }
