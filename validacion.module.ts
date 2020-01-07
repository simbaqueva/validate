import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm }    from '@angular/forms';
import { ValidacionComponent } from './validacion.component';
import { SinEspacios } from './validacion.directive';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, AbstractControl,  Validators, FormBuilder } from  '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [FormsModule,ReactiveFormsModule,FormGroup,FormGroup,FormControl,Validators,FormBuilder ],
  declarations: [SinEspacios,ValidacionComponent],
  exports: [SinEspacios,ValidacionComponent],
  providers: [  ],

})
export class ValidacionModule { }
