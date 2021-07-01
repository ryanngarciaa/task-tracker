import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() delete: EventEmitter<Task> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task): void {
    this.delete.emit(task);
  }

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }
}
