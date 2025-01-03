import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsentimientoInformadoService } from '../../services/consentimiento-informado.service';
import { DatosGenerales } from '../../models/datos-generales';

interface Odontologo {
  valor: string;
  valorEnVista: string;
}

@Component({
  selector: 'app-new-consentimiento',
  templateUrl: './new-consentimiento.component.html',
  styleUrl: './new-consentimiento.component.css'
})

export class NewConsentimientoComponent implements OnInit {
  @Input() datosGenerales!: DatosGenerales
  pacienteId:number = 0

  completadoConsentimientoInformado = false

  constructor(
    private formBuilder: FormBuilder,
    private consentimientoInformado: ConsentimientoInformadoService
  ){}

  ngOnInit(): void {
    this.pacienteId = this.datosGenerales.id
  }

  consentimientoInformadoForm: FormGroup = this.formBuilder.group({
    "nombrePersona": [],
    "odontologo": [],
    "idDatosGenerales": [this.pacienteId]
  })

  odontologoControl = new FormControl<Odontologo | null>(null, Validators.required);
  odontologos: Odontologo[] = [
    {valor: 'Etbaal Corona', valorEnVista: 'Etbaal Corona'},
    {valor: 'Rosa Martinez', valorEnVista: 'Rosa Martinez'},
    {valor: 'Araceli Gomez', valorEnVista: 'Araceli Gomez'},
  ];

  saveConsentimientoInformado(){
    this.consentimientoInformadoForm.controls['odontologo'].setValue(this.odontologoControl.value?.valorEnVista)
    this.consentimientoInformadoForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.consentimientoInformado.postConsentimientoInformado(this.consentimientoInformadoForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoConsentimientoInformado = true
    })
  }

}
