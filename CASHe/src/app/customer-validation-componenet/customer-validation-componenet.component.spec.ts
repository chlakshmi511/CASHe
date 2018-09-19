import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerValidationComponenetComponent } from './customer-validation-componenet.component';

describe('CustomerValidationComponenetComponent', () => {
  let component: CustomerValidationComponenetComponent;
  let fixture: ComponentFixture<CustomerValidationComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerValidationComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerValidationComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
