import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-grafico',
  templateUrl: './pagina-grafico.component.html',
  styleUrls: ['./pagina-grafico.component.css']
})
export class PaginaGraficoComponent {

  data: any;

  options: any;

  ngOnInit(){

    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['CED', 'RUC', 'PAS'],
            datasets: [
                {
                    data: [12, 12, 30],
                    backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--red-300'), documentStyle.getPropertyValue('--yellow-300'), documentStyle.getPropertyValue('--green-300')]
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

  }

}
