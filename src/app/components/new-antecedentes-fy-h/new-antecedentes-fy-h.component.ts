import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AntecedentesFyHService } from '../../services/antecedentes-fy-h.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AntecedentesFyH } from '../../models/antecedentes-fy-h';
import { DatosGenerales } from '../../models/datos-generales';

@Component({
  selector: 'app-new-antecedentes-fy-h',
  templateUrl: './new-antecedentes-fy-h.component.html',
  styleUrl: './new-antecedentes-fy-h.component.css'
})
export class NewAntecedentesFyHComponent implements OnInit {
  @Input() datosGenerales!: DatosGenerales;

  pacienteId: number = 0
  paciente: string = ''
  
  patologiasArray: FormGroup[] = []
  completadoAntecedentesFyH = false;
  antecedentesFyH?: any;

  constructor(private formBuilder: FormBuilder, 
    private antecedentesFyHService: AntecedentesFyHService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    console.log(this.datosGenerales)
    //this.paciente = this.datosGenerales.nombre
    //this.pacienteId = this.datosGenerales.id
    //=========ANTECEDENTES PERSONALES Y HEREDITARIOS========
        this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.antecedentesFyHService.getAntecedentesEdit(id)),
        )
        .subscribe(antecedentesFyH => {
          this.convertirABoolean(antecedentesFyH)
          return;
        })
  }

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
        "idDatosGenerales": [this.pacienteId]
      })

      observacionesForm: FormGroup = this.formBuilder.group({
        "observacionesPatologias": [""],
        "idDatosGenerales": [this.pacienteId]
      })

      saveAntecedentesFyH(): void {
        this.completadoAntecedentesFyH = true;
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
        //INSERTAR APARTE LAS OBSERVACIONES
        
        //console.log(this.patologiasArray)*/
        this.patologiasArray.forEach(element => {
          this.cambioValorPatologiaBoolToNumber(element)
          this.antecedentesFyHService.postAntecedentes(element.value).subscribe(patologia => {
            console.log(element.value)
          })
        });
      }
    
      updateAntecedentesFyH(){
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
        //INSERTAR APARTE LAS OBSERVACIONES
        
        this.patologiasArray.forEach(element => {
          this.cambioValorPatologiaBoolToNumber(element)
          this.antecedentesFyHService.updateAntecedentes(element.value).subscribe(patologia => {
            console.log("paciente actualizado")
          })
        });
      }

      convertirABoolean(antecedentesFyH: AntecedentesFyH){
        //El problema que me enfrento aqui es que TS no infiere 
        //correctamente por lo que hace es solamente
        //ver que esta recibiendo un arreglo y es por eso que cuando 
        //se utiliza Object.keys solo recibimos un
        //arreglo con las claves
        const keys = Object.keys(antecedentesFyH);
    
        keys.forEach((key) => {
          if (this.isKey(antecedentesFyH, key)) {
            this.antecedentesFyH = antecedentesFyH[key];
            if(Number.isInteger(this.antecedentesFyH.madre) && this.antecedentesFyH.madre != 0){
              let idPatologia = this.antecedentesFyH.idPatologias
              switch ( idPatologia ) {
                case 1:
                  this.diabetesForm.controls["madre"].setValue(true)
                  if(this.pacienteId != null){
                    this.diabetesForm.controls["madre"].setValue(idPatologia)
                  }
                    break;
                case 2:
                  this.hipertensionAForm.controls["madre"].setValue(true)
                  if(this.pacienteId != null){
                    this.hipertensionAForm.controls["madre"].setValue(idPatologia)
                  }
                    break;
                case 3:
                  this.cardiopatiaForm.controls["madre"].setValue(true)
                  if(this.pacienteId != null){
                    this.cardiopatiaForm.controls["madre"].setValue(idPatologia)
                  }
                    break;
                case 4:
                  this.neoplasiasForm.controls["madre"].setValue(true)
                  if(this.pacienteId != null){
                    this.neoplasiasForm.controls["madre"].setValue(idPatologia)
                  }
                    break;
                case 5:
                  this.epilepsiaForm.controls["madre"].setValue(true)
                  if(this.pacienteId != null){
                    this.epilepsiaForm.controls["madre"].setValue(idPatologia)
                  }
                    break;
                case 6:
                  this.malformacionesForm.controls["madre"].setValue(true)
                  if(this.pacienteId != null){
                    this.malformacionesForm.controls["madre"].setValue(idPatologia)
                  }
                    break;
                case 7:
                  this.SIDAForm.controls["madre"].setValue(true)
                  if(this.pacienteId != null){
                    this.SIDAForm.controls["madre"].setValue(idPatologia)
                  }
                    break;
                case 8:
                  this.enfermedadesRForm.controls["madre"].setValue(true)
                  if(this.pacienteId != null){
                    this.enfermedadesRForm.controls["madre"].setValue(idPatologia)
                  }
                    break;
                case 9:
                  this.hepatitisForm.controls["madre"].setValue(true)
                  if(this.pacienteId != null){
                    this.hepatitisForm.controls["madre"].setValue(idPatologia)
                  }
                    break;
                case 10:
                  this.artritisForm.controls["madre"].setValue(true)
                  if(this.pacienteId != null){
                    this.artritisForm.controls["madre"].setValue(idPatologia)
                  }
                    break;
                case 11:
                  this.otraForm.controls["madre"].setValue(true)
                  if(this.pacienteId != null){
                    this.otraForm.controls["madre"].setValue(idPatologia)
                  }
                    break;
                case 12:
                  this.aparentementeSForm.controls["madre"].setValue(true)
                  if(this.pacienteId != null){
                    this.aparentementeSForm.controls["madre"].setValue(idPatologia)
                  }
                    break;           
                }
            }
            if(Number.isInteger(this.antecedentesFyH.abuelaM) && this.antecedentesFyH.abuelaM != 0){
              //console.log(this.diabetesForm.get("idPatologias")?.value)
              let idPatologia = this.antecedentesFyH.idPatologias
              switch ( idPatologia ) {
                case 1:
                  this.diabetesForm.controls["abuelaM"].setValue(true)
                  if(this.pacienteId != null){
                    this.diabetesForm.controls["abuelaM"].setValue(idPatologia)
                    
                  }
                    break;
                case 2:
                  this.hipertensionAForm.controls["abuelaM"].setValue(true)
                  if(this.pacienteId != null){
                    this.hipertensionAForm.controls["abuelaM"].setValue(idPatologia)
                    
                  }
                    break;
                case 3:
                  this.cardiopatiaForm.controls["abuelaM"].setValue(true)
                  if(this.pacienteId != null){
                    this.cardiopatiaForm.controls["abuelaM"].setValue(idPatologia)
                    
                  }
                    break;
                case 4:
                  this.neoplasiasForm.controls["abuelaM"].setValue(true)
                  if(this.pacienteId != null){
                    this.neoplasiasForm.controls["abuelaM"].setValue(idPatologia)
                    
                  }
                    break;
                case 5:
                  this.epilepsiaForm.controls["abuelaM"].setValue(true)
                  if(this.pacienteId != null){
                    this.epilepsiaForm.controls["abuelaM"].setValue(idPatologia)
                    
                  }
                    break;
                case 6:
                  this.malformacionesForm.controls["abuelaM"].setValue(true)
                  if(this.pacienteId != null){
                    this.malformacionesForm.controls["abuelaM"].setValue(idPatologia)
                    
                  }
                    break;
                case 7:
                  this.SIDAForm.controls["abuelaM"].setValue(true)
                  if(this.pacienteId != null){
                    this.SIDAForm.controls["abuelaM"].setValue(idPatologia)
                    
                  }
                    break;
                case 8:
                  this.enfermedadesRForm.controls["abuelaM"].setValue(true)
                  if(this.pacienteId != null){
                    this.enfermedadesRForm.controls["abuelaM"].setValue(idPatologia)
                    
                  }
                    break;
                case 9:
                  this.hepatitisForm.controls["abuelaM"].setValue(true)
                  if(this.pacienteId != null){
                    this.hepatitisForm.controls["abuelaM"].setValue(idPatologia)
                    
                  }
                    break;
                case 10:
                  this.artritisForm.controls["abuelaM"].setValue(true)
                  if(this.pacienteId != null){
                    this.artritisForm.controls["abuelaM"].setValue(idPatologia)
                    
                  }
                    break;
                case 11:
                  this.otraForm.controls["abuelaM"].setValue(true)
                  if(this.pacienteId != null){
                    this.otraForm.controls["abuelaM"].setValue(idPatologia)
                    
                  }
                    break;
                case 12:
                  this.aparentementeSForm.controls["abuelaM"].setValue(true)
                  if(this.pacienteId != null){
                    this.aparentementeSForm.controls["abuelaM"].setValue(idPatologia)
                    
                  }
                    break;
                }
            }
            if(Number.isInteger(this.antecedentesFyH.abueloM) && this.antecedentesFyH.abueloM != 0){
              //console.log(this.diabetesForm.get("idPatologias")?.value)
              let idPatologia = this.antecedentesFyH.idPatologias
              switch ( idPatologia ) {
                case 1:
                  this.diabetesForm.controls["abueloM"].setValue(true)
                  if(this.pacienteId != null){
                    this.diabetesForm.controls["abueloM"].setValue(idPatologia)
                    
                  }
                    break;
                case 2:
                  this.hipertensionAForm.controls["abueloM"].setValue(true)
                  if(this.pacienteId != null){
                    this.hipertensionAForm.controls["abueloM"].setValue(idPatologia)
                    
                  }
                    break;
                case 3:
                  this.cardiopatiaForm.controls["abueloM"].setValue(true)
                  if(this.pacienteId != null){
                    this.cardiopatiaForm.controls["abueloM"].setValue(idPatologia)
                    
                  }
                    break;
                case 4:
                  this.neoplasiasForm.controls["abueloM"].setValue(true)
                  if(this.pacienteId != null){
                    this.neoplasiasForm.controls["abueloM"].setValue(idPatologia)
                    
                  }
                    break;
                case 5:
                  this.epilepsiaForm.controls["abueloM"].setValue(true)
                  if(this.pacienteId != null){
                    this.epilepsiaForm.controls["abueloM"].setValue(idPatologia)
                    
                  }
                      break;
                case 6:
                  this.malformacionesForm.controls["abueloM"].setValue(true)
                  if(this.pacienteId != null){
                    this.malformacionesForm.controls["abueloM"].setValue(idPatologia)
                    
                  }
                    break;
                case 7:
                  this.SIDAForm.controls["abueloM"].setValue(true)
                  if(this.pacienteId != null){
                    this.SIDAForm.controls["abueloM"].setValue(idPatologia)
                    
                  }
                    break;
                case 8:
                  this.enfermedadesRForm.controls["abueloM"].setValue(true)
                  if(this.pacienteId != null){
                    this.enfermedadesRForm.controls["abueloM"].setValue(idPatologia)
                    
                  }
                    break;
                case 9:
                  this.hepatitisForm.controls["abueloM"].setValue(true)
                  if(this.pacienteId != null){
                    this.hepatitisForm.controls["abueloM"].setValue(idPatologia)
                    
                  }
                    break;
                case 10:
                  this.artritisForm.controls["abueloM"].setValue(true)
                  if(this.pacienteId != null){
                    this.artritisForm.controls["abueloM"].setValue(idPatologia)
                    
                  }
                    break;
                case 11:
                  this.otraForm.controls["abueloM"].setValue(true)
                  if(this.pacienteId != null){
                    this.otraForm.controls["abueloM"].setValue(idPatologia)
                    
                  }
                    break;
                case 12:
                  this.aparentementeSForm.controls["abueloM"].setValue(true)
                  if(this.pacienteId != null){
                    this.aparentementeSForm.controls["abueloM"].setValue(idPatologia)
                    
                  }
                    break;           
                }
            }
            if(Number.isInteger(this.antecedentesFyH.otrosM) && this.antecedentesFyH.otrosM != 0){
              //console.log(this.diabetesForm.get("idPatologias")?.value)
              let idPatologia = this.antecedentesFyH.idPatologias
              switch ( idPatologia ) {
                case 1:
                  this.diabetesForm.controls["otrosM"].setValue(true)
                  if(this.pacienteId != null){
                    this.diabetesForm.controls["otrosM"].setValue(idPatologia)
                    
                  }
                    break;
                case 2:
                  this.hipertensionAForm.controls["otrosM"].setValue(true)
                  if(this.pacienteId != null){
                    this.hipertensionAForm.controls["otrosM"].setValue(idPatologia)
                    
                  }
                    break;
                case 3:
                  this.cardiopatiaForm.controls["otrosM"].setValue(true)
                  if(this.pacienteId != null){
                    this.cardiopatiaForm.controls["otrosM"].setValue(idPatologia)
                    
                  }
                    break;
                case 4:
                  this.neoplasiasForm.controls["otrosM"].setValue(true)
                  if(this.pacienteId != null){
                    this.neoplasiasForm.controls["otrosM"].setValue(idPatologia)
                    
                  }
                    break;
                case 5:
                  this.epilepsiaForm.controls["otrosM"].setValue(true)
                  if(this.pacienteId != null){
                    this.epilepsiaForm.controls["otrosM"].setValue(idPatologia)
                    
                  }
                      break;
                case 6:
                  this.malformacionesForm.controls["otrosM"].setValue(true)
                  if(this.pacienteId != null){
                    this.malformacionesForm.controls["otrosM"].setValue(idPatologia)
                    
                  }
                    break;
                case 7:
                  this.SIDAForm.controls["otrosM"].setValue(true)
                  if(this.pacienteId != null){
                    this.SIDAForm.controls["otrosM"].setValue(idPatologia)
                    
                  }
                    break;
                case 8:
                  this.enfermedadesRForm.controls["otrosM"].setValue(true)
                  if(this.pacienteId != null){
                    this.enfermedadesRForm.controls["otrosM"].setValue(idPatologia)
                    
                  }
                    break;
                case 9:
                  this.hepatitisForm.controls["otrosM"].setValue(true)
                  if(this.pacienteId != null){
                    this.hepatitisForm.controls["otrosM"].setValue(idPatologia)
                    
                  }
                    break;
                case 10:
                  this.artritisForm.controls["otrosM"].setValue(true)
                  if(this.pacienteId != null){
                    this.artritisForm.controls["otrosM"].setValue(idPatologia)
                    
                  }
                    break;
                case 11:
                  this.otraForm.controls["otrosM"].setValue(true)
                  if(this.pacienteId != null){
                    this.otraForm.controls["otrosM"].setValue(idPatologia)
                    
                  }
                    break;
                case 12:
                  this.aparentementeSForm.controls["otrosM"].setValue(true)
                  if(this.pacienteId != null){
                    this.aparentementeSForm.controls["otrosM"].setValue(idPatologia)
                    
                  }
                    break;           
                }
            }
            if(Number.isInteger(this.antecedentesFyH.padre) && this.antecedentesFyH.padre != 0){
              //console.log(this.diabetesForm.get("idPatologias")?.value)
              let idPatologia = this.antecedentesFyH.idPatologias
              switch ( idPatologia ) {
                case 1:
                  this.diabetesForm.controls["padre"].setValue(true)
                  if(this.pacienteId != null){
                    this.diabetesForm.controls["padre"].setValue(idPatologia)
                    
                  }
                    break;
                case 2:
                  this.hipertensionAForm.controls["padre"].setValue(true)
                  if(this.pacienteId != null){
                    this.hipertensionAForm.controls["padre"].setValue(idPatologia)
                    
                  }
                    break;
                case 3:
                  this.cardiopatiaForm.controls["padre"].setValue(true)
                  if(this.pacienteId != null){
                    this.cardiopatiaForm.controls["padre"].setValue(idPatologia)
                    
                  }
                    break;
                case 4:
                  this.neoplasiasForm.controls["padre"].setValue(true)
                  if(this.pacienteId != null){
                    this.neoplasiasForm.controls["padre"].setValue(idPatologia)
                    
                  }
                    break;
                case 5:
                  this.epilepsiaForm.controls["padre"].setValue(true)
                  if(this.pacienteId != null){
                    this.epilepsiaForm.controls["padre"].setValue(idPatologia)
                    
                  }
                      break;
                case 6:
                  this.malformacionesForm.controls["padre"].setValue(true)
                  if(this.pacienteId != null){
                    this.malformacionesForm.controls["padre"].setValue(idPatologia)
                    
                  }
                    break;
                case 7:
                  this.SIDAForm.controls["padre"].setValue(true)
                  if(this.pacienteId != null){
                    this.SIDAForm.controls["padre"].setValue(idPatologia)
                    
                  }
                    break;
                case 8:
                  this.enfermedadesRForm.controls["padre"].setValue(true)
                  if(this.pacienteId != null){
                    this.enfermedadesRForm.controls["padre"].setValue(idPatologia)
                    
                  }
                    break;
                case 9:
                  this.hepatitisForm.controls["padre"].setValue(true)
                  if(this.pacienteId != null){
                    this.hepatitisForm.controls["padre"].setValue(idPatologia)
                    
                  }
                    break;
                case 10:
                  this.artritisForm.controls["padre"].setValue(true)
                  if(this.pacienteId != null){
                    this.artritisForm.controls["padre"].setValue(idPatologia)
                    
                  }
                    break;
                case 11:
                  this.otraForm.controls["padre"].setValue(true)
                  if(this.pacienteId != null){
                    this.otraForm.controls["padre"].setValue(idPatologia)
                    
                  }
                    break;
                case 12:
                  this.aparentementeSForm.controls["padre"].setValue(true)
                  if(this.pacienteId != null){
                    this.aparentementeSForm.controls["padre"].setValue(idPatologia)
                    
                  }
                    break;           
                }
            }
            if(Number.isInteger(this.antecedentesFyH.abuelaP) && this.antecedentesFyH.abuelaP != 0){
              //console.log(this.diabetesForm.get("idPatologias")?.value)
              let idPatologia = this.antecedentesFyH.idPatologias
              switch ( idPatologia ) {
                case 1:
                  this.diabetesForm.controls["abuelaP"].setValue(true)
                  if(this.pacienteId != null){
                    this.diabetesForm.controls["abuelaP"].setValue(idPatologia)
                    
                  }
                    break;
                case 2:
                  this.hipertensionAForm.controls["abuelaP"].setValue(true)
                  if(this.pacienteId != null){
                    this.hipertensionAForm.controls["abuelaP"].setValue(idPatologia)
                    
                  }
                    break;
                case 3:
                  this.cardiopatiaForm.controls["abuelaP"].setValue(true)
                  if(this.pacienteId != null){
                    this.cardiopatiaForm.controls["abuelaP"].setValue(idPatologia)
                    
                  }
                    break;
                case 4:
                  this.neoplasiasForm.controls["abuelaP"].setValue(true)
                  if(this.pacienteId != null){
                    this.neoplasiasForm.controls["abuelaP"].setValue(idPatologia)
                    
                  }
                    break;
                case 5:
                  this.epilepsiaForm.controls["abuelaP"].setValue(true)
                  if(this.pacienteId != null){
                    this.epilepsiaForm.controls["abuelaP"].setValue(idPatologia)
                    
                  }
                      break;
                case 6:
                  this.malformacionesForm.controls["abuelaP"].setValue(true)
                  if(this.pacienteId != null){
                    this.malformacionesForm.controls["abuelaP"].setValue(idPatologia)
                    
                  }
                    break;
                case 7:
                  this.SIDAForm.controls["abuelaP"].setValue(true)
                  if(this.pacienteId != null){
                    this.SIDAForm.controls["abuelaP"].setValue(idPatologia)
                    
                  }
                    break;
                case 8:
                  this.enfermedadesRForm.controls["abuelaP"].setValue(true)
                  if(this.pacienteId != null){
                    this.enfermedadesRForm.controls["abuelaP"].setValue(idPatologia)
                    
                  }
                    break;
                case 9:
                  this.hepatitisForm.controls["abuelaP"].setValue(true)
                  if(this.pacienteId != null){
                    this.hepatitisForm.controls["abuelaP"].setValue(idPatologia)
                    
                  }
                    break;
                case 10:
                  this.artritisForm.controls["abuelaP"].setValue(true)
                  if(this.pacienteId != null){
                    this.artritisForm.controls["abuelaP"].setValue(idPatologia)
                    
                  }
                    break;
                case 11:
                  this.otraForm.controls["abuelaP"].setValue(true)
                  if(this.pacienteId != null){
                    this.otraForm.controls["abuelaP"].setValue(idPatologia)
                    
                  }
                    break;
                case 12:
                  this.aparentementeSForm.controls["abuelaP"].setValue(true)
                  if(this.pacienteId != null){
                    this.aparentementeSForm.controls["abuelaP"].setValue(idPatologia)
                    
                  }
                    break;           
                }
            }
            if(Number.isInteger(this.antecedentesFyH.abueloP) && this.antecedentesFyH.abueloP != 0){
              //console.log(this.diabetesForm.get("idPatologias")?.value)
              let idPatologia = this.antecedentesFyH.idPatologias
              switch ( idPatologia ) {
                case 1:
                  this.diabetesForm.controls["abueloP"].setValue(true)
                  if(this.pacienteId != null){
                    this.diabetesForm.controls["abueloP"].setValue(idPatologia)
                    
                  }
                    break;
                case 2:
                  this.hipertensionAForm.controls["abueloP"].setValue(true)
                  if(this.pacienteId != null){
                    this.hipertensionAForm.controls["abueloP"].setValue(idPatologia)
                    
                  }
                    break;
                case 3:
                  this.cardiopatiaForm.controls["abueloP"].setValue(true)
                  if(this.pacienteId != null){
                    this.cardiopatiaForm.controls["abueloP"].setValue(idPatologia)
                    
                  }
                    break;
                case 4:
                  this.neoplasiasForm.controls["abueloP"].setValue(true)
                  if(this.pacienteId != null){
                    this.neoplasiasForm.controls["abueloP"].setValue(idPatologia)
                    
                  }
                    break;
                case 5:
                  this.epilepsiaForm.controls["abueloP"].setValue(true)
                  if(this.pacienteId != null){
                    this.epilepsiaForm.controls["abueloP"].setValue(idPatologia)
                    
                  }
                      break;
                case 6:
                  this.malformacionesForm.controls["abueloP"].setValue(true)
                  if(this.pacienteId != null){
                    this.malformacionesForm.controls["abueloP"].setValue(idPatologia)
                    
                  }
                    break;
                case 7:
                  this.SIDAForm.controls["abueloP"].setValue(true)
                  if(this.pacienteId != null){
                    this.SIDAForm.controls["abueloP"].setValue(idPatologia)
                    
                  }
                    break;
                case 8:
                  this.enfermedadesRForm.controls["abueloP"].setValue(true)
                  if(this.pacienteId != null){
                    this.enfermedadesRForm.controls["abueloP"].setValue(idPatologia)
                    
                  }
                    break;
                case 9:
                  this.hepatitisForm.controls["abueloP"].setValue(true)
                  if(this.pacienteId != null){
                    this.hepatitisForm.controls["abueloP"].setValue(idPatologia)
                    
                  }
                    break;
                case 10:
                  this.artritisForm.controls["abueloP"].setValue(true)
                  if(this.pacienteId != null){
                    this.artritisForm.controls["abueloP"].setValue(idPatologia)
                    
                  }
                    break;
                case 11:
                  this.otraForm.controls["abueloP"].setValue(true)
                  if(this.pacienteId != null){
                    this.otraForm.controls["abueloP"].setValue(idPatologia)
                    
                  }
                    break;
                case 12:
                  this.aparentementeSForm.controls["abueloP"].setValue(true)
                  if(this.pacienteId != null){
                    this.aparentementeSForm.controls["abueloP"].setValue(idPatologia)
                    
                  }
                    break;           
                }
            }
            if(Number.isInteger(this.antecedentesFyH.hermanosP) && this.antecedentesFyH.hermanosP != 0){
              //console.log(this.diabetesForm.get("idPatologias")?.value)
              let idPatologia = this.antecedentesFyH.idPatologias
              switch ( idPatologia ) {
                case 1:
                  this.diabetesForm.controls["hermanosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.diabetesForm.controls["hermanosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 2:
                  this.hipertensionAForm.controls["hermanosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.hipertensionAForm.controls["hermanosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 3:
                  this.cardiopatiaForm.controls["hermanosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.cardiopatiaForm.controls["hermanosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 4:
                  this.neoplasiasForm.controls["hermanosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.neoplasiasForm.controls["hermanosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 5:
                  this.epilepsiaForm.controls["hermanosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.epilepsiaForm.controls["hermanosP"].setValue(idPatologia)
                    
                  }
                      break;
                case 6:
                  this.malformacionesForm.controls["hermanosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.malformacionesForm.controls["hermanosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 7:
                  this.SIDAForm.controls["hermanosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.SIDAForm.controls["hermanosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 8:
                  this.enfermedadesRForm.controls["hermanosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.enfermedadesRForm.controls["hermanosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 9:
                  this.hepatitisForm.controls["hermanosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.hepatitisForm.controls["hermanosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 10:
                  this.artritisForm.controls["hermanosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.artritisForm.controls["hermanosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 11:
                  this.otraForm.controls["hermanosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.otraForm.controls["hermanosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 12:
                  this.aparentementeSForm.controls["hermanosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.aparentementeSForm.controls["hermanosP"].setValue(idPatologia)
                    
                  }
                    break;           
                }
            }
            if(Number.isInteger(this.antecedentesFyH.otrosP) && this.antecedentesFyH.otrosP != 0){
              //console.log(this.diabetesForm.get("idPatologias")?.value)
              let idPatologia = this.antecedentesFyH.idPatologias
              switch ( idPatologia ) {
                case 1:
                  this.diabetesForm.controls["otrosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.diabetesForm.controls["otrosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 2:
                  this.hipertensionAForm.controls["otrosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.hipertensionAForm.controls["otrosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 3:
                  this.cardiopatiaForm.controls["otrosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.cardiopatiaForm.controls["otrosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 4:
                  this.neoplasiasForm.controls["otrosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.neoplasiasForm.controls["otrosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 5:
                  this.epilepsiaForm.controls["otrosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.epilepsiaForm.controls["otrosP"].setValue(idPatologia)
                    
                  }
                      break;
                case 6:
                  this.malformacionesForm.controls["otrosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.malformacionesForm.controls["otrosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 7:
                  this.SIDAForm.controls["otrosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.SIDAForm.controls["otrosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 8:
                  this.enfermedadesRForm.controls["otrosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.enfermedadesRForm.controls["otrosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 9:
                  this.hepatitisForm.controls["otrosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.hepatitisForm.controls["otrosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 10:
                  this.artritisForm.controls["otrosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.artritisForm.controls["otrosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 11:
                  this.otraForm.controls["otrosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.otraForm.controls["otrosP"].setValue(idPatologia)
                    
                  }
                    break;
                case 12:
                  this.aparentementeSForm.controls["otrosP"].setValue(true)
                  if(this.pacienteId != null){
                    this.aparentementeSForm.controls["otrosP"].setValue(idPatologia)
                    
                  }
                    break;           
                }
            }
          }
        });
      }

      isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
        return k in x;
      }

      cambioValorPatologiaBoolToNumber(formGroup: FormGroup){
        let idPatologia = formGroup.get('idPatologias')?.value
          Object.keys(formGroup.controls).forEach((key: string) => {
            let valorAntecedente = formGroup.get(key);
            if(valorAntecedente!.value === true){
              formGroup.controls[key].setValue(idPatologia)
            }
            if(valorAntecedente!.value === false){
              formGroup.controls[key].setValue(0)
            }
        });
      }
}
