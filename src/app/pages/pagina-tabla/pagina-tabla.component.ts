import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IDataEmpleado } from 'src/app/interfaces/empleadosInterface';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements OnInit {
  listEmpleado: IDataEmpleado[] = [];
  columnaTabla: any;
  listMenu: MenuItem[] = [];
  activeItem!: MenuItem;

  constructor(private rutas: Router,
              private empleadoService: EmpleadoService,
              private mensajes: MessageService){

  }

  ngOnInit(): void {
    this.iniColumnaTabla();

    console.log('Hola estoy aqui desde ngOninit');

    this.empleadoService.getAllEmployee().subscribe({
      next: (datos) => {
        console.log(datos);
        this.listEmpleado = datos.data;
        this.mensajes.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Consulta Exitosa'})
      },
      error: (err) => {
        console.log(err);
        this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema'})
      }
    });
  }

  iniColumnaTabla(){
    this.columnaTabla = [
      {
        field: 'id', header: 'ID'
      },
      {
        field: 'name', header: 'Nombre'
      },
      {
        field: 'salary', header: 'Salario'
      },
      {
        fields: 'age', header: 'Edad'
      }
    ]
  }

  regresarInicio(){
    this.rutas.navigate(['inicio']);
  }

}
