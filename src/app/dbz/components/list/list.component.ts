import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
/*Se pone el decorador @Input para indicar que se va a recibir la
lista desde la parte de afuera, esta lista viene desde el main-page */
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];
//Se crea un evento para poder emitir cuando toquen el boton de eliminar
@Output()
onDelete: EventEmitter<string> = new EventEmitter();
 //Se crea una propiedad para que elimine el persona con el boton delte
 onDeleteCharacter( id?: string):void{
  //Se llama al evento de onDelete para saber cual es el persnaje que se va
  //a borrar
  if ( !id ) return;
  this.onDelete.emit( id );
  //console.log(index);
 }
}
