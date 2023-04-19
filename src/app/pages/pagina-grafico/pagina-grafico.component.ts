import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-grafico',
  templateUrl: './pagina-grafico.component.html',
  styleUrls: ['./pagina-grafico.component.css']
})
export class PaginaGraficoComponent {

  requestStatus: any;
  requestChannel: any;
  requestTransactions: any;
  requestPayment: any;
  requestIdentification: any;

  options: any;

  constructor(private rutas: Router){
  }

  ngOnInit(){

    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.requestStatus = {
            labels: ['Aprobados', 'Negados'],
            datasets: [
                {
                    data: [24, 30],
                    backgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--purple-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--green-300'), documentStyle.getPropertyValue('--purple-300'), documentStyle.getPropertyValue('--green-300')]
                }
            ]
        };

        this.options = {
            cutout: '50%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };

        this.requestChannel = {
          labels: ['Canal de Venta', 'Contact Center', 'PDA', 'DIS', 'ASES'],
          datasets: [
              {
                  data: [12, 12, 10, 10, 10],
                  backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--blue-500'),  documentStyle.getPropertyValue('--pink-500'), documentStyle.getPropertyValue('--purple-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--red-300'), documentStyle.getPropertyValue('--yellow-300'), documentStyle.getPropertyValue('--green-300'), documentStyle.getPropertyValue('--cyan-300'), documentStyle.getPropertyValue('--blue-300'),  documentStyle.getPropertyValue('--pink-300'), documentStyle.getPropertyValue('--purple-300')]
                  }
          ]
        };

        this.requestChannel = {
          labels: ['Tarjeta', 'Contrafactura', 'Banco en Linea', 'Banco no en Linea'],
          datasets: [
              {
                  data: [12, 12, 15, 15],
                  backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--blue-500'),  documentStyle.getPropertyValue('--pink-500'), documentStyle.getPropertyValue('--purple-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--red-300'), documentStyle.getPropertyValue('--yellow-300'), documentStyle.getPropertyValue('--green-300'), documentStyle.getPropertyValue('--cyan-300'), documentStyle.getPropertyValue('--blue-300'),  documentStyle.getPropertyValue('--pink-300'), documentStyle.getPropertyValue('--purple-300')]
              }
          ]
        };

        this.requestIdentification = {
          labels: ['Cedula', 'Ruc', 'Pasaporte'],
          datasets: [
            {
              data: [24, 15, 15],
              backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--blue-500'),  documentStyle.getPropertyValue('--pink-500'), documentStyle.getPropertyValue('--purple-500')],
              hoverBackgroundColor: [documentStyle.getPropertyValue('--red-300'), documentStyle.getPropertyValue('--yellow-300'), documentStyle.getPropertyValue('--green-300'), documentStyle.getPropertyValue('--cyan-300'), documentStyle.getPropertyValue('--blue-300'),  documentStyle.getPropertyValue('--pink-300'), documentStyle.getPropertyValue('--purple-300')]
            }
          ]
        };
  }

  regresarInicio(){
    this.rutas.navigate(['inicio']);
  }

}
