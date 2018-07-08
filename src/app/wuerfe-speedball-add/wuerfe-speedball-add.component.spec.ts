import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WuerfeSpeedballAddComponent } from './wuerfe-speedball-add.component';

describe('WuerfeSpeedballAddComponent', () => {
  let component: WuerfeSpeedballAddComponent;
  let fixture: ComponentFixture<WuerfeSpeedballAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WuerfeSpeedballAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WuerfeSpeedballAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
