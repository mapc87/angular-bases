import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: 
  [
    MainPageComponent, 
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
] 
})
export class DbzModule { }
