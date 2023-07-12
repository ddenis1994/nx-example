import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'kyobix-task-editing',
  templateUrl: './task-editing.component.html',
  styleUrls: ['./task-editing.component.scss'],
})
export class TaskEditingComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  navigateToProcess() {
    return this.router.navigate(['/process'], { skipLocationChange: true });
  }

  ngOnInit(): void {
    this.navigateToProcess();
  }
}
