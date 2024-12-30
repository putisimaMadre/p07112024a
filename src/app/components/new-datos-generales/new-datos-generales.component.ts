import { afterNextRender, Component ,inject, Injector, OnInit, ViewChild} from '@angular/core';
import { DatosGeneralesService } from '../../services/datos-generales.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-datos-generales',
  templateUrl: './new-datos-generales.component.html',
  styleUrl: './new-datos-generales.component.css',
  providers: [provideNativeDateAdapter()],
})

export class NewDatosGeneralesComponent implements OnInit{
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
  fechaHoy: number = Date.now();
  completadoDatosGenerales = false;
  
  paciente: string = "";
  edad: number = 0;
  sexo: string = "";
  pacienteId: number = 0;
  datosGenerales?: any;
  
  /****antecedentesFyHBool = new AntecedentesFyHBool();  parece que no se ocupa*/

  edit: boolean = true

  constructor(private datosGeneralesService: DatosGeneralesService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    //=========DATOS GENERALES========    
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.datosGeneralesService.getDatosGeneralesEdit(id)),
    )
      .subscribe(datosGenerales => {
        const keys = Object.keys(datosGenerales);
        keys.forEach((key) => {
          if(this.isKey(datosGenerales, key)){
            this.datosGenerales = datosGenerales[key];
            this.setearRegistrosDatosGenerales()
            this.pacienteId = this.formDatosGenerales.get("id")?.value;
            this.paciente = this.formDatosGenerales.get("nombre")?.value;
            this.edad = this.formDatosGenerales.get("edad")?.value;
            console.log(this.pacienteId)
          }
        })
        if(this.datosGenerales != null){ //<= para comprobra si se edita o no
          this.edit = false
        }
        return;
      })  
  }

  setearRegistrosDatosGenerales(){
    this.formDatosGenerales.setValue({
      id: this.datosGenerales.id,
      nombre: this.datosGenerales.nombre,
      domicilio: this.datosGenerales.domicilio,
      edad: this.datosGenerales.edad,
      entidad: this.datosGenerales.entidad,
      fechaNacimiento: this.datosGenerales.fechaNacimiento,
      numeroTelefono: this.datosGenerales.numeroTelefono,
      ocupacion: this.datosGenerales.ocupacion,
      escolaridad: this.datosGenerales.escolaridad,
      sexo: this.datosGenerales.sexo,
      lugarNacimiento: this.datosGenerales.lugarNacimiento,
      estadoCivil: this.datosGenerales.estadoCivil,
      alergico: this.datosGenerales.alergico,
      status: this.datosGenerales.status,
      observaciones: this.datosGenerales.observaciones,
    })
  }
  //CLONAR editPatronFacial PARA LOS DEMAS

  isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
    return k in x;
  }

  formDatosGenerales: FormGroup = this.formBuilder.group({
    "id": ["", Validators.required],
    "nombre": ["", Validators.required],
    "domicilio": ["", Validators.required],
    "entidad": ["", Validators.required],
    "ocupacion": ["", Validators.required],
    "escolaridad": ["", Validators.required],
    "fechaNacimiento": ["", Validators.required],
    "edad": ["", Validators.required],
    "sexo": ["", Validators.required],
    "lugarNacimiento": ["", Validators.required],
    "estadoCivil": ["", Validators.required],
    "alergico": ["", Validators.required],
    "status": [1],
    "observaciones": [""],
    "numeroTelefono": ["", Validators.required],
  })

  saveDatosGenerales(): void {
    this.datosGeneralesService
    .postDatosGenerales(this.formDatosGenerales.value)
    .subscribe(dato => {
      console.log(dato)
      this.completadoDatosGenerales = true
      this.paciente = dato.nombre
      this.edad = dato.edad
      this.sexo = dato.sexo
      this.pacienteId = dato.id
      this.formDatosGenerales.controls['id'].setValue(dato.id);
    })
  }

  updateDatosGenerales(): void {
    this.datosGeneralesService.updateDatosGenerales(this.formDatosGenerales.value).subscribe(dato => {
      console.log(dato)
    })
  }
}