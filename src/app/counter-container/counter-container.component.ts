import { Component, OnInit, Input } from '@angular/core';
import { Counter } from 'src/entities/counter';
import { CounterService } from 'src/services/counter.service';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.scss'],
})
export class CounterContainerComponent implements OnInit {
  @Input() counter: Counter;

  constructor(private counterService: CounterService) { }

  ngOnInit() {}

  increment() {
    this.counter.count++;
    this.counterService.update(this.counter);
  }

  decrement() {
    this.counter.count--;
    this.counterService.update(this.counter);
  }

}
