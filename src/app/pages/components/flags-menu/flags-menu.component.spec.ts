import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsMenuComponent } from './flags-menu.component';

describe('FlagsMenuComponent', () => {
  let component: FlagsMenuComponent;
  let fixture: ComponentFixture<FlagsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
