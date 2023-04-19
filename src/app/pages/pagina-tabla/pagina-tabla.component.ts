import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IDataEmpleado } from 'src/app/interfaces/empleadosInterface';
import { EmpleadoService } from 'src/app/services/empleado.service';

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
              private empleadoService: EmpleadoService){

  }

  ngOnInit(): void {
    this.iniColumnaTabla();
    this.inicioMenu();

    console.log('Hola estoy aqui desde ngOninit');

    this.empleadoService.getAllEmployee().subscribe({
      next: (datos) => {
        console.log(datos);
        this.listEmpleado = datos.data;
      },
      error: (err) => {
        console.log(err);
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

  inicioMenu(){
    this.listMenu = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Tabla',
        icon: 'pi pi-fw pi-table',
      }
    ];
    this.activeItem = this.listMenu[0];
  }

}
