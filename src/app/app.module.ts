import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoadingComponent } from './components/loading/loading.component';

import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { PaginaTablaComponent } from './pages/pagina-tabla/pagina-tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginaGraficoComponent } from './pages/pagina-grafico/pagina-grafico.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoadingComponent,
    PaginaTablaComponent,
    PaginaGraficoComponent,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    ChartModule,
    CardModule,
    PanelModule,
    MenubarModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
