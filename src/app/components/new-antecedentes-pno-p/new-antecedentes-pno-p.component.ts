import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AntecedentesPNoPService } from '../../services/antecedentes-pno-p.service';
import { DatosGenerales } from '../../models/datos-generales';

@Component({
  selector: 'app-new-antecedentes-pno-p',
  templateUrl: './new-antecedentes-pno-p.component.html',
  styleUrl: './new-antecedentes-pno-p.component.css'
})
export class NewAntecedentesPnoPComponent implements OnInit{
  @Input()
  datosGenerales!: DatosGenerales;

  pacienteId!: number
  edit: boolean =false
  antecedentesPnoP?: any;
  completadoAntecedentesPNoP = false;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private antecedentesPnoPService: AntecedentesPNoPService
  ){}
  
  ngOnInit(): void {
    //=========ANTECEDENTES PERSONALES NO PATOLOGICOS========
        this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.antecedentesPnoPService.getAntecedentesPnoPEdit(id)),
        )
        .subscribe(antecedentesPnoP => {
          const keys = Object.keys(antecedentesPnoP);
          keys.forEach((key) => {
            if(this.isKey(antecedentesPnoP, key)){
              this.antecedentesPnoP = antecedentesPnoP[key];
              this.antecedentesPersonalesNoPForm.controls["alcohol"].setValue(this.antecedentesPnoP.alcohol)
              this.antecedentesPersonalesNoPForm.controls["tabaquismo"].setValue(this.antecedentesPnoP.tabaquismo)
              this.antecedentesPersonalesNoPForm.controls["drogas"].setValue(this.antecedentesPnoP.drogas)
              this.antecedentesPersonalesNoPForm.controls["otros"].setValue(this.antecedentesPnoP.otros)
              this.edit = true
            }
          })
          return;
        })
  }

    antecedentesPersonalesNoPForm: FormGroup = this.formBuilder.group({
      "alcohol": [false],
      "tabaquismo": [false],
      "drogas": [false],
      "otros": [""],
      "idDatosGenerales": [this.pacienteId]
    })

  saveAntecedentesPersonalesNoPatologicos(){
    this.pacienteId = this.datosGenerales.id
    this.antecedentesPersonalesNoPForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.antecedentesPnoPService.postAntecedentes(this.antecedentesPersonalesNoPForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoAntecedentesPNoP = true
    })
  }

  updateAntecedentesPnoP(){
    this.pacienteId = this.datosGenerales.id
    this.antecedentesPersonalesNoPForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.antecedentesPnoPService.updateAntecedentesPnoP(this.antecedentesPersonalesNoPForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoAntecedentesPNoP = true
    })
  }

  isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
    return k in x;
  }
}
