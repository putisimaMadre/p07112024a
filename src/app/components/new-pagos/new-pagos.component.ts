import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatosGenerales } from '../../models/datos-generales';
import { PagosService } from '../../services/pagos.service';

@Component({
  selector: 'app-new-pagos',
  templateUrl: './new-pagos.component.html',
  styleUrl: './new-pagos.component.css'
})
export class NewPagosComponent implements OnInit{
  @Input() edad?: number
  @Input() sexo?: string
  @Input() paciente: string = ""
  @Input() pacienteId?: any
  @Input() datosGenerales?: any
  completadoPagos = false
  
  constructor(
    private formBuilder: FormBuilder,
    private pagosService: PagosService
  ){}

  ngOnInit(): void {
  }

  savePagosForm(){
    let saldo:number = 0
    this.pagosForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    saldo = this.pagosForm.get('costo')?.value - this.pagosForm.get('aCuenta')?.value
    this.pagosForm.controls['saldo'].setValue(saldo)
    this.pagosService.postPagos(this.pagosForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoPagos = true
    })
  }

  pagosForm: FormGroup =this.formBuilder.group({
    "fecha": [""],
    "evolucion": [""],
    "costo": [""],
    "aCuenta": [""],
    "saldo": [""],
    "idDatosGenerales": [this.pacienteId]
  })

}
