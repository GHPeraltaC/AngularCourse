import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaginaTablaComponent } from './pages/pagina-tabla/pagina-tabla.component';
import { PaginaGraficoComponent } from './pages/pagina-grafico/pagina-grafico.component';
import { PageTransactionalityComponent } from './pages/page-transactionality/page-transactionality.component';

const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent  },
    { path: 'tabla', component: PaginaTablaComponent},
    { path: 'grafico', component: PaginaGraficoComponent},
    { path: 'transactionality', component: PageTransactionalityComponent}

];

@NgModule (
    {
        declarations: [],
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {}
