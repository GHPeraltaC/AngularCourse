import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGraficoComponent } from './pagina-grafico.component';

describe('PaginaGraficoComponent', () => {
  let component: PaginaGraficoComponent;
  let fixture: ComponentFixture<PaginaGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaGraficoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
