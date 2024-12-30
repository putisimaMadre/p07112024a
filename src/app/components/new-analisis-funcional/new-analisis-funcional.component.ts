import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatosGenerales } from '../../models/datos-generales';
import { AnalisisFuncionalService } from '../../services/analisis-funcional.service';
import { AnalisisFuncional } from '../../models/analisis-funcional';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-analisis-funcional',
  templateUrl: './new-analisis-funcional.component.html',
  styleUrl: './new-analisis-funcional.component.css'
})
export class NewAnalisisFuncionalComponent implements OnInit{
  @Input() pacienteId?: any 
  @Input() datosGenerales?: any

  actividadConmisuralArray: number[] = [1, 2, 3];
  actividadConmisuralArrayBool: boolean[] = [false, false, false];

  actividadLingualArray: number[] = [1, 3, 4];
  actividadLingualArrayBool: boolean[] = [false, false, false];

  labioSuperiorArray: number[] = [1, 5, 6];
  labioSuperiorArrayBool: boolean[] = [false, false, false];

  labioInferiorArray: number[] = [1, 5, 6];
  labioInferiorArrayBool: boolean[] = [false, false, false];

  maseteroArray: number[] = [1, 5, 6];
  maseteroArrayBool: boolean[] = [false, false, false];

  mentonianoArray: number[] = [1, 5, 6];
  mentonianoArrayBool: boolean[] = [false, false, false];

  respiracionArray: number[] = [7, 8, 10];
  respiracionArrayBool: boolean[] = [false, false, false];

  deglucionArray: number[] = [1, 9, 11];
  deglucionArrayBool: boolean[] = [false, false, false];

  completadoAnalisisFuncional = false;
  analisisFuncional?: any

  constructor(
    private formBuilder: FormBuilder,
    private analisisFuncionalService: AnalisisFuncionalService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.analisisFuncionalService.getAnalisisFuncionalEdit(id)),
    )
    .subscribe(analisisFuncional => {
      this.editAnalisisFuncional(analisisFuncional)
      return;
    })
  }

    analisisFuncionalForm: FormGroup = this.formBuilder.group({
      "actividadComisural": [],
      "actividadLingual": [],
      "labioSuperior": [],
      "labioInferior": [],
      "masetero": [],
      "mentoniano": [],
      "respiracion": [],
      "deglucion": [],
      "idDatosGenerales": [this.pacienteId]
    })

    saveAnalisisFuncional(){
      this.analisisFuncionalForm.controls['idDatosGenerales'].setValue(this.pacienteId)
      this.analisisFuncionalService.postAnalisisFuncional(this.analisisFuncionalForm.value).subscribe(dato => {
        console.log(dato)
        this.completadoAnalisisFuncional = true
      })
    }
  
    updateAnalisisFuncional(){
      this.analisisFuncionalForm.controls['idDatosGenerales'].setValue(this.datosGenerales.id)
      this.analisisFuncionalService.updateAnalisisFuncional(this.analisisFuncionalForm.value).subscribe(dato => {
        console.log(dato)
        this.completadoAnalisisFuncional = true
      })
     console.log(this.analisisFuncionalForm.value)
    }

    editAnalisisFuncional(analisisFuncional: AnalisisFuncional){
        const keys = Object.keys(analisisFuncional);
        keys.forEach((key) => {
          if(this.isKey(analisisFuncional, key)){
            this.analisisFuncional = analisisFuncional[key];
            
            if(this.analisisFuncional.actividadComisural){
              for (let index = 0; index <= this.actividadConmisuralArrayBool.length; index++) {
                if(this.actividadConmisuralArray[index] == this.analisisFuncional.actividadComisural){
                  this.actividadConmisuralArrayBool[index] = true
                }
                if(this.datosGenerales.id != null){
                  this.analisisFuncionalForm.controls['actividadComisural'].setValue(this.actividadConmisuralArray[index])
                }
              }
            }
            if(this.analisisFuncional.actividadLingual){
              for (let index = 0; index <= this.actividadLingualArrayBool.length; index++) {
                if(this.actividadLingualArray[index] == this.analisisFuncional.actividadLingual){
                  this.actividadLingualArrayBool[index] = true
                }
                if(this.datosGenerales.id != null){
                  this.analisisFuncionalForm.controls['actividadLingual'].setValue(this.actividadLingualArray[index])
                }
              }
            }
            if(this.analisisFuncional.labioSuperior){
              for (let index = 0; index <= this.labioSuperiorArrayBool.length; index++) {
                if(this.labioSuperiorArray[index] == this.analisisFuncional.labioSuperior){
                  this.labioSuperiorArrayBool[index] = true
                }
                if(this.datosGenerales.id != null){
                  this.analisisFuncionalForm.controls['labioSuperior'].setValue(this.labioSuperiorArray[index])
                }
              }
            }
            if(this.analisisFuncional.labioInferior){
              for (let index = 0; index <= this.labioInferiorArrayBool.length; index++) {
                if(this.labioInferiorArray[index] == this.analisisFuncional.labioInferior){
                  this.labioInferiorArrayBool[index] = true
                }
                if(this.datosGenerales.id != null){
                  this.analisisFuncionalForm.controls['labioInferior'].setValue(this.labioInferiorArray[index])
                }
              }
            }
            if(this.analisisFuncional.masetero){
              for (let index = 0; index <= this.maseteroArrayBool.length; index++) {
                if(this.maseteroArray[index] == this.analisisFuncional.masetero){
                  this.maseteroArrayBool[index] = true
                }
                if(this.datosGenerales.id != null){
                  this.analisisFuncionalForm.controls['masetero'].setValue(this.maseteroArray[index])
                }
              }
            }
            if(this.analisisFuncional.mentoniano){
              for (let index = 0; index <= this.mentonianoArrayBool.length; index++) {
                if(this.mentonianoArray[index] == this.analisisFuncional.mentoniano){
                  this.mentonianoArrayBool[index] = true
                }
                if(this.datosGenerales.id != null){
                  this.analisisFuncionalForm.controls['mentoniano'].setValue(this.mentonianoArray[index])
                }
              }
            }
            if(this.analisisFuncional.respiracion){
              for (let index = 0; index <= this.respiracionArrayBool.length; index++) {
                if(this.respiracionArray[index] == this.analisisFuncional.respiracion){
                  this.respiracionArrayBool[index] = true
                }
                if(this.datosGenerales.id != null){
                  this.analisisFuncionalForm.controls['respiracion'].setValue(this.respiracionArray[index])
                }
              }
            }
            if(this.analisisFuncional.deglucion){
              for (let index = 0; index <= this.deglucionArrayBool.length; index++) {
                if(this.deglucionArray[index] == this.analisisFuncional.deglucion){
                  this.deglucionArrayBool[index] = true
                }
                if(this.datosGenerales.id != null){
                  this.analisisFuncionalForm.controls['deglucion'].setValue(this.deglucionArray[index])
                }
              }
            }
    
          }
        })
      }

      isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
        return k in x;
      }
}
