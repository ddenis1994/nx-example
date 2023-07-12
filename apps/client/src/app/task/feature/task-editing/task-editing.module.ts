import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskEditingComponent } from './task-editing.component';
import { TaskEditingRoutingModule } from './task-editing-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskEditingComponent],
  imports: [CommonModule, TaskEditingRoutingModule, FormsModule],
  exports: [TaskEditingComponent],
})
export class TaskEditingModule {}
