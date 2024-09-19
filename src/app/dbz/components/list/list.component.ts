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
  public onDeletedId:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index:any):void{
    this.onDeletedId.emit(index);
  }
}
