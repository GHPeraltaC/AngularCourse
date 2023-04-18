import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
nombre = 'Cristhofer';
apellido = 'Peralta';
loadingVisible = false;

constructor(private ruta: Router ){

}

  visualizarLoading(){
    //codigo de loading
    this.loadingVisible = true;
    setTimeout(() => {
      this.loadingVisible = false;
    }, 2000);
  }

  irPaginaTabla(){
    this.ruta.navigate(['tabla']);
  }

  irPaginaGraficos(){
    this.ruta.navigate(['grafico']);
  }

}
