import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypepersonnelComponent } from './typepersonnel.component';

describe('TypepersonnelComponent', () => {
  let component: TypepersonnelComponent;
  let fixture: ComponentFixture<TypepersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypepersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypepersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
