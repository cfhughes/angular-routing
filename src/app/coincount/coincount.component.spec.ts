import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoincountComponent } from './coincount.component';

describe('CoincountComponent', () => {
  let component: CoincountComponent;
  let fixture: ComponentFixture<CoincountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoincountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoincountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
