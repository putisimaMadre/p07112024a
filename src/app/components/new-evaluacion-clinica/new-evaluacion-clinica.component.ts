import { afterNextRender, Component, inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EvaluacionClinicaService } from '../../services/evaluacion-clinica.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { EvaluacionClinica } from '../../models/evaluacion-clinica';
import { DatosGenerales } from '../../models/datos-generales';

@Component({
  selector: 'app-new-evaluacion-clinica',
  templateUrl: './new-evaluacion-clinica.component.html',
  styleUrl: './new-evaluacion-clinica.component.css'
})
export class NewEvaluacionClinicaComponent implements OnInit{
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
  @Input() datosGenerales!: DatosGenerales;
  @Input() paciente!: string;
  //paciente:string = ''
  pacienteId: number = 0
  edit: boolean = false
  
  //fechaHoy: number = Date.now();
  completadoEvaluacionClinica = false
  evaluacionClinica?: any;

  constructor(
    private formBuilder: FormBuilder,
    private evaluacionClinicaService: EvaluacionClinicaService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.evaluacionClinicaService.getEvaluacionClinicaEdit(id)),
    )
    .subscribe(evaluacionC => {
      const keys = Object.keys(evaluacionC);
      keys.forEach((key) => {
        if(this.isKey(evaluacionC, key)){
          this.evaluacionClinica = evaluacionC[key]
          if(this.evaluacionClinica.id != undefined){
            this.edit = true
          }
          this.evaluacionClinicaForm.setValue({
            motivo: this.evaluacionClinica.motivo,
            observaciones: this.evaluacionClinica.observaciones,
            exploracion: this.evaluacionClinica.exploracion,
            idDatosGenerales: this.evaluacionClinica.idDatosGenerales
          })
        }
      })
    })
  }

  isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
    return k in x;
  }

  evaluacionClinicaForm: FormGroup = this.formBuilder.group({
    "motivo": [""],
    "observaciones": [""],
    "exploracion": [""],
    "idDatosGenerales": [this.pacienteId]
  })

  saveEvaluacionClinica(){
    this.paciente = this.datosGenerales.nombre
    this.pacienteId = this.datosGenerales.id
    this.evaluacionClinicaForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.evaluacionClinicaService.postEvaluacionClinica(this.evaluacionClinicaForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoEvaluacionClinica = true
    })
  }

  updateEvaluacionClinica(){
    this.paciente = this.datosGenerales.nombre
    this.pacienteId = this.datosGenerales.id
    this.evaluacionClinicaForm.controls['idDatosGenerales'].setValue(this.datosGenerales.id)
    this.evaluacionClinicaService.updateEvaluacionClinica(this.evaluacionClinicaForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoEvaluacionClinica = true
    })
   console.log(this.evaluacionClinicaForm.value)
  }

}
