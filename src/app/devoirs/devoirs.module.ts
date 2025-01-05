import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevoirsRoutingModule } from './devoirs-routing.module';
import { DevoirsComponent } from './devoirs.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DevoirsRoutingModule,
    DevoirsComponent

    
  ]
})
export class DevoirsModule { }
