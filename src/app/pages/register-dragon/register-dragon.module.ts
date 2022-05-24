import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterDragonRoutingModule } from './register-dragon-routing.module';
import { RegisterDragonComponent } from './register-dragon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RegisterDragonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterDragonRoutingModule,
    SharedModule
  ]
})
export class RegisterDragonModule { }
