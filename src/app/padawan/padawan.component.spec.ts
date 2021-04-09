import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadawanComponent } from './padawan.component';

describe('PadawanComponent', () => {
  let component: PadawanComponent;
  let fixture: ComponentFixture<PadawanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadawanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
