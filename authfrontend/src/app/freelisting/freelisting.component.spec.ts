import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelistingComponent } from './freelisting.component';

describe('FreelistingComponent', () => {
  let component: FreelistingComponent;
  let fixture: ComponentFixture<FreelistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
