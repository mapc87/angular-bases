import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent{
  
    public characters:Character [] = [{
        name: 'Krilin',
        power: 5500
    },
    {
        name: 'Goku',
        power: 10000
    },
    {
        name: 'Vegeta',
        power: 7500
    }];

    onNewCharacter(Character:Character):void{
        console.log(Character)
        this.characters.push(Character)
    }

    deleteCharacter(index:any){
        console.log(index)
        this.characters.splice(index,1)
    }
}
