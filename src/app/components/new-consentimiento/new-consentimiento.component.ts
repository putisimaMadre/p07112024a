import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsentimientoInformadoService } from '../../services/consentimiento-informado.service';
import { DatosGenerales } from '../../models/datos-generales';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConsentimientoInformado } from '../../models/consentimiento-informado';

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
  concentimientoInformado: any
  edit: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private consentimientoInformadoService: ConsentimientoInformadoService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
        this.activatedRoute.params
            .pipe(
              switchMap(({id}) => this.consentimientoInformadoService.getConsentimientoInformadoEdit(id)),
            )
            .subscribe(concentimientoInformado => {
              this.editConcentimientoI(concentimientoInformado)
              return;
            })
  }

  editConcentimientoI(concentimientoInformado: ConsentimientoInformado){
    const keys = Object.keys(concentimientoInformado);
        keys.forEach((key) => {
          if(this.isKey(concentimientoInformado, key)){
            this.concentimientoInformado = concentimientoInformado[key];
            if(this.concentimientoInformado.id != undefined){
              this.edit = true
            }
            this.consentimientoInformadoForm.controls['nombrePersona'].setValue(this.concentimientoInformado.nombrePersona)
            this.consentimientoInformadoForm.controls['odontologo'].setValue(this.concentimientoInformado.odontologo)
          }
        })
  }

  isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
    return k in x;
  }

  consentimientoInformadoForm: FormGroup = this.formBuilder.group({
    "nombrePersona": [],
    "odontologo": [],
    "idDatosGenerales": [this.pacienteId]
  })

  /*odontologoControl = new FormControl<Odontologo | null>(null, Validators.required);
  odontologos: Odontologo[] = [
    {valor: 'Etbaal Corona', valorEnVista: 'Etbaal Corona'},
    {valor: 'Rosa Martinez', valorEnVista: 'Rosa Martinez'},
    {valor: 'Araceli Gomez', valorEnVista: 'Araceli Gomez'},
  ];*/

  saveConsentimientoInformado(){
    this.pacienteId = this.datosGenerales.id
    this.consentimientoInformadoForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.consentimientoInformadoService.postConsentimientoInformado(this.consentimientoInformadoForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoConsentimientoInformado = true
    })
  }

  updateAnalisisFacial(){
    this.pacienteId = this.datosGenerales.id
    this.consentimientoInformadoForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.consentimientoInformadoService.updateConsentimientoInformado(this.consentimientoInformadoForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoConsentimientoInformado = true
    })
  }

}
