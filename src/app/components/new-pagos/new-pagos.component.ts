import { afterNextRender, Component, inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosGenerales } from '../../models/datos-generales';
import { PagosService } from '../../services/pagos.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-new-pagos',
  templateUrl: './new-pagos.component.html',
  styleUrl: './new-pagos.component.css'
})
export class NewPagosComponent implements OnInit{
  displayedColumns: string[] = [
    'fecha', 
    'evolucion', 
    'costo', 
    'aCuenta', 
    'saldo'
  ];
  dataSource: any;

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
  @Input() datosGenerales!: DatosGenerales
  @Input() paciente!: string;
  @Input() sexo!: string;

  edad:number = 0
  //sexo:string = ''
  //paciente:string = ''
  pacienteId:number = 0
  
  completadoPagos = false
  pagos: any
  edit: boolean = false
  
  constructor(
    private formBuilder: FormBuilder,
    private pagosService: PagosService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.pagosService.getPagoEdit(id)),
    )
    .subscribe(pagos => {
      this.pagos = pagos
      this.dataSource = new MatTableDataSource(this.pagos);
      const keys = Object.keys(pagos);
      keys.forEach((key) => {
        if(this.isKey(pagos, key)){
          this.pagos = pagos[key]
          //console.log(this.pagos)
          //this.dataSource = new MatTableDataSource(this.pagos);
          if(this.pagos.id != undefined){
            this.edit = true
          }
          this.pagosForm.setValue({
            fecha: this.pagos.fecha,
            evolucion: this.pagos.evolucion,
            costo: this.pagos.saldo,
            aCuenta: 0,
            saldo: 0,
            idDatosGenerales: [this.pacienteId]
          })
        }
      })
    })
  }

  isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
    return k in x;
  }

  pagosForm: FormGroup =this.formBuilder.group({
    "fecha": ["", Validators.required],
    "evolucion": ["", Validators.required],
    "costo": ["", Validators.required],
    "aCuenta": ["", Validators.required],
    "saldo": ["", Validators.required],
    "idDatosGenerales": [this.pacienteId]
  })

  savePagosForm(){
    this.pacienteId = this.datosGenerales.id
    let saldo:number = 0
    this.pagosForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    saldo = this.pagosForm.get('costo')?.value - this.pagosForm.get('aCuenta')?.value
      this.pagosForm.controls['saldo'].setValue(saldo)
      this.pagosService.postPagos(this.pagosForm.value).subscribe(dato => {
        console.log(dato)
        this.completadoPagos = true
      })
    /*if (this.edit){
      //aqui 
      
    }else{
      saldo = this.pagosForm.get('costo')?.value - this.pagosForm.get('aCuenta')?.value
      this.pagosForm.controls['saldo'].setValue(saldo)
      this.pagosService.postPagos(this.pagosForm.value).subscribe(dato => {
        console.log(dato)
        this.completadoPagos = true
      })
    }*/
    
  }
}