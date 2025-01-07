import { Component } from '@angular/core';
import { DatosGenerales } from '../../models/datos-generales';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrl: './pdf.component.css'
})
export class PdfComponent {
  datosGenerales!: DatosGenerales
  pacienteId!: number;
  paciente!: string;
  edad!: number;
  sexo!: string;

  getDatosGenerales(datosGenerales: DatosGenerales){
    this.datosGenerales = datosGenerales
    this.pacienteId = this.datosGenerales.id
    this.edad = this.datosGenerales.edad
    this.paciente = this.datosGenerales.nombre
    this.sexo = this.datosGenerales.sexo
  }
  
  showDatosGenerales(){
    console.table([
      this.datosGenerales, 
      this.pacienteId, 
      this.edad])
    
  }
}
