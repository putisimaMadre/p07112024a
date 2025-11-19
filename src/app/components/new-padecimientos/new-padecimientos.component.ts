import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PadecimientosAService } from '../../services/padecimientos-a.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DatosGenerales } from '../../models/datos-generales';

@Component({
  selector: 'app-new-padecimientos',
  templateUrl: './new-padecimientos.component.html',
  styleUrl: './new-padecimientos.component.css'
})
export class NewPadecimientosComponent implements OnInit{
@Input() datosGenerales!: DatosGenerales

pacienteId: number = 0
padecimientosActuales?: any;
completadoPadecimientosActuales = false;
edit: boolean = false

constructor(
  private formBuilder: FormBuilder,
  private padecimientosAService: PadecimientosAService,
  private activatedRoute: ActivatedRoute
){}

  ngOnInit(): void {
    //=========PADECIMIENTOS ACTUALES========
        this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.padecimientosAService.getPadecimientosEdit(id)),
        )
        .subscribe(padecimientosA => {
          const keys = Object.keys(padecimientosA);
          keys.forEach((key) => {
            if(this.isKey(padecimientosA, key)){
              this.padecimientosActuales = padecimientosA[key];
              if(this.padecimientosActuales.id != undefined){
                this.edit = true
              }
              console.log(this.edit)
              this.padecimientosActualesForm.controls["preguntaUnoS"].setValue(this.padecimientosActuales.preguntaUnoS)
              this.padecimientosActualesForm.controls["preguntaUno"].setValue(this.padecimientosActuales.preguntaUno)
              /*if(this.padecimientosActualesForm.get("preguntaUno")?.value != null 
                && this.padecimientosActualesForm.get("preguntaUno")?.value !=0){
                  this.padecimientosActualesForm.controls["preguntaUno"].setValue(this.padecimientosActuales.preguntaUno) //Se dejo solo este por que es el que daba problemas 
              }*/
              //this.padecimientosActualesForm.controls["preguntaUnoS"].setValue(this.padecimientosActuales.preguntaUnoS)
              this.padecimientosActualesForm.controls["preguntaDos"].setValue(this.padecimientosActuales.preguntaDos)
              this.padecimientosActualesForm.controls["preguntaDosS"].setValue(this.padecimientosActuales.preguntaDosS)
              this.padecimientosActualesForm.controls["preguntaTres"].setValue(this.padecimientosActuales.preguntaTres)
              this.padecimientosActualesForm.controls["preguntaTresS"].setValue(this.padecimientosActuales.preguntaTresS)
              this.padecimientosActualesForm.controls["preguntaCuatro"].setValue(this.padecimientosActuales.preguntaCuatro)
              this.padecimientosActualesForm.controls["preguntaCuatroS"].setValue(this.padecimientosActuales.preguntaCuatroS)
              this.padecimientosActualesForm.controls["preguntaCinco"].setValue(this.padecimientosActuales.preguntaCinco)
              this.padecimientosActualesForm.controls["preguntaCincoS"].setValue(this.padecimientosActuales.preguntaCincoS)
              this.padecimientosActualesForm.controls["preguntaSeis"].setValue(this.padecimientosActuales.preguntaSeis)
              this.padecimientosActualesForm.controls["preguntaSeisS"].setValue(this.padecimientosActuales.preguntaSeisS)
              this.padecimientosActualesForm.controls["preguntaSiete"].setValue(this.padecimientosActuales.preguntaSiete)
              this.padecimientosActualesForm.controls["preguntaSieteS"].setValue(this.padecimientosActuales.preguntaSieteS)
              this.padecimientosActualesForm.controls["preguntaOcho"].setValue(this.padecimientosActuales.preguntaOcho)
              this.padecimientosActualesForm.controls["preguntaOchoS"].setValue(this.padecimientosActuales.preguntaOchoS)
            }
          })
          return;
        })
  }

    padecimientosActualesForm: FormGroup = this.formBuilder.group({
      "preguntaUno": [false],
      "preguntaUnoS": [""],
      "preguntaDos": [false],
      "preguntaDosS": [""],
      "preguntaTres": [false],
      "preguntaTresS": [""],
      "preguntaCuatro": [false],
      "preguntaCuatroS": [""],
      "preguntaCinco": [false],
      "preguntaCincoS": [""],
      "preguntaSeis": [false],
      "preguntaSeisS": [""],
      "preguntaSiete": [false],
      "preguntaSieteS": [""],
      "preguntaOcho": [false],
      "preguntaOchoS": [""],
      "idDatosGenerales": [this.pacienteId]
    })

  isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
    return k in x;
  }

  savePadecimientosActuales(){
    this.pacienteId = this.datosGenerales.id
    this.padecimientosActualesForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.padecimientosAService.postPadecimientos(this.padecimientosActualesForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoPadecimientosActuales = true
    })
  }

  updatePadecimientosActuales(){
    this.pacienteId = this.datosGenerales.id
    this.padecimientosActualesForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.padecimientosAService.updatePadecimientos(this.padecimientosActualesForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoPadecimientosActuales = true
    })
  }
}
