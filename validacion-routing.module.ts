import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ValidacionComponent } from './validacion.component';
import { SinEspacios } from './validacion.directive';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'validacion', component:ValidacionComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ValidacionRoutingModule { }