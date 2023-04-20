import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit{

  listMenu: MenuItem[] = [];

  ngOnInit(): void {
    this.inicioMenu();
  }

  inicioMenu(){
    this.listMenu = [
      {
        label: 'Inicio',
        routerLink: '/inicio',
        icon: 'pi pi-home'
      },
      {
        label: 'Tabla',
        routerLink: '/tabla',
        icon: 'pi pi-table'
      },
      {
        label: 'Grafico',
        routerLink: '/grafico',
        icon: 'pi pi-spin pi-cog'
      }
    ];
  }

}
