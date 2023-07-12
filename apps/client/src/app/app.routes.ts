import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./task/feature/task-editing/task-editing.module').then(
        (m) => m.TaskEditingModule
      ),
  },
];
