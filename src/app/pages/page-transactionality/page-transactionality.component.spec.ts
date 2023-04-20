import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTransactionalityComponent } from './page-transactionality.component';

describe('PageTransactionalityComponent', () => {
  let component: PageTransactionalityComponent;
  let fixture: ComponentFixture<PageTransactionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTransactionalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTransactionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
