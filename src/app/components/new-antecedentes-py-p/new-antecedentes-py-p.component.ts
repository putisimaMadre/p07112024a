import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AntecedentesPyPService } from '../../services/antecedentes-py-p.service';
import { AntecedentesPyP } from '../../models/antecedentes-py-p';
import { DatosGenerales } from '../../models/datos-generales';

@Component({
  selector: 'app-new-antecedentes-py-p',
  templateUrl: './new-antecedentes-py-p.component.html',
  styleUrl: './new-antecedentes-py-p.component.css'
})
export class NewAntecedentesPyPComponent implements OnInit{
  @Input() datosGenerales!: DatosGenerales;

  pacienteId: number = 0
  
  completadoAntecedentesPyP = false;
  patologiasPyPArray: FormGroup[] = []
  antecedentesPyP?: any;

  constructor(private activatedRoute: ActivatedRoute,
    private antecedentesServicePyP: AntecedentesPyPService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.pacienteId = this.datosGenerales.id
    //=========ANTECEDENTES PERSONALES Y PATOLOGICOS========
        this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.antecedentesServicePyP.getAntecedentesPyPEdit(id)),
        )
        .subscribe(antecedentesPyP => {
          this.editAntecedentesPyP(antecedentesPyP)
          return;
        })
  }

  varicelaForm: FormGroup = this.formBuilder.group({
    "siNo": [false, Validators.requiredTrue],
    "fechaAgno": [""],
    "idEnfermedad": [1],
    "idDatosGenerales": [this.pacienteId]
  })

  ///ME QUEDO AQUI HAY QUE VERIFICAR COMO identificar eL siNo para que habilite el input
  verificarSiNoStatus(): void{
    if (this.varicelaForm.get('siNo')?.value){
      //this.varicelaForm.controls['fechaAgno'].enable();
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

  SIDAForm:FormGroup = this.formBuilder.group({
    "siNo": [false, Validators.requiredTrue],
    "fechaAgno": [""],
    "idEnfermedad": [1],
    "idDatosGenerales": [this.pacienteId]
  })

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
      this.antecedentesServicePyP.postAntecedentePyP(element.value).subscribe(enfermedad =>{
        console.log(element.value)
      })
    });
  }
  //poner el segundo cuestionario
  //poner los combobox al primer cuestionario

  updateAntecedentesPyP(){
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
      console.log(element.value)
      this.antecedentesServicePyP.updateAntecedentesPyP(element.value).subscribe(enfermedad =>{
        console.log(element.value)
      })
    });
  }

  editAntecedentesPyP(antecedentesPyP: AntecedentesPyP){
      const keys = Object.keys(antecedentesPyP);
      keys.forEach((key) => {
        if(this.isKey(antecedentesPyP, key)){
          this.antecedentesPyP = antecedentesPyP[key];
          if(this.antecedentesPyP.siNo){
            let idEnfermedad = this.antecedentesPyP.idEnfermedad
            switch ( idEnfermedad ) {
              case 1:
                this.varicelaForm.controls["siNo"].setValue(true)
                this.varicelaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.varicelaForm.controls["siNo"].setValue(true)
                  this.varicelaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
                  case 2:
                      this.rubeolaForm.controls["siNo"].setValue(true)
                      this.rubeolaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                      if(this.pacienteId != null){
                        this.rubeolaForm.controls["siNo"].setValue(true)
                        this.rubeolaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                        
                      }
                    break;
                  case 3:
                    this.sarampionForm.controls["siNo"].setValue(true)
                    this.sarampionForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                    if(this.pacienteId != null){
                      this.sarampionForm.controls["siNo"].setValue(true)
                      this.sarampionForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                      
                    }
                  break;
                  case 4:
                    this.parotiditisForm.controls["siNo"].setValue(true)
                    this.parotiditisForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                    if(this.pacienteId != null){
                      this.parotiditisForm.controls["siNo"].setValue(true)
                      this.parotiditisForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                      
                    }
                  break;
                  case 5:
                    this.tosferinaForm.controls["siNo"].setValue(true)
                    this.tosferinaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                    if(this.pacienteId != null){
                      this.tosferinaForm.controls["siNo"].setValue(true)
                      this.tosferinaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                      
                    }
                  break;
                  case 6:
                    this.escarlatinaForm.controls["siNo"].setValue(true)
                    this.escarlatinaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                    if(this.pacienteId != null){
                      this.escarlatinaForm.controls["siNo"].setValue(true)
                      this.escarlatinaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                      
                    }
                  break;
                  case 7:
                    this.parasitosisForm.controls["siNo"].setValue(true)
                    this.parasitosisForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                    if(this.pacienteId != null){
                      this.parasitosisForm.controls["siNo"].setValue(true)
                      this.parasitosisForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                      
                    }
                  break;
                  case 8:
                    this.hepatitisPyPForm.controls["siNo"].setValue(true)
                    this.hepatitisPyPForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                    if(this.pacienteId != null){
                      this.hepatitisPyPForm.controls["siNo"].setValue(true)
                      this.hepatitisPyPForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                      
                    }
                  break;
                  case 9:
                    this.SIDAForm.controls["siNo"].setValue(true)
                    this.SIDAForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                    if(this.pacienteId != null){
                      this.SIDAForm.controls["siNo"].setValue(true)
                      this.SIDAForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                      
                    }
                  break;
                  case 10:
                    this.asmaForm.controls["siNo"].setValue(true)
                    this.asmaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                    if(this.pacienteId != null){
                      this.asmaForm.controls["siNo"].setValue(true)
                      this.asmaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                      
                    }
                  break;
                  case 11:
                    this.disfuncionesEndocrinasForm.controls["siNo"].setValue(true)
                    this.disfuncionesEndocrinasForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                    if(this.pacienteId != null){
                      this.disfuncionesEndocrinasForm.controls["siNo"].setValue(true)
                      this.disfuncionesEndocrinasForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                      
                    }
                  break;
                  case 12:
                    this.hipertensionForm.controls["siNo"].setValue(true)
                    this.hipertensionForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                    if(this.pacienteId != null){
                      this.hipertensionForm.controls["siNo"].setValue(true)
                      this.hipertensionForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                      
                    }
                  break;
                  case 13:
                    this.cancerForm.controls["siNo"].setValue(true)
                    this.cancerForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                    if(this.pacienteId != null){
                      this.cancerForm.controls["siNo"].setValue(true)
                      this.cancerForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                      
                    }
                  break;
              case 14:
                this.enfTransSexForm.controls["siNo"].setValue(true)
                this.enfTransSexForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.enfTransSexForm.controls["siNo"].setValue(true)
                  this.enfTransSexForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
                  case 15:
                this.epilepsiaPyPForm.controls["siNo"].setValue(true)
                this.epilepsiaPyPForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.epilepsiaPyPForm.controls["siNo"].setValue(true)
                  this.epilepsiaPyPForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
                  case 16:
                this.amigdalitisForm.controls["siNo"].setValue(true)
                this.amigdalitisForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.amigdalitisForm.controls["siNo"].setValue(true)
                  this.amigdalitisForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
                  case 17:
                this.tubercolosisForm.controls["siNo"].setValue(true)
                this.tubercolosisForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.tubercolosisForm.controls["siNo"].setValue(true)
                  this.tubercolosisForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
                  case 18:
                this.fiebreReumaticaForm.controls["siNo"].setValue(true)
                this.fiebreReumaticaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.fiebreReumaticaForm.controls["siNo"].setValue(true)
                  this.fiebreReumaticaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
                  case 19:
                this.diabetesPyPForm.controls["siNo"].setValue(true)
                this.diabetesPyPForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.diabetesPyPForm.controls["siNo"].setValue(true)
                  this.diabetesPyPForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
                  case 20:
                this.enfCardiovascularesForm.controls["siNo"].setValue(true)
                this.enfCardiovascularesForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.enfCardiovascularesForm.controls["siNo"].setValue(true)
                  this.enfCardiovascularesForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
                  case 21:
                this.artritisPyPForm.controls["siNo"].setValue(true)
                this.artritisPyPForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.artritisPyPForm.controls["siNo"].setValue(true)
                  this.artritisPyPForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
                  case 22:
                this.traumatitisConSecuelasForm.controls["siNo"].setValue(true)
                this.traumatitisConSecuelasForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.traumatitisConSecuelasForm.controls["siNo"].setValue(true)
                  this.traumatitisConSecuelasForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
                  case 23:
                this.intervencionQuirurgicaForm.controls["siNo"].setValue(true)
                this.intervencionQuirurgicaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.intervencionQuirurgicaForm.controls["siNo"].setValue(true)
                  this.intervencionQuirurgicaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
                  case 24:
                this.transfusionSanguineaForm.controls["siNo"].setValue(true)
                this.transfusionSanguineaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.transfusionSanguineaForm.controls["siNo"].setValue(true)
                  this.transfusionSanguineaForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
                  case 25:
                this.alergiaAForm.controls["siNo"].setValue(true)
                this.alergiaAForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                if(this.pacienteId != null){
                  this.alergiaAForm.controls["siNo"].setValue(true)
                  this.alergiaAForm.controls["fechaAgno"].setValue(this.antecedentesPyP.fechaAgno)
                  
                }
                  break;
            }
          }
        }
      })
    }

    isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
      return k in x;
    }
}
