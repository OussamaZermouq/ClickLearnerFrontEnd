import { NgModule, OnInit } from '@angular/core';
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
import { DevoirComponent } from './devoir/devoir.component';
import { DataView, DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CourseoverviewComponent } from './courseoverview/courseoverview.component';
import { Image } from 'primeng/image';
import { AccordionModule } from 'primeng/accordion';
import { CreatecourseformComponent } from './createcourseform/createcourseform.component';
import { StepsModule } from 'primeng/steps';
import { TextareaModule } from 'primeng/textarea';

import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { UploadresourcestocoursComponent } from './uploadresourcestocours/uploadresourcestocours.component';

import { FileUpload } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { ProgressBar } from 'primeng/progressbar';
import { InputNumberModule } from 'primeng/inputnumber';


import {CloudinaryModule} from '@cloudinary/ng';
import { LoginformComponent } from './loginform/loginform.component';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProgresscardComponent,
    DevoirduecardComponent,
    UpcomingexamsComponent,
    DevoirComponent,
    CourseoverviewComponent,
    CreatecourseformComponent,
    UploadresourcestocoursComponent,
    LoginformComponent,
  ],
  imports: [
    CommonModule,
    ToggleSwitchModule,
    CardModule,
    FormsModule,
    MegaMenuModule,
    AvatarModule,
    ProgressBarModule,
    ToastModule,
    DatePicker,
    TagModule,
    DataView,
    AccordionModule,
    InputTextModule,
    SelectModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    StepsModule,
    Image,
    FileUploadModule,
    TextareaModule,
    EditorModule,
    FileUpload,
    ButtonModule,
    BadgeModule,
    ProgressBar,
    ToastModule,
    CommonModule,
    InputNumberModule,
    CloudinaryModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProgresscardComponent,
    CardModule,
    DevoirduecardComponent,
    UpcomingexamsComponent,
    DevoirComponent,
    CourseoverviewComponent,
    CreatecourseformComponent,
    UploadresourcestocoursComponent,
    LoginformComponent
  ], // Export here
})
export class SharedModule {

}
