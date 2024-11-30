import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { DatosGeneralesService } from '../../services/datos-generales.service';
import { DatosGenerales } from '../../models/datos-generales';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DatosGeneralesDialogComponent } from '../../dialogs/datos-generales-dialog/datos-generales-dialog.component';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrl: './datos-generales.component.css'
})
export class DatosGeneralesComponent implements OnInit{
  readonly dialog = inject(MatDialog);
  datosGenerales: DatosGenerales[] = [];
  displayedColumns: string[] = [
    'nombre', 
    'domicilio', 
    'entidad', 
    'escolaridad', 
    'fechaNacimiento', 
    'edad', 
    'sexo', 
    'lugarNacimiento', 
    'estadoCivil',
    'acciones'
  ];
  dataSource: any;
  
  constructor(private datosGeneralesService: DatosGeneralesService ){}

  ngOnInit(): void {
    this.datosGeneralesService.getDatosGenerales().subscribe(dato => {
      this.datosGenerales = dato
      this.dataSource = new MatTableDataSource(this.datosGenerales);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id: number): void {
    this.dialog.open(DatosGeneralesDialogComponent, {
      data:{
        idDG:id
      }
    });
  }

}
