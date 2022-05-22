import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    ListComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
