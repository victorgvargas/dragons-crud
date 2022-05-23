import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterDragonRoutingModule } from './register-dragon-routing.module';
import { RegisterDragonComponent } from './register-dragon.component';


@NgModule({
  declarations: [
    RegisterDragonComponent
  ],
  imports: [
    CommonModule,
    RegisterDragonRoutingModule
  ]
})
export class RegisterDragonModule { }
