import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevsisarPedidoComponent } from './revsisar-pedido.component';

describe('RevsisarPedidoComponent', () => {
  let component: RevsisarPedidoComponent;
  let fixture: ComponentFixture<RevsisarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevsisarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevsisarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
