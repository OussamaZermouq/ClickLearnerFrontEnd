import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatecourseRoutingModule } from './createcourse-routing.module';
import { CreatecourseComponent } from './createcourse.component';
import { SharedModule } from '../../shared/shared.module';
import { UploadresourcestocoursComponent } from '../../shared/uploadresourcestocours/uploadresourcestocours.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CreatecourseRoutingModule,
    SharedModule
  ]
})
export class CreatecourseModule { }
