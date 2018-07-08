import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WuerfeSpeedballUpdateComponent } from './wuerfe-speedball-update.component';

describe('WuerfeSpeedballUpdateComponent', () => {
  let component: WuerfeSpeedballUpdateComponent;
  let fixture: ComponentFixture<WuerfeSpeedballUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WuerfeSpeedballUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WuerfeSpeedballUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
