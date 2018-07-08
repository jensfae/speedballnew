import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WuerfeSpeedballComponent } from './wuerfe-speedball.component';

describe('WuerfeSpeedballComponent', () => {
  let component: WuerfeSpeedballComponent;
  let fixture: ComponentFixture<WuerfeSpeedballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WuerfeSpeedballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WuerfeSpeedballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
