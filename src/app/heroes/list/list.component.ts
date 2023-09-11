import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?: string;
  //Se crea un metodo, se pone void porque no devuelve nada
  //Se crea para la función de borrar un heroe
  removeLastHero():void{
     this.deleteHero = this.heroNames.pop();
  }

}
