import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosGeneralesComponent } from './components/datos-generales/datos-generales.component';
import { NewDatosGeneralesComponent } from './components/new-datos-generales/new-datos-generales.component';
import { NewPacienteComponent } from './components/new-paciente/new-paciente.component';

const routes: Routes = [
  {
    path: "datos",
    component: DatosGeneralesComponent
  },
  {
    path: "new-dato",
    component: NewPacienteComponent
  },
  {
    path: "new-dato/:id",
    component: NewPacienteComponent
  },
  {
    path: '**',
    redirectTo: 'datos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
