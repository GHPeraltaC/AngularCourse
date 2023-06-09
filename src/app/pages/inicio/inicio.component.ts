import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
nombre = 'Cristhofer';
apellido = 'Peralta';
loadingVisible = false;
formEmpleado!: FormGroup;

constructor(private ruta: Router ,
  private mensajes: MessageService){
}

ngOnInit(): void {
  this.buildFormulario();
}

  visualizarLoading(){
    //codigo de loading
    this.loadingVisible = true;
    setTimeout(() => {
      this.loadingVisible = false;
    }, 2000);
  }

  buildFormulario(){
    this.formEmpleado = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        salary: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required])
      }
    );
  }

  verificar(){
    console.log(this.formEmpleado);
    if (this.formEmpleado.valid){
      this.mensajes.add({ severity: 'success', summary: 'Formulario Correcto', detail: 'Exito'})
    } else {
      this.mensajes.add({ severity: 'error', summary: 'Formulario Incorrecto', detail: 'Llene todos los campos.'})
    }
  }

  irPaginaTabla(){
    this.ruta.navigate(['tabla']);
  }

  irPaginaGraficos(){
    this.ruta.navigate(['grafico']);
  }

}
