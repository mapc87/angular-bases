import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: 'list.component.html'
})

export class ListComponent { 
  @Input() 
  public characterList:Character[]=[]

  @Output()
  public onDeletedId:EventEmitter<number> = new EventEmitter();
  
  onDeleteCharacter(index:number):void{
    this.onDeletedId.emit(index);
  }
}
