import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { NewClienteComponent } from './components/new-cliente/new-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DatosGeneralesComponent } from './components/datos-generales/datos-generales.component';
import { AntecedentesFyHComponent } from './components/antecedentes-fy-h/antecedentes-fy-h.component';
import { NewDatosGeneralesComponent } from './components/new-datos-generales/new-datos-generales.component';
import { NewAntecedentesFyHComponent } from './components/new-antecedentes-fy-h/new-antecedentes-fy-h.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { NewAntecedentesPyPComponent } from './components/new-antecedentes-py-p/new-antecedentes-py-p.component';
import { DatosGeneralesDialogComponent } from './dialogs/datos-generales-dialog/datos-generales-dialog.component';
import { NewAntecedentesPnoPComponent } from './components/new-antecedentes-pno-p/new-antecedentes-pno-p.component';
import { NewPadecimientosComponent } from './components/new-padecimientos/new-padecimientos.component';
import { NewAnalisisFacialComponent } from './components/new-analisis-facial/new-analisis-facial.component';
import { NewAnalisisFuncionalComponent } from './components/new-analisis-funcional/new-analisis-funcional.component';
import { NewEvaluacionClinicaInfantilComponent } from './components/new-evaluacion-clinica-infantil/new-evaluacion-clinica-infantil.component';
import { NewEvaluacionClinicaComponent } from './components/new-evaluacion-clinica/new-evaluacion-clinica.component';
import { NewConsentimientoComponent } from './components/new-consentimiento/new-consentimiento.component';
import { NewPagosComponent } from './components/new-pagos/new-pagos.component';
import { NewPacienteComponent } from './components/new-paciente/new-paciente.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PdfComponent } from './components/pdf/pdf.component';
import { NewConsentimientoPDFComponent } from './components/new-consentimiento-pdf/new-consentimiento-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    NewClienteComponent,
    DatosGeneralesComponent,
    AntecedentesFyHComponent,
    NewDatosGeneralesComponent,
    NewAntecedentesFyHComponent,
    MenuComponent,
    NewAntecedentesPyPComponent,
    DatosGeneralesDialogComponent,
    NewAntecedentesPnoPComponent,
    NewPadecimientosComponent,
    NewAnalisisFacialComponent,
    NewAnalisisFuncionalComponent,
    NewEvaluacionClinicaInfantilComponent,
    NewEvaluacionClinicaComponent,
    NewConsentimientoComponent,
    NewPagosComponent,
    NewPacienteComponent,
    PdfComponent,
    NewConsentimientoPDFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync(), provideNativeDateAdapter()],
  bootstrap: [AppComponent]
})
export class AppModule { }
