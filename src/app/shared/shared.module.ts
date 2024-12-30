import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ProgresscardComponent } from './progresscard/progresscard.component';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { DatePicker } from 'primeng/datepicker';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { DevoirduecardComponent } from './devoirduecard/devoirduecard.component';
import { UpcomingexamsComponent } from './upcomingexams/upcomingexams.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProgresscardComponent,
    DevoirduecardComponent,
    UpcomingexamsComponent,
  ],
  imports: [
    CommonModule,
    ToggleSwitchModule,
    CardModule,
    FormsModule,
    MegaMenuModule,
    AvatarModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    DatePicker,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProgresscardComponent,
    CardModule,
    DevoirduecardComponent,
    UpcomingexamsComponent,
  ], // Export here
})
export class SharedModule {}
