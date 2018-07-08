import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeranstaltungenSpeedballComponent } from './veranstaltungen-speedball.component';

describe('VeranstaltungenSpeedballComponent', () => {
  let component: VeranstaltungenSpeedballComponent;
  let fixture: ComponentFixture<VeranstaltungenSpeedballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeranstaltungenSpeedballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeranstaltungenSpeedballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
