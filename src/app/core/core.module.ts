import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureComponent } from './layout/structure/structure.component';



@NgModule({
  declarations: [
    StructureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StructureComponent
  ]
})
export class CoreModule { }
