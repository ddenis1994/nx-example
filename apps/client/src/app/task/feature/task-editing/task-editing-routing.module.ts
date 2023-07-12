import { RouterModule, Routes } from '@angular/router';
import { TaskEditingComponent } from './task-editing.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TaskEditingComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../process/process.module').then((m) => m.ProcessModule),
      },
      {
        path: 'process',
        loadChildren: () =>
          import('../process/process.module').then((m) => m.ProcessModule),
      },
      {
        path: 'scheduling',
        loadChildren: () =>
          import('../scheduling/scheduling.module').then(
            (m) => m.SchedulingModule
          ),
      },
      {
        path: 'distribution',
        loadChildren: () =>
          import('../distribution/distribution.module').then(
            (m) => m.DistributionModule
          ),
      },
      {
        path: 'output',
        loadChildren: () =>
          import('../output/output.module').then((m) => m.OutputModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskEditingRoutingModule {}
