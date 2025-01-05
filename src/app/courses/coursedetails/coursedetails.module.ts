import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursedetailsRoutingModule } from './coursedetails-routing.module';
import { CoursedetailsComponent } from './coursedetails.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoursedetailsRoutingModule,
  ]
})
export class CoursedetailsModule { }
