import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDragonComponent } from './register-dragon.component';

const routes: Routes = [{ path: '', component: RegisterDragonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterDragonRoutingModule { }
