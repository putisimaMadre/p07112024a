import { Component ,model} from '@angular/core';
import { DatosGeneralesService } from '../../services/datos-generales.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-new-datos-generales',
  templateUrl: './new-datos-generales.component.html',
  styleUrl: './new-datos-generales.component.css',
  providers: [provideNativeDateAdapter()],
})
export class NewDatosGeneralesComponent {

  displayedColumns: string[] = ['madre', 'padre'];

  fechaHoy: number = Date.now();
  completadoDatosGenerales = false
  patologia = false
  paciente: string = ""

  constructor(private datosGeneralesService: DatosGeneralesService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  formDatosGenerales: FormGroup = this.formBuilder.group({
    nombre: ["", Validators.required],
    domicilio: ["", Validators.required],
    entidad: ["", Validators.required],
    ocupacion: ["", Validators.required],
    escolaridad: ["", Validators.required],
    fechaNacimiento: ["", Validators.required],
    edad: ["", Validators.required],
    sexo: ["", Validators.required],
    lugarNacimiento: ["", Validators.required],
    estadoCivil: ["", Validators.required],
  })

  diabetesForm: FormGroup = this.formBuilder.group({
    "madre": false,
    "abuelaM": false,
    "abueloM": false,
    "otrosM": false,
    "padre": false,
    "abuelaP": false,
    "abueloP": false,
    "hermanosP": false,
    "otrosP": false
  })

  savePatalogias(): void {
    console.log(this.diabetesForm.value);
  }

  saveDatosGenerales(): void {
    console.log(this.formDatosGenerales.value)
    this.datosGeneralesService
    .postDatosGenerales(this.formDatosGenerales.value)
    .subscribe(dato => {
      this.completadoDatosGenerales = true
      this.paciente = dato.nombre
    })
  }
  //poner el segundo cuestionario
  //poner una bandera para cuando se complete el segundo cuestionario
  //poner los combobox al primer cuestionario
}
