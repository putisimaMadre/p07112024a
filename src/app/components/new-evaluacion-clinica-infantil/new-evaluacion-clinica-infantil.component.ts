import { afterNextRender, Component, inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EvaluacionClinicaInfantilService } from '../../services/evaluacion-clinica-infantil.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

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
  @Input() paciente: string = "";
  @Input() pacienteId?: any
  @Input() datosGenerales?: any
  completadoEvaluacionClinicaInfantil = false

  constructor(private formBuilder: FormBuilder,
    private evaluacionClinicaInfantilService: EvaluacionClinicaInfantilService
  ){}

  ngOnInit(): void {
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
}
