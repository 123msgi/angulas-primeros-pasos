import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  /*
  Se crea la instancia del emisor de eventos
  Con el decorardo @Output lo que se hace es que lo que recibe se muestre
  o se guarde en otro componente o en una pagina
  */
 @Output()
 public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };
  emitCharacter():void{

    debugger;
    console.log(this.character);
    //Esta validación se crea para que no permita colocar nombre vacios
    if ( this.character.name.length === 0 ) return;
    //Esta opción se pone porque para que con la propiedad de emitir
    //lo valide esta parte de emitir caracter que es el encargado de
    //de agregar los personajes
    this.onNewCharacter.emit(this.character);

    /*
    Se crea esta parte para que cuanod se de en el boton agregar se
    limpie la información que esta en los inputs
     */
    this.character = {name: '', power:0};
  }

}
