import { Injectable } from "@angular/core";
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid"

@Injectable({
  providedIn: 'root'
})

export class DbzService{
  public characters:Character [] = [{
    id: uuid(),
    name: 'Krilin',
    power: 5500
},
{
    id: uuid(),
    name: 'Goku',
    power: 10000
},
{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
}];

onNewCharacter(Character:Character):void{
    const newCharacter: Character = {
      id:uuid(),
      ...Character
    }
    console.log(newCharacter)
    this.characters.push(newCharacter)
}

deleteCharacterById(id:string){
    this.characters = this.characters.filter(c => c.id !== id)
}
}
