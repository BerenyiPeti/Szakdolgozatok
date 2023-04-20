import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelvitelComponent } from './felvitel.component';

describe('FelvitelComponent', () => {
  let component: FelvitelComponent;
  let fixture: ComponentFixture<FelvitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelvitelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FelvitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
