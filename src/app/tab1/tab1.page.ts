import { Component } from '@angular/core';
import { Counter } from 'src/entities/counter';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private static GRID_COLS = 2;

  counters: Counter[]; 
  countersGrid: any[];

  constructor() {
    this.counters = [
      {
        id: 1,
        count: 1,
        title: '',
        description: 'Test',
        color: 'blue'
      },
      {
        id: 2,
        count: 1,
        title: '',
        description: 'Test',
        color: 'green'
      }
    ]
    this.countersGrid = [];
    for (let i = 0; i < this.counters.length; i += Tab1Page.GRID_COLS) {
      let row = [];
      for (let j = i; j < i + Tab1Page.GRID_COLS; j++) {
        row.push(this.counters[j]);
      }      
      this.countersGrid.push(row);
    }
  }

}
