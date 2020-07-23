import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductolistaComponent } from './productolista.component';

describe('ProductolistaComponent', () => {
  let component: ProductolistaComponent;
  let fixture: ComponentFixture<ProductolistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductolistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
