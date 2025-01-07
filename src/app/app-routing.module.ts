import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { MessageService } from 'primeng/api';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path: 'devoirs', loadChildren: () => import('./devoirs/devoirs.module').then(m => m.DevoirsModule) },
  { path: 'courses/coursedetails/:id', loadChildren: () => import('./courses/coursedetails/coursedetails.module').then(m => m.CoursedetailsModule) },
  { path: 'courses/createcourse', loadChildren: () => import('./courses/createcourse/createcourse.module').then(m => m.CreatecourseModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'courses/course/:id', loadChildren: () => import('./course/course.module').then(m => m.CourseModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes), MessageService],
})
export class AppRoutingModule {}
