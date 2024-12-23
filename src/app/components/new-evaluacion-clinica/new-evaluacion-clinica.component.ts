import { afterNextRender, Component, inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EvaluacionClinicaService } from '../../services/evaluacion-clinica.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

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
  @Input() edad: number = 0;
  @Input() sexo: string = "";
  @Input() paciente: string = "";
  @Input() pacienteId?: any
  @Input() datosGenerales?: any
  
  fechaHoy: number = Date.now();
  completadoEvaluacionClinica = false

  constructor(
    private formBuilder: FormBuilder,
    private evaluacionClinicaService: EvaluacionClinicaService
  ){}

  ngOnInit(): void {
  }

  evaluacionClinicaForm: FormGroup = this.formBuilder.group({
    "motivo": [""],
    "observaciones": [""],
    "exploracion": [""],
    "idDatosGenerales": [this.pacienteId]
  })

  saveEvaluacionClinica(){
    this.evaluacionClinicaForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.evaluacionClinicaService.postEvaluacionClinica(this.evaluacionClinicaForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoEvaluacionClinica = true
    })
  }

}
