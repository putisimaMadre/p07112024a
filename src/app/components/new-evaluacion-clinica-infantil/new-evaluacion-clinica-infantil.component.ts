import { afterNextRender, Component, inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EvaluacionClinicaInfantilService } from '../../services/evaluacion-clinica-infantil.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DatosGenerales } from '../../models/datos-generales';

@Component({
  selector: 'app-new-evaluacion-clinica-infantil',
  templateUrl: './new-evaluacion-clinica-infantil.component.html',
  styleUrl: './new-evaluacion-clinica-infantil.component.css'
})
export class NewEvaluacionClinicaInfantilComponent implements OnInit{
  //========ESTO ES PARA EL TEXT AREA =======//
    private _injector = inject(Injector);
    @ViewChild('autosize')
    autosize!: CdkTextareaAutosize;
  
    triggerResize() {
      // Wait for content to render, then trigger textarea resize.
      afterNextRender(
        () => {
          this.autosize.resizeToFitContent(true);
        },
        {
          injector: this._injector,
        },
      );
    }
  //========ESTO ES PARA EL TEXT AREA =======//
  @Input() datosGenerales!: DatosGenerales
  pacienteId = this.datosGenerales.id
  paciente = this.datosGenerales.nombre

  completadoEvaluacionClinicaInfantil = false
  evaluacionClinicaInfantil?: any

  constructor(
    private formBuilder: FormBuilder,
    private evaluacionClinicaInfantilService: EvaluacionClinicaInfantilService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.evaluacionClinicaInfantilService.getAnalisisFuncionalEdit(id)),
    )
    .subscribe(evaluacionC => {
      const keys = Object.keys(evaluacionC);
      keys.forEach((key) => {
        if(this.isKey(evaluacionC, key)){
          this.evaluacionClinicaInfantil = evaluacionC[key]
          this.evaluacionClinicaInfantilForm.setValue({
            motivo: this.evaluacionClinicaInfantil.motivo,
            observaciones: this.evaluacionClinicaInfantil.observaciones,
            exploracion: this.evaluacionClinicaInfantil.exploracion,
            idDatosGenerales: this.evaluacionClinicaInfantil.idDatosGenerales
          })
        }
      })
    })
  }

  isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
    return k in x;
  }

  evaluacionClinicaInfantilForm: FormGroup = this.formBuilder.group({
    "motivo": [""],
    "observaciones": [""],
    "exploracion": [""],
    "idDatosGenerales": [this.pacienteId]
  })

    saveEvaluacionClinicaInfantil(){
      this.evaluacionClinicaInfantilForm.controls['idDatosGenerales'].setValue(this.pacienteId)
      this.evaluacionClinicaInfantilService.postEvaluacionClinicaInfantil(this.evaluacionClinicaInfantilForm.value).subscribe(dato => {
        console.log(dato)
        this.completadoEvaluacionClinicaInfantil = true
      })
    }

    updateEvaluacionClinicaInfantil(){
      this.evaluacionClinicaInfantilForm.controls['idDatosGenerales'].setValue(this.datosGenerales.id)
      this.evaluacionClinicaInfantilService.updateEvaluacionClinicaInfantil(this.evaluacionClinicaInfantilForm.value).subscribe(dato => {
        console.log(dato)
        this.completadoEvaluacionClinicaInfantil = true
      })
     console.log(this.evaluacionClinicaInfantilForm.value)
    }
}
