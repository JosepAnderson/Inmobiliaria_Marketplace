import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contactar } from './contactar';

describe('Contactar', () => {
  let component: Contactar;
  let fixture: ComponentFixture<Contactar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactar],
    }).compileComponents();

    fixture = TestBed.createComponent(Contactar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send form when required fields are filled', () => {
    component.formData = {
      nombre: 'Test',
      email: 'test@example.com',
      telefono: '987654321',
      asunto: 'consulta',
      mensaje: 'Test message'
    };
    component.enviarFormulario();
    expect(component.enviado).toBe(true);
  });

  it('should not send form if required fields are empty', () => {
    component.formData = {
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    };
    component.enviarFormulario();
    expect(component.enviado).toBe(false);
  });
});
