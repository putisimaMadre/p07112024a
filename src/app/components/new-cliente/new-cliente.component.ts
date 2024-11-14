import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrl: './new-cliente.component.css'
})
export class NewClienteComponent {

  constructor(private formBuilder: FormBuilder, 
    private clienteService: ClienteService,
    private router: Router){}

  formCliente: FormGroup = this.formBuilder.group({
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    telefono: ["", Validators.required]
  })

  guardarCliente(): void {
    this.clienteService.postCliente(this.formCliente.value).subscribe(() => this.router.navigate(['/clientes']))
  }
}
