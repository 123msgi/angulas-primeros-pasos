//Se crea este modulo
import { NgModule } from '@angular/core';
import { CounterComponent } from './components/Counter/counter.component';
@NgModule({

  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule{}
