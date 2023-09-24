import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/Hero.module';
import { DbzModule } from './dbz/dbz.module';
//Aca en este modulo se pone los diferenters components que se crean para que tengan
//interacción
@NgModule({
  declarations: [
    AppComponent,

  ],
  //Si se crean modulos van en los imports
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
