import { ChangeDetectionStrategy, Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AntecedentesFyHService } from '../../services/antecedentes-fy-h.service';
import { AntecedentesFyH } from '../../models/antecedentes-fy-h';
import { DatosGenerales } from '../../models/datos-generales';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patologias } from '../../models/patologias';

@Component({
  selector: 'app-datos-generales-dialog',
  templateUrl: './datos-generales-dialog.component.html',
  styleUrl: './datos-generales-dialog.component.css'
})
export class DatosGeneralesDialogComponent implements OnInit{

  readonly dialogRef = inject(MatDialogRef<DatosGeneralesDialogComponent>);
  antecedentesByIdDatosGenerales: AntecedentesFyH[] = []
  patologias: Patologias[] = [
    {id: 1, patologia: "Diabetes"},
    {id: 2, patologia: "Hipertensión Arterial"},
    {id: 3, patologia: "Cardiopatías"},
    {id: 4, patologia: "Neoplasias"},
    {id: 5, patologia: "Epilepsia"},
    {id: 6, patologia: "Malformaciones"},
    {id: 7, patologia: "SIDA"},
    {id: 8, patologia: "Enfermedades Renales"},
    {id: 9, patologia: "Hepatitis"},
    {id: 10, patologia: "Artritis"},
    {id: 11, patologia: "Otra"},
    {id: 12, patologia: "Aparentemente Sano"}
  ]

  constructor(private antecedentesFyHService: AntecedentesFyHService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public datosGenerales: any 
  ){}
  
  ngOnInit(): void {
   this.formAntecedentes.controls['idDatosGenerales'].setValue(this.datosGenerales.idDG)
   this.antecedentesFyHService.getAntecedentesByIdDatosGenerales(this.formAntecedentes.value)
   .subscribe(a => {
      this.antecedentesByIdDatosGenerales = a
  })
  }

  formAntecedentes: FormGroup = this.formBuilder.group({
    "idDatosGenerales": []
  })

}
