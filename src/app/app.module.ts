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

@NgModule({
  declarations: [
    AppComponent,
    NewClienteComponent,
    DatosGeneralesComponent,
    AntecedentesFyHComponent,
    NewDatosGeneralesComponent,
    NewAntecedentesFyHComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
