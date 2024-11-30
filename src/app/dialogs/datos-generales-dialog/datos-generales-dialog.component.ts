import { ChangeDetectionStrategy, Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AntecedentesFyHService } from '../../services/antecedentes-fy-h.service';
import { AntecedentesFyH } from '../../models/antecedentes-fy-h';
import { DatosGenerales } from '../../models/datos-generales';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datos-generales-dialog',
  templateUrl: './datos-generales-dialog.component.html',
  styleUrl: './datos-generales-dialog.component.css'
})
export class DatosGeneralesDialogComponent implements OnInit{

  readonly dialogRef = inject(MatDialogRef<DatosGeneralesDialogComponent>);
  antecedentesByIdDatosGenerales: AntecedentesFyH[] = []
  

  constructor(private antecedentesFyHService: AntecedentesFyHService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public datosGenerales: any 
  ){}
  
  ngOnInit(): void {
   this.formAntecedentes.controls['idDatosGenerales'].setValue(this.datosGenerales.idDG)
   this.antecedentesFyHService.getAntecedentesByIdDatosGenerales(this.formAntecedentes.value)
   .subscribe(a => {
      this.antecedentesByIdDatosGenerales = a
      this.evaluacionAntecedentes(this.antecedentesByIdDatosGenerales);
  })
  }

  formAntecedentes: FormGroup = this.formBuilder.group({
    "idDatosGenerales": []
  })

  evaluacionAntecedentes(antecedentes: AntecedentesFyH[]){
    antecedentes.forEach((item, index)=>{
      //console.log("item: "+ item[index] +" index: "+index)
      console.log(item.id)
      //VER LA MANERA DE OBTENER LOS DATOS ORDENADOS EN UN ARRAY CON UN CASE 
      //if(item )
      /*switch (index) {
        case 1:
          console.log('Oranges are $0.59 a pound.');
        break;
        case 2:
          console.log('Oranges are $0.59 a pound.');
        break;
      }*/
    })
  }

}
