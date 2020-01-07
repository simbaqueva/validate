import { Component, OnInit } from '@angular/core';
import { SinEspacios } from './validacion.directive';
import { FormGroup,FormControl, AbstractControl,  Validators, FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from './validation.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'sd-validacion',
  templateUrl: 'validacion.component.html',
  styleUrls: ['validacion.component.css'],
  providers:[ValidationService]
})
export class ValidacionComponent  {



userForm:FormGroup;
 
  constructor(private formBuilder: FormBuilder){
    // Definimos el objeto usuario, vació inicialmente (necesario)
    this.userForm = this.formBuilder.group({
        Name: ['', Validators.required],
        // email: ['', [Validators.required, ValidationService.emailValidator]],
        // profile: ['', [Validators.required, Validators.minLength(10)]]


    });

  }
    onSubmit(){
   if (this.userForm.dirty && this.userForm.valid) {
     alert(`Name: ${this.userForm.value.name}`);
   }
  }
}