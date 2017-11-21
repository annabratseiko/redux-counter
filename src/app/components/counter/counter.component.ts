import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Counter } from '../../models/counter.model';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input()
  counter: Counter;

  @Output()
  onIncrement: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  onDecrement: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  onReset: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}
}
