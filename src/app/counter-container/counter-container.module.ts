import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CounterContainerComponent } from './counter-container.component';
import { CounterService } from 'src/services/counter.service';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [CounterContainerComponent],
  exports: [CounterContainerComponent], 
  providers: [CounterService]
})
export class CounterContainerComponentModule {}
