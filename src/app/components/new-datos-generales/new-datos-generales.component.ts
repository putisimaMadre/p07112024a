import { Component ,model} from '@angular/core';
import { DatosGeneralesService } from '../../services/datos-generales.service';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AntecedentesFyHService } from '../../services/antecedentes-fy-h.service';
import { AntecedentesFyH } from '../../models/antecedentes-fy-h';

@Component({
  selector: 'app-new-datos-generales',
  templateUrl: './new-datos-generales.component.html',
  styleUrl: './new-datos-generales.component.css',
  providers: [provideNativeDateAdapter()],
})

export class NewDatosGeneralesComponent {

  //displayedColumns: string[] = ['madre', 'padre'];
  fechaHoy: number = Date.now();
  completadoDatosGenerales = false
  patologiasArray: FormGroup[] = []
  patologia = FormGroup
  paciente: string = ""
  pacienteId: number = 0;

  constructor(private datosGeneralesService: DatosGeneralesService,
    private antecedentesService: AntecedentesFyHService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  formDatosGenerales: FormGroup = this.formBuilder.group({
    nombre: ["", Validators.required],
    domicilio: ["", Validators.required],
    entidad: ["", Validators.required],
    ocupacion: ["", Validators.required],
    escolaridad: ["", Validators.required],
    fechaNacimiento: ["", Validators.required],
    edad: ["", Validators.required],
    sexo: ["", Validators.required],
    lugarNacimiento: ["", Validators.required],
    estadoCivil: ["", Validators.required],
    numeroTelefono: ["", Validators.required],
  })

  diabetesForm: FormGroup = this.formBuilder.group({
    "madre": [false],
    "abuelaM": [false],
    "abueloM": [false],
    "otrosM": [false],
    "padre": [false],
    "abuelaP": [false],
    "abueloP": [false],
    "hermanosP": [false],
    "otrosP": [false],
    "idPatologias": [1],
    "idDatosGenerales": [this.pacienteId]
  })

  hipertensionAForm: FormGroup = this.formBuilder.group({
    "madre": false,
    "abuelaM": false,
    "abueloM": false,
    "otrosM": false,
    "padre": false,
    "abuelaP": false,
    "abueloP": false,
    "hermanosP": false,
    "otrosP": false,
    "idPatologias": 2,
    "idDatosGenerales": this.pacienteId
  })

  cardiopatiaForm: FormGroup = this.formBuilder.group({
    "madre": false,
    "abuelaM": false,
    "abueloM": false,
    "otrosM": false,
    "padre": false,
    "abuelaP": false,
    "abueloP": false,
    "hermanosP": false,
    "otrosP": false,
    "idPatologias": 3,
    "idDatosGenerales": this.pacienteId
  })

  neoplasiasForm: FormGroup = this.formBuilder.group({
    "madre": false,
    "abuelaM": false,
    "abueloM": false,
    "otrosM": false,
    "padre": false,
    "abuelaP": false,
    "abueloP": false,
    "hermanosP": false,
    "otrosP": false,
    "idPatologias": 4,
    "idDatosGenerales": this.pacienteId
  })

  epilepsiaForm: FormGroup = this.formBuilder.group({
    "madre": false,
    "abuelaM": false,
    "abueloM": false,
    "otrosM": false,
    "padre": false,
    "abuelaP": false,
    "abueloP": false,
    "hermanosP": false,
    "otrosP": false,
    "idPatologias": 5,
    "idDatosGenerales": this.pacienteId
  })

  malformacionesForm: FormGroup = this.formBuilder.group({
    "madre": false,
    "abuelaM": false,
    "abueloM": false,
    "otrosM": false,
    "padre": false,
    "abuelaP": false,
    "abueloP": false,
    "hermanosP": false,
    "otrosP": false,
    "idPatologias": 6,
    "idDatosGenerales": this.pacienteId
  })

  SIDAForm: FormGroup = this.formBuilder.group({
    "madre": false,
    "abuelaM": false,
    "abueloM": false,
    "otrosM": false,
    "padre": false,
    "abuelaP": false,
    "abueloP": false,
    "hermanosP": false,
    "otrosP": false,
    "idPatologias": 7,
    "idDatosGenerales": this.pacienteId
  })

  enfermedadesRForm: FormGroup = this.formBuilder.group({
    "madre": false,
    "abuelaM": false,
    "abueloM": false,
    "otrosM": false,
    "padre": false,
    "abuelaP": false,
    "abueloP": false,
    "hermanosP": false,
    "otrosP": false,
    "idPatologias": 8,
    "idDatosGenerales": this.pacienteId
  })

  hepatitisForm: FormGroup = this.formBuilder.group({
    "madre": false,
    "abuelaM": false,
    "abueloM": false,
    "otrosM": false,
    "padre": false,
    "abuelaP": false,
    "abueloP": false,
    "hermanosP": false,
    "otrosP": false,
    "idPatologias": 9,
    "idDatosGenerales": this.pacienteId
  })

  artritisForm: FormGroup = this.formBuilder.group({
    "madre": false,
    "abuelaM": false,
    "abueloM": false,
    "otrosM": false,
    "padre": false,
    "abuelaP": false,
    "abueloP": false,
    "hermanosP": false,
    "otrosP": false,
    "idPatologias": 10,
    "idDatosGenerales": this.pacienteId
  })

  otraForm: FormGroup = this.formBuilder.group({
    "madre": false,
    "abuelaM": false,
    "abueloM": false,
    "otrosM": false,
    "padre": false,
    "abuelaP": false,
    "abueloP": false,
    "hermanosP": false,
    "otrosP": false,
    "idPatologias": 11,
    "idDatosGenerales": this.pacienteId
  })

  aparentementeSForm: FormGroup = this.formBuilder.group({
    "madre": false,
    "abuelaM": false,
    "abueloM": false,
    "otrosM": false,
    "padre": false,
    "abuelaP": false,
    "abueloP": false,
    "hermanosP": false,
    "otrosP": false,
    "idPatologias": 12,
    "idDatosGenerales": this.pacienteId
  })
  observacionesForm: FormGroup = this.formBuilder.group({
    "observacionesPatologias": [""],
    "idDatosGenerales": this.pacienteId
  })

  varicelaForm: FormGroup = this.formBuilder.group({
    "si": [],
    "no": [],
    "fechaInicio": [],
    "fechaFinal": [],
    "idEnfermedad": 1,
    "idDatosGenerales": this.pacienteId
  })

  rubeolaForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  sarampionForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  parotiditisForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  tosferinaForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  escarlatinaForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  parasitosisForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  hepatitisPyPForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  SIDAPyPForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  asmaForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  disfuncionesEndocrinasForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  hipertensionForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  cancerForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  enfTransSexForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  epilepsiaPyPForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  amigdalitisForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  tubercolosisForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  fiebreReumaticaForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  diabetesPyPForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  enfCardiovascularesForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  artritisPyPForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  traumatitisConSecuelasForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  intervencionQuirurgicaForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  transfusionSanguineaForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })

  alergiaAForm: FormGroup = this.formBuilder.group({
    si: [],
    no: [],
    fechaInicio: [],
    fechaFinal: [],
  })



  savePatalogias(): void {
    //this.diabetesForm.get('idDatosGenerales')?.value <--- Asi se obtiene un dato del formgroup
    this.diabetesForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.hipertensionAForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.cardiopatiaForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.neoplasiasForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.epilepsiaForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.malformacionesForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.SIDAForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.enfermedadesRForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.hepatitisForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.artritisForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.otraForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.aparentementeSForm.controls['idDatosGenerales'].setValue(this.pacienteId)

    //INSERTAR APARTE LAS OBSERVACIONES
    
    this.patologiasArray.push(this.diabetesForm);
    this.patologiasArray.push(this.hipertensionAForm);
    this.patologiasArray.push(this.cardiopatiaForm);
    this.patologiasArray.push(this.neoplasiasForm);
    this.patologiasArray.push(this.epilepsiaForm);
    this.patologiasArray.push(this.malformacionesForm);
    this.patologiasArray.push(this.SIDAForm);
    this.patologiasArray.push(this.enfermedadesRForm);
    this.patologiasArray.push(this.hepatitisForm);
    this.patologiasArray.push(this.artritisForm);
    this.patologiasArray.push(this.otraForm);
    this.patologiasArray.push(this.aparentementeSForm);

    this.patologiasArray.forEach(element => {
      this.antecedentesService.postAntecedentes(element.value).subscribe(patologia =>{
        console.log(patologia)
      })
    });

  }

  saveDatosGenerales(): void {
    this.datosGeneralesService
    .postDatosGenerales(this.formDatosGenerales.value)
    .subscribe(dato => {
      console.log(dato)
      this.completadoDatosGenerales = true
      this.paciente = dato.nombre
      this.pacienteId = dato.id
    })
  }

  saveFormAntecedentesPyP(): void{
    this.varicelaForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    console.log(this.varicelaForm.value)
  }
  //poner el segundo cuestionario
  //poner una bandera para cuando se complete el segundo cuestionario
  //poner los combobox al primer cuestionario
}
