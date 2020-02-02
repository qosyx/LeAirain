import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeproduitComponent } from './typeproduit.component';

describe('TypeproduitComponent', () => {
  let component: TypeproduitComponent;
  let fixture: ComponentFixture<TypeproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
