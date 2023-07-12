import { Route, RouterModule, Routes } from '@angular/router';
import { TaskEditingComponent } from './task-editing.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TaskEditingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskEditingRoutingModule {}
