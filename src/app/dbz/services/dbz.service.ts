import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
//Se instala este paquete de uuid para tener una forma de generar id más
//rapidos, se pone V4 porque es la version que va a utilizar
import { v4 as uuid }from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
];

addCharacter(character: Character):void{

  /*
  Se crea un objeto para que cuando se cree un personaje este se cree con
  todos sus parametros.
  Se utilizan los ... para que este traiga todos los parametros del
  objeto
  */
 const newCharacter: Character = {id: uuid(), ...character};
//Se crea la función para poder agregar el persona
this.characters.push(newCharacter);
//En esta parte guarda cuando se agrega el personaje
//console.log('MainPage');
//console.log(character);

  }

//Se crea este metodo para eliminar un personaje
//onDeleteCharacter( index : number){
//  this.characters.splice( index,1 );
//}
//Se crea este metodo para eliminar un personaje por el id
deleteCharacterById( id: string ){
  this.characters = this.characters.filter( character => character.id !== id);
}
}
