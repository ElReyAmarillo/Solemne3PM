import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GeneraQrPage } from './genera-qr.page';
import { QRCodeComponent } from 'angularx-qrcode';

describe('GeneraQrPage', () => {
  let component: GeneraQrPage;
  let fixture: ComponentFixture<GeneraQrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // En lugar de "declarations", se debe importar el componente standalone
      imports: [IonicModule.forRoot(), FormsModule, GeneraQrPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneraQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('P7 - Creación exitosa del componente', () => {
    expect(component).toBeTruthy(); // Verifica que el componente no es null y se crea correctamente.
  });

  it('P8 - Valor inicial de qrData del "Texto de base"', () => {
    expect(component.qrData).toEqual('Texto de base'); // Asume que qrData tiene un valor inicial definido.
  });

  it('P9 - Generación del código QR al pulsar un botón', () => {
    component.qrData = 'Texto de prueba'; // Asigna un valor de prueba a qrData.
    component.generateQRCode(); // Llama al método que genera el código QR.
    expect(component.createdCode).toEqual('Texto de prueba'); // Verifica que createdCode se actualice correctamente.
  });

  it('P10 - Verificar que el código QR no se muestra inicialmente', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('qrcode')).toBeNull();// verifica que el código qr no esta.
  });

  it('P11 - Actualización de createdCode al llamar a generateQRCode()', () => {
    component.qrData = 'Nuevo código';
    component.generateQRCode(); // Genera el código QR.
    expect(component.createdCode).toEqual('Nuevo código'); // Verifica que createdCode coincida con el texto ingresado.
  });
});
