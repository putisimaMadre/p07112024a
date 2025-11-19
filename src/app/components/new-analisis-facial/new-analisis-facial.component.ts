import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnalisisFacial } from '../../models/analisis-facial';
import { AnalisisFacialService } from '../../services/analisis-facial.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DatosGenerales } from '../../models/datos-generales';

@Component({
  selector: 'app-new-analisis-facial',
  templateUrl: './new-analisis-facial.component.html',
  styleUrl: './new-analisis-facial.component.css'
})
export class NewAnalisisFacialComponent implements OnInit{
  @Input() datosGenerales!: DatosGenerales

  pacienteId:number = 0
  completadoAnalisisFacial = false;
  analisisFacial?: any
  edit: boolean = false

  perfilArray: number[] = [4, 5, 6];
  asimetriaArray: number[] = [7, 8, 9];
  alturaFacialEquilibradaArray: number[] = [10, 11, 12];
  anchoFacialEquilibradaArray: number[] = [13, 14, 15];
  perfilMaxilarArray: number[] = [16, 17, 18];
  perfilMandibularArray: number[] = [19, 20, 21];
  surcoLabioMentonArray: number[] = [22, 23, 24];
  labiosReposoArray: number[] = [25, 26];
  patronFacialArray: number[] = [1, 2, 3];

  analisisFacialArrayBool: boolean[] = [false, false, false]
  perfilArrayBool: boolean[] = [false, false, false]
  asimetriaArrayBool: boolean[] = [false, false, false];
  alturaFacialEquilibradaArrayBool: boolean[] = [false, false, false];
  anchoFacialEquilibradaArrayBool: boolean[] = [false, false, false];
  perfilMaxilarArrayBool: boolean[] = [false, false, false];
  perfilMandibularArrayBool: boolean[] = [false, false, false];
  surcoLabioMentonArrayBool: boolean[] = [false, false, false];
  labiosReposoArrayBool: boolean[] = [false, false];

  constructor(
    private formBuilder: FormBuilder,
    private analisisFacialService: AnalisisFacialService,
    private activatedRoute: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.analisisFacialService.getAnalisisFacialEdit(id)),
        )
        .subscribe(analisisFacial => {
          this.editAnalisisFacial(analisisFacial)
          //this.editPerfil(analisisFacial)
          return;
        })
  }

    analisisFacialForm: FormGroup = this.formBuilder.group({
      "patronFacial": [],
      "perfil": [],
      "asimetria": [],
      "alturaFE": [],
      "anchuraFE": [],
      "perfilMaxilar": [],
      "perfilMandibular": [],
      "surcoLM": [],
      "labiosEr": [],
      "idDatosGenerales": [this.pacienteId]
    })

      editAnalisisFacial(analisisFacial: AnalisisFacial){
        const keys = Object.keys(analisisFacial);
        keys.forEach((key) => {
          if(this.isKey(analisisFacial, key)){
            this.analisisFacial = analisisFacial[key];
            if(this.analisisFacial.id != undefined){
              this.edit = true
            }
            
            if(this.analisisFacial.patronFacial){
              for (let index = 0; index <= this.analisisFacialArrayBool.length; index++) {
                if(this.patronFacialArray[index] == this.analisisFacial.patronFacial){
                  this.analisisFacialArrayBool[index] = true
                }
                if(this.pacienteId != null){
                  //this.patronFacialArray[index] = this.analisisFacial.patronFacial
                  this.analisisFacialForm.controls['patronFacial'].setValue(this.patronFacialArray[index])
                }
              }
            }
            if(this.analisisFacial.perfil){
              for (let index = 0; index <= this.perfilArrayBool.length; index++) {
                  if(this.perfilArray[index] == this.analisisFacial.perfil){
                    this.perfilArrayBool[index] = true
                  }
                  if(this.pacienteId != null){
                    //this.perfilArray[index] = this.analisisFacial.perfil
                    this.analisisFacialForm.controls['perfil'].setValue(this.perfilArray[index])
                  }
                }
            }
            if(this.analisisFacial.asimetria){
              for (let index = 0; index <= this.asimetriaArrayBool.length; index++) {
                if(this.asimetriaArray[index] == this.analisisFacial.asimetria){
                  this.asimetriaArrayBool[index] = true
                }
                if(this.pacienteId != null){
                  //.asimetriaArray[index] = this.analisisFacial.asimetria
                  this.analisisFacialForm.controls['asimetria'].setValue(this.asimetriaArray[index])
                }
              }
            }
          if(this.analisisFacial.alturaFE){
            for (let index = 0; index <= this.alturaFacialEquilibradaArrayBool.length; index++) {
              if(this.alturaFacialEquilibradaArray[index] == this.analisisFacial.alturaFE){
                this.alturaFacialEquilibradaArrayBool[index] = true
              }
              if(this.pacienteId != null){
                //this.alturaFacialEquilibradaArray[index] = this.analisisFacial.alturaFE
                this.analisisFacialForm.controls['alturaFE'].setValue(this.alturaFacialEquilibradaArray[index])
              }
            }
          }
          if(this.analisisFacial.anchuraFE){
            for (let index = 0; index <= this.anchoFacialEquilibradaArrayBool.length; index++) {
              if(this.anchoFacialEquilibradaArray[index] == this.analisisFacial.anchuraFE){
                this.anchoFacialEquilibradaArrayBool[index] = true
              }
              if(this.pacienteId != null){
                //this.anchoFacialEquilibradaArray[index] = this.analisisFacial.anchuraFE
                this.analisisFacialForm.controls['anchuraFE'].setValue(this.anchoFacialEquilibradaArray[index])
              }
            }
          }
          if(this.analisisFacial.perfilMaxilar){
            for (let index = 0; index <= this.perfilMaxilarArrayBool.length; index++) {
              if(this.perfilMaxilarArray[index] == this.analisisFacial.perfilMaxilar){
                this.perfilMaxilarArrayBool[index] = true
              }
              if(this.pacienteId != null){
                this.analisisFacialForm.controls['perfilMaxilar'].setValue(this.perfilMaxilarArray[index])
              }
            }
          }
          if(this.analisisFacial.perfilMandibular){
            for (let index = 0; index <= this.perfilMandibularArrayBool.length; index++) {
              if(this.perfilMandibularArray[index] == this.analisisFacial.perfilMandibular){
                this.perfilMandibularArrayBool[index] = true
              }
              if(this.pacienteId != null){
                this.analisisFacialForm.controls['perfilMandibular'].setValue(this.perfilMandibularArray[index])
              }
            }
          }
          if(this.analisisFacial.surcoLM){
            for (let index = 0; index <= this.surcoLabioMentonArrayBool.length; index++) {
              if(this.surcoLabioMentonArray[index] == this.analisisFacial.surcoLM){
                this.surcoLabioMentonArrayBool[index] = true
              }
              if(this.pacienteId != null){
                //this.surcoLabioMentonArray[index] = this.analisisFacial.surcoLM
                this.analisisFacialForm.controls['surcoLM'].setValue(this.surcoLabioMentonArray[index])
              }
            }
          }
          if(this.analisisFacial.labiosEr){
            for (let index = 0; index <= this.labiosReposoArrayBool.length; index++) {
              if(this.labiosReposoArray[index] == this.analisisFacial.labiosEr){
                this.labiosReposoArrayBool[index] = true
              }
              if(this.pacienteId != null){
                //this.labiosReposoArray[index] = this.analisisFacial.labiosEr
                this.analisisFacialForm.controls['labiosEr'].setValue(this.labiosReposoArray[index])
              }
            }
          }
    
          }
        })
      }

      isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
        return k in x;
      }

      saveAnalisisFacial(){
        this.pacienteId = this.datosGenerales.id
        this.analisisFacialForm.controls['idDatosGenerales'].setValue(this.pacienteId)
        this.analisisFacialService.postAnalisisFacial(this.analisisFacialForm.value).subscribe(dato => {
          console.log(dato)
          this.completadoAnalisisFacial = true
        })
      }
    
      updateAnalisisFacial(){
        this.pacienteId = this.datosGenerales.id
        this.analisisFacialForm.controls['idDatosGenerales'].setValue(this.pacienteId)
        this.analisisFacialService.updateAnalisisFacial(this.analisisFacialForm.value).subscribe(dato => {
          console.log(dato)
          this.completadoAnalisisFacial = true
        })
      }
}
