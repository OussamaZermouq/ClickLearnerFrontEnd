import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevoirsComponent } from './devoirs.component';

const routes: Routes = [{ path: '', component: DevoirsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevoirsRoutingModule { }
