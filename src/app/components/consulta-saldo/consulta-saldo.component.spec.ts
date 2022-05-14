import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSaldoComponent } from './consulta-saldo.component';

describe('ConsultaSaldoComponent', () => {
  let component: ConsultaSaldoComponent;
  let fixture: ComponentFixture<ConsultaSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deveria apontar classe 0 para zero', () => {
    expect(component.classNamePorValor(0)).toBe('zero');
    expect(component.classNamePorValor(0.001)).toBe('zero');
    expect(component.classNamePorValor(0.0099)).toBe('zero');
  });

  it('deveria apontar classe -1 para negativo', () => {
    expect(component.classNamePorValor(-1)).toBe('negativo');
    expect(component.classNamePorValor(-0.1)).toBe('negativo');
  });
});
