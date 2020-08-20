import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtractorE2eBuilderComponent } from './protractor-e2e-builder.component';

describe('ProtractorE2eBuilderComponent', () => {
  let component: ProtractorE2eBuilderComponent;
  let fixture: ComponentFixture<ProtractorE2eBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtractorE2eBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtractorE2eBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
