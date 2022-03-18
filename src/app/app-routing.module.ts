import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './personal/projects/projects.component';
import { TimelineComponent } from './personal/timeline/timeline.component';

const routes: Routes = [
  {path:'', component:AboutComponent, pathMatch:'full'},
  {path:'timeline', component:TimelineComponent},
  {path:'projects', component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
