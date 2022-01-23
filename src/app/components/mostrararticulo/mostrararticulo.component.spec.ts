import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrararticuloComponent } from './mostrararticulo.component';

describe('MostrararticuloComponent', () => {
  let component: MostrararticuloComponent;
  let fixture: ComponentFixture<MostrararticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrararticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrararticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
