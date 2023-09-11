import { Component } from '@angular/core';

//De esta manera se le indica a angular que pase de clase a un componente
@Component({
  //Crear el template, siempre el decorador necesita un template y un selector
  //Una vez creado un componente se debe poner en un modulo, en este caso se tiene que
  //poner el archivo app.modules
  /*
  ` este simbolo sirve para tner un string multiliena como codigo html
  */
  selector: 'app-counter',
  template: `
  <h3>Contador: {{ counter }}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  `
})
export class CounterComponent {
  public title:string = 'Mi primera app de Angular';
  public counter:number = 10;
  //Metodo
  increaseBy( value:number):void{
    this.counter += value;
  };
  resetCounter():void{
    this.counter = 10;
  };
}
