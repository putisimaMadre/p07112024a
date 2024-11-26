import { Component ,model, OnInit} from '@angular/core';
import { DatosGeneralesService } from '../../services/datos-generales.service';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AntecedentesFyHService } from '../../services/antecedentes-fy-h.service';
import { AntecedentesFyH } from '../../models/antecedentes-fy-h';
import { AntecedentesPyPService } from '../../services/antecedentes-py-p.service';
import { AntecedentesPNoPService } from '../../services/antecedentes-pno-p.service';
import { PadecimientosAService } from '../../services/padecimientos-a.service';

@Component({
  selector: 'app-new-datos-generales',
  templateUrl: './new-datos-generales.component.html',
  styleUrl: './new-datos-generales.component.css',
  providers: [provideNativeDateAdapter()],
})

export class NewDatosGeneralesComponent implements OnInit{
  //displayedColumns: string[] = ['madre', 'padre'];
  fechaHoy: number = Date.now();
  completadoDatosGenerales = false;
  completadoAntecedentesFyH = false;
  completadoAntecedentesPyP = false;
  completadoAntecedentesPNoP = false;
  completadoPadecimientosActuales = false;
  completadoAnalisisFacial = false;
  patologiasArray: FormGroup[] = []
  patologiasPyPArray: FormGroup[] = []
  patologia = FormGroup
  paciente: string = ""
  pacienteId: number = 0;

  constructor(private datosGeneralesService: DatosGeneralesService,
    private antecedentesService: AntecedentesFyHService,
    private router: Router,
    private formBuilder: FormBuilder,
    private antecedentesServicePyP: AntecedentesPyPService,
    private antecedentesPnoPService: AntecedentesPNoPService,
    private padecimientosAService: PadecimientosAService
  ){}

  ngOnInit(): void {
    //this.varicelaForm.controls['fechaAgno'].disable();
  }

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
    "siNo": [false, Validators.requiredTrue],
    "fechaAgno": [""],
    "idEnfermedad": 1,
    "idDatosGenerales": this.pacienteId
  })

  ///ME QUEDO AQUI HAY QUE VERIFICAR COMO identificar eL siNo para que habilite el input
  verificarSiNoStatus(): void{
    console.log("ahora")
    if (this.varicelaForm.get('siNo')?.value){
      //this.varicelaForm.controls['fechaAgno'].enable();
      console.log(this.varicelaForm.get('siNo')?.value)
    }
  }

  rubeolaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 2,
    "idDatosGenerales": this.pacienteId
  })

  sarampionForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 3,
    "idDatosGenerales": this.pacienteId
  })

  parotiditisForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 4,
    "idDatosGenerales": this.pacienteId
  })

  tosferinaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 5,
    "idDatosGenerales": this.pacienteId
  })

  escarlatinaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 6,
    "idDatosGenerales": this.pacienteId
  })

  parasitosisForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 7,
    "idDatosGenerales": this.pacienteId
  })

  hepatitisPyPForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 8,
    "idDatosGenerales": this.pacienteId
  })

  SIDAPyPForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 9,
    "idDatosGenerales": this.pacienteId
  })

  asmaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 10,
    "idDatosGenerales": this.pacienteId
  })

  disfuncionesEndocrinasForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 11,
    "idDatosGenerales": this.pacienteId
  })

  hipertensionForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 12,
    "idDatosGenerales": this.pacienteId
  })

  cancerForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 13,
    "idDatosGenerales": this.pacienteId
  })

  enfTransSexForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 14,
    "idDatosGenerales": this.pacienteId
  })

  epilepsiaPyPForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 15,
    "idDatosGenerales": this.pacienteId
  })

  amigdalitisForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 16,
    "idDatosGenerales": this.pacienteId
  })

  tubercolosisForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 17,
    "idDatosGenerales": this.pacienteId
  })

  fiebreReumaticaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 18,
    "idDatosGenerales": this.pacienteId
  })

  diabetesPyPForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 19,
    "idDatosGenerales": this.pacienteId
  })

  enfCardiovascularesForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 20,
    "idDatosGenerales": this.pacienteId
  })

  artritisPyPForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 21,
    "idDatosGenerales": this.pacienteId
  })

  traumatitisConSecuelasForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 22,
    "idDatosGenerales": this.pacienteId
  })

  intervencionQuirurgicaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 23,
    "idDatosGenerales": this.pacienteId
  })

  transfusionSanguineaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 24,
    "idDatosGenerales": this.pacienteId
  })

  alergiaAForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": 25,
    "idDatosGenerales": this.pacienteId
  })

  antecedentesPersonalesNoP: FormGroup = this.formBuilder.group({
    "alcohol": [false],
    "tabaquismo": [false],
    "drogas": [false],
    "otros": [""],
    "idDatosGenerales": this.pacienteId
  })

  padecimientosActuales: FormGroup = this.formBuilder.group({
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
    "idDatosGenerales": this.pacienteId
  })

  analisisFacialForm: FormGroup = this.formBuilder.group({
    patronFacial: [""],
    /*dolicoFacial: [false],
    branquifacial: [false]*/
  })

  saveAnalisisFacial(): void{
    console.log(this.analisisFacialForm.value)
    //completadoAnalisisFacial
  }

  savePadecimientosActuales(){
    this.padecimientosActuales.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.padecimientosAService.postPadecimientos(this.padecimientosActuales.value).subscribe(dato => {
      console.log(dato)
      this.completadoPadecimientosActuales = true
    })
  }

  saveAntecedentesPersonalesNoPatologicos(){
    this.antecedentesPersonalesNoP.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.antecedentesPnoPService.postAntecedentes(this.antecedentesPersonalesNoP.value).subscribe(dato => {
      console.log(dato)
      this.completadoAntecedentesPNoP = true
    })
  }

  savePatalogias(): void {
    this.completadoAntecedentesFyH = true;
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
      this.antecedentesService
      .postAntecedentes(element.value)
      .subscribe(patologia => {
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

  saveAntecedentesPyP(): void{
    this.completadoAntecedentesPyP = true
    this.varicelaForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.rubeolaForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.sarampionForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.parotiditisForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.tosferinaForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.escarlatinaForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.parasitosisForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.hepatitisPyPForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.SIDAPyPForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.asmaForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.disfuncionesEndocrinasForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.hipertensionForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.cancerForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.enfTransSexForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.epilepsiaPyPForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.amigdalitisForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.tubercolosisForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.fiebreReumaticaForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.diabetesPyPForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.enfCardiovascularesForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.artritisPyPForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.traumatitisConSecuelasForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.intervencionQuirurgicaForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.transfusionSanguineaForm.controls['idDatosGenerales'].setValue(this.pacienteId);
    this.alergiaAForm.controls['idDatosGenerales'].setValue(this.pacienteId);

    this.patologiasPyPArray.push(this.varicelaForm);
    this.patologiasPyPArray.push(this.rubeolaForm);
    this.patologiasPyPArray.push(this.sarampionForm);
    this.patologiasPyPArray.push(this.parotiditisForm);
    this.patologiasPyPArray.push(this.tosferinaForm);
    this.patologiasPyPArray.push(this.escarlatinaForm);
    this.patologiasPyPArray.push(this.parasitosisForm);
    this.patologiasPyPArray.push(this.hepatitisPyPForm);
    this.patologiasPyPArray.push(this.SIDAPyPForm);
    this.patologiasPyPArray.push(this.asmaForm);
    this.patologiasPyPArray.push(this.disfuncionesEndocrinasForm);
    this.patologiasPyPArray.push(this.hipertensionForm);
    this.patologiasPyPArray.push(this.cancerForm);
    this.patologiasPyPArray.push(this.enfTransSexForm);
    this.patologiasPyPArray.push(this.epilepsiaPyPForm);
    this.patologiasPyPArray.push(this.amigdalitisForm);
    this.patologiasPyPArray.push(this.tubercolosisForm);
    this.patologiasPyPArray.push(this.fiebreReumaticaForm);
    this.patologiasPyPArray.push(this.diabetesPyPForm);
    this.patologiasPyPArray.push(this.enfCardiovascularesForm);
    this.patologiasPyPArray.push(this.artritisPyPForm);
    this.patologiasPyPArray.push(this.traumatitisConSecuelasForm);
    this.patologiasPyPArray.push(this.intervencionQuirurgicaForm);
    this.patologiasPyPArray.push(this.transfusionSanguineaForm);
    this.patologiasPyPArray.push(this.alergiaAForm);
    
    //console.log(this.varicelaForm.value)
    //faltan las observaciones
    this.patologiasPyPArray.forEach(element => {
      this.antecedentesServicePyP
      .postAntecedentePyP(element.value)
      .subscribe(enfermedad =>{
        console.log(enfermedad)
      })
    });
  }
  //poner el segundo cuestionario
  //poner una bandera para cuando se complete el segundo cuestionario
  //poner los combobox al primer cuestionario
}
