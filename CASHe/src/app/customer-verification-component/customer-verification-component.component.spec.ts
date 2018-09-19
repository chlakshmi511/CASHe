import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVerificationComponentComponent } from './customer-verification-component.component';

describe('CustomerVerificationComponentComponent', () => {
  let component: CustomerVerificationComponentComponent;
  let fixture: ComponentFixture<CustomerVerificationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerVerificationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerVerificationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
