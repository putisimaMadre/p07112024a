import { afterNextRender, Component ,inject, Injector, OnInit, ViewChild} from '@angular/core';
import { DatosGeneralesService } from '../../services/datos-generales.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AntecedentesFyHService } from '../../services/antecedentes-fy-h.service';
import { AntecedentesFyH } from '../../models/antecedentes-fy-h';
import { AntecedentesFyHBool } from '../../models/antecedentes-fy-hbool';
import { AntecedentesPyPService } from '../../services/antecedentes-py-p.service';
import { AntecedentesPNoPService } from '../../services/antecedentes-pno-p.service';
import { PadecimientosAService } from '../../services/padecimientos-a.service';
import { AnalisisFacialService } from '../../services/analisis-facial.service';
import { AnalisisFuncionalService } from '../../services/analisis-funcional.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { EvaluacionClinicaService } from '../../services/evaluacion-clinica.service';
import { EvaluacionClinicaInfantilService } from '../../services/evaluacion-clinica-infantil.service';
import { ConsentimientoInformadoService } from '../../services/consentimiento-informado.service';
import { PagosService } from '../../services/pagos.service';
import { switchMap } from 'rxjs';
import { DatosGenerales } from '../../models/datos-generales';

/*interface Odontologo {
  valor: string;
  valorEnVista: string;
}*/
interface Odontologo {
  valor: string;
  valorEnVista: string;
}

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

  //displayedColumns: string[] = ['madre', 'padre'];
  fechaHoy: number = Date.now();
  completadoDatosGenerales = false;
  completadoAntecedentesFyH = false;
  completadoAntecedentesPyP = false;
  completadoAntecedentesPNoP = false;
  completadoPadecimientosActuales = false;
  completadoAnalisisFacial = false;
  completadoAnalisisFuncional = false;
  completadoConsentimientoInformado = false
  completadoEvaluacionClinica = false
  completadoEvaluacionClinicaInfantil = false
  completadoPagos = false
  patologiasArray: FormGroup[] = []
  patologiasPyPArray: FormGroup[] = []
  patologia = FormGroup
  paciente: string = ""
  sexo: string = ""
  pacienteId: number = 0;
  prueba = 2;
  datosGenerales?: DatosGenerales;
  antecedentesFyH?: AntecedentesFyH;
  antecedentesFyHBool = new AntecedentesFyHBool();

  constructor(private datosGeneralesService: DatosGeneralesService,
    private antecedentesFyHService: AntecedentesFyHService,
    private router: Router,
    private formBuilder: FormBuilder,
    private antecedentesServicePyP: AntecedentesPyPService,
    private antecedentesPnoPService: AntecedentesPNoPService,
    private padecimientosAService: PadecimientosAService,
    private analisisFacialService: AnalisisFacialService,
    private analisisFuncionalService: AnalisisFuncionalService,
    private evaluacionClinicaService: EvaluacionClinicaService,
    private evaluacionClinicaInfantilService: EvaluacionClinicaInfantilService,
    private consentimientoInformado: ConsentimientoInformadoService,
    private pagosService: PagosService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.datosGeneralesService.getDatosGeneralesById(id)),
    )
    .subscribe(datosGenerales => {
      this.datosGenerales = datosGenerales
      return;
    })
    
    //ya se obtiene un registro en este caso 6 hay que hacer un bucle para que se obtengan
    //todos los registros 6 y se conviertan en booleanos
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.antecedentesFyHService.getAntecedentesEdit(id)),
    )
    .subscribe(antecedentesFyH => {
      this.antecedentesFyH = antecedentesFyH
      console.log(antecedentesFyH)
      //this.convertirABoolean(antecedentesFyH)
      return;
    })
  }

  convertirABoolean(antecedentesFyH: AntecedentesFyH){
    if(Number.isInteger(antecedentesFyH.madre)){
      this.antecedentesFyHBool.madre = true;
    }
    if(Number.isInteger(antecedentesFyH.abuelaM)){
      this.antecedentesFyHBool.abuelaM = true
    }
    if(Number.isInteger(antecedentesFyH.abueloM)){
      this.antecedentesFyHBool.abueloM = true
    }
    console.log(this.antecedentesFyHBool)
  }

  formDatosGenerales: FormGroup = this.formBuilder.group({
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
    "numeroTelefono": ["", Validators.required],
  })

  diabetesForm: FormGroup = this.formBuilder.group({
    "madre": [],
    "abuelaM": [],
    "abueloM": [],
    "otrosM": [],
    "padre": [],
    "abuelaP": [],
    "abueloP": [],
    "hermanosP": [],
    "otrosP": [],
    "idPatologias": [1],
    "idDatosGenerales": [this.pacienteId]
  })

  hipertensionAForm: FormGroup = this.formBuilder.group({
    "madre": [],
    "abuelaM": [],
    "abueloM": [],
    "otrosM": [],
    "padre": [],
    "abuelaP": [],
    "abueloP": [],
    "hermanosP": [],
    "otrosP": [],
    "idPatologias": [2],
    "idDatosGenerales": [this.pacienteId]
  })

  cardiopatiaForm: FormGroup = this.formBuilder.group({
    "madre": [],
    "abuelaM": [],
    "abueloM": [],
    "otrosM": [],
    "padre": [],
    "abuelaP": [],
    "abueloP": [],
    "hermanosP": [],
    "otrosP": [],
    "idPatologias": [3],
    "idDatosGenerales": [this.pacienteId]
  })

  neoplasiasForm: FormGroup = this.formBuilder.group({
    "madre": [],
    "abuelaM": [],
    "abueloM": [],
    "otrosM": [],
    "padre": [],
    "abuelaP": [],
    "abueloP": [],
    "hermanosP": [],
    "otrosP": [],
    "idPatologias": [4],
    "idDatosGenerales": [[this.pacienteId]]
  })

  epilepsiaForm: FormGroup = this.formBuilder.group({
    "madre": [],
    "abuelaM": [],
    "abueloM": [],
    "otrosM": [],
    "padre": [],
    "abuelaP": [],
    "abueloP": [],
    "hermanosP": [],
    "otrosP": [],
    "idPatologias": [5],
    "idDatosGenerales": [this.pacienteId]
  })

  malformacionesForm: FormGroup = this.formBuilder.group({
    "madre": [],
    "abuelaM": [],
    "abueloM": [],
    "otrosM": [],
    "padre": [],
    "abuelaP": [],
    "abueloP": [],
    "hermanosP": [],
    "otrosP": [],
    "idPatologias": [6],
    "idDatosGenerales": [this.pacienteId]
  })

  SIDAForm: FormGroup = this.formBuilder.group({
    "madre": [],
    "abuelaM": [],
    "abueloM": [],
    "otrosM": [],
    "padre": [],
    "abuelaP": [],
    "abueloP": [],
    "hermanosP": [],
    "otrosP": [],
    "idPatologias": [7],
    "idDatosGenerales": [this.pacienteId]
  })

  enfermedadesRForm: FormGroup = this.formBuilder.group({
    "madre": [],
    "abuelaM": [],
    "abueloM": [],
    "otrosM": [],
    "padre": [],
    "abuelaP": [],
    "abueloP": [],
    "hermanosP": [],
    "otrosP": [],
    "idPatologias": [8],
    "idDatosGenerales": [this.pacienteId]
  })

  hepatitisForm: FormGroup = this.formBuilder.group({
    "madre": [],
    "abuelaM": [],
    "abueloM": [],
    "otrosM": [],
    "padre": [],
    "abuelaP": [],
    "abueloP": [],
    "hermanosP": [],
    "otrosP": [],
    "idPatologias": [9],
    "idDatosGenerales": [this.pacienteId]
  })

  artritisForm: FormGroup = this.formBuilder.group({
    "madre": [],
    "abuelaM": [],
    "abueloM": [],
    "otrosM": [],
    "padre": [],
    "abuelaP": [],
    "abueloP": [],
    "hermanosP": [],
    "otrosP": [],
    "idPatologias": [10],
    "idDatosGenerales": [this.pacienteId]
  })

  otraForm: FormGroup = this.formBuilder.group({
    "madre": [],
    "abuelaM": [],
    "abueloM": [],
    "otrosM": [],
    "padre": [],
    "abuelaP": [],
    "abueloP": [],
    "hermanosP": [],
    "otrosP": [],
    "idPatologias": [11],
    "idDatosGenerales": [this.pacienteId]
  })

  aparentementeSForm: FormGroup = this.formBuilder.group({
    "madre": [],
    "abuelaM": [],
    "abueloM": [],
    "otrosM": [],
    "padre": [],
    "abuelaP": [],
    "abueloP": [],
    "hermanosP": [],
    "otrosP": [],
    "idPatologias": [12],
    "idDatosGenerales": [this.pacienteId]
  })
  observacionesForm: FormGroup = this.formBuilder.group({
    "observacionesPatologias": [""],
    "idDatosGenerales": [this.pacienteId]
  })

  varicelaForm: FormGroup = this.formBuilder.group({
    "siNo": [false, Validators.requiredTrue],
    "fechaAgno": [""],
    "idEnfermedad": [1],
    "idDatosGenerales": [this.pacienteId]
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
    "idEnfermedad": [2],
    "idDatosGenerales": [this.pacienteId]
  })

  sarampionForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [3],
    "idDatosGenerales": [this.pacienteId]
  })

  parotiditisForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [4],
    "idDatosGenerales": [this.pacienteId]
  })

  tosferinaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [5],
    "idDatosGenerales": [this.pacienteId]
  })

  escarlatinaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [6],
    "idDatosGenerales": [this.pacienteId]
  })

  parasitosisForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [7],
    "idDatosGenerales": [this.pacienteId]
  })

  hepatitisPyPForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [8],
    "idDatosGenerales": [this.pacienteId]
  })

  SIDAPyPForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [9],
    "idDatosGenerales": [this.pacienteId]
  })

  asmaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [10],
    "idDatosGenerales": [this.pacienteId]
  })

  disfuncionesEndocrinasForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [11],
    "idDatosGenerales": [this.pacienteId]
  })

  hipertensionForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [12],
    "idDatosGenerales": [this.pacienteId]
  })

  cancerForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [13],
    "idDatosGenerales": [this.pacienteId]
  })

  enfTransSexForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [14],
    "idDatosGenerales": [this.pacienteId]
  })

  epilepsiaPyPForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [15],
    "idDatosGenerales": [this.pacienteId]
  })

  amigdalitisForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [16],
    "idDatosGenerales": [this.pacienteId]
  })

  tubercolosisForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [17],
    "idDatosGenerales": [this.pacienteId]
  })

  fiebreReumaticaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [18],
    "idDatosGenerales": [this.pacienteId]
  })

  diabetesPyPForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [19],
    "idDatosGenerales": [this.pacienteId]
  })

  enfCardiovascularesForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [20],
    "idDatosGenerales": [this.pacienteId]
  })

  artritisPyPForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [21],
    "idDatosGenerales": [this.pacienteId]
  })

  traumatitisConSecuelasForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [22],
    "idDatosGenerales": [this.pacienteId]
  })

  intervencionQuirurgicaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [23],
    "idDatosGenerales": [this.pacienteId]
  })

  transfusionSanguineaForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [24],
    "idDatosGenerales": [this.pacienteId]
  })

  alergiaAForm: FormGroup = this.formBuilder.group({
    "siNo": [false],
    "fechaAgno": [""],
    "idEnfermedad": [25],
    "idDatosGenerales": [this.pacienteId]
  })

  antecedentesPersonalesNoP: FormGroup = this.formBuilder.group({
    "alcohol": [false],
    "tabaquismo": [false],
    "drogas": [false],
    "otros": [""],
    "idDatosGenerales": [this.pacienteId]
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
    "idDatosGenerales": [this.pacienteId]
  })

  analisisFacialForm: FormGroup = this.formBuilder.group({
    "patronFacial": [],
    "perfil": [],
    "asimetria": [],
    "alturaFE": [],
    "anchuraFE": [],
    "perfilMaxilar": [],
    "perfilMandibular": [],
    "surcoLM": [],
    "labiosEr": [],
    "idDatosGenerales": [this.pacienteId]
  })
  
  analisisFuncionalForm: FormGroup = this.formBuilder.group({
    "actividadComisural": [],
    "actividadLingual": [],
    "labioSuperior": [],
    "labioInferior": [],
    "masetero": [],
    "mentoniano": [],
    "respiracion": [],
    "deglucion": [],
    "idDatosGenerales": [this.pacienteId]
  })

  evaluacionClinicaForm: FormGroup = this.formBuilder.group({
    "motivo": [""],
    "observaciones": [""],
    "exploracion": [""],
    "idDatosGenerales": [this.pacienteId]
  })

  evaluacionClinicaInfantilForm: FormGroup = this.formBuilder.group({
    "motivo": [""],
    "observaciones": [""],
    "exploracion": [""],
    "idDatosGenerales": [this.pacienteId]
  })

  odontologoControl = new FormControl<Odontologo | null>(null, Validators.required);
  odontologos: Odontologo[] = [
    {valor: 'Etbaal Corona', valorEnVista: 'Etbaal Corona'},
    {valor: 'Rosa Martinez', valorEnVista: 'Rosa Martinez'},
    {valor: 'Araceli Gomez', valorEnVista: 'Araceli Gomez'},
  ];

  consentimientoInformadoForm: FormGroup = this.formBuilder.group({
    "nombrePersona": [],
    "odontologo": [],
    "idDatosGenerales": [this.pacienteId]
  })

  
  pagosForm: FormGroup =this.formBuilder.group({
    "fecha": [""],
    "evolucion": [""],
    "costo": [""],
    "aCuenta": [""],
    "saldo": [""],
    "idDatosGenerales": [this.pacienteId]
  })

  saveEvaluacionClinicaInfantil(){
    this.evaluacionClinicaInfantilForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.evaluacionClinicaInfantilService.postEvaluacionClinicaInfantil(this.evaluacionClinicaInfantilForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoEvaluacionClinicaInfantil = true
    })
  }

  saveEvaluacionClinica(){
    this.evaluacionClinicaForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.evaluacionClinicaService.postEvaluacionClinica(this.evaluacionClinicaForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoEvaluacionClinica = true
    })
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

  saveConsentimientoInformado(){
    this.consentimientoInformadoForm.controls['odontologo'].setValue(this.odontologoControl.value?.valorEnVista)
    this.consentimientoInformadoForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.consentimientoInformado.postConsentimientoInformado(this.consentimientoInformadoForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoConsentimientoInformado = true
    })
  }

  saveAnalisisFuncional(){
    this.analisisFuncionalForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.analisisFuncionalService.postAnalisisFuncional(this.analisisFuncionalForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoAnalisisFuncional = true
    })
  }

  saveAnalisisFacial(){
    this.analisisFacialForm.controls['idDatosGenerales'].setValue(this.pacienteId)
    this.analisisFacialService.postAnalisisFacial(this.analisisFacialForm.value).subscribe(dato => {
      console.log(dato)
      this.completadoAnalisisFacial = true
    })
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

  cambioValorPatologia(formGroup: FormGroup){
    let idPatologia = formGroup.get('idPatologias')?.value
      Object.keys(formGroup.controls).forEach((key: string) => {
        let valorAntecedente = formGroup.get(key);
        if(valorAntecedente!.value === true){
          formGroup.controls[key].setValue(idPatologia)
          console.log(key + ' = ' + valorAntecedente!.value);
        }
      });
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
//console.log(this.diabetesForm.value)
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

    //console.log(this.patologiasArray)*/
    this.patologiasArray.forEach(element => {
      this.cambioValorPatologia(element)
      this.antecedentesFyHService.postAntecedentes(element.value).subscribe(patologia => {
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
      this.sexo = dato.sexo
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
  //poner los combobox al primer cuestionario
}
