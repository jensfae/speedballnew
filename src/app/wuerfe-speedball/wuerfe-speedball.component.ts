import { FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { VeranstaltungenSpeedballService } from './../veranstaltungen-speedball.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


export class Suche {

  constructor(
    public gener: String,
    
  ) {  }

}


@Component({
  selector: 'app-wuerfe-speedball',
  templateUrl: './wuerfe-speedball.component.html',
  styleUrls: ['./wuerfe-speedball.component.css']
})



export class WuerfeSpeedballComponent {
  wuerfeObservable: Observable<any[]>;
  angForm: FormGroup;


  public genders = [
    { value: 'A', dsiplay: 'All'},
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ];

  suche: Suche;


  constructor(private verService: VeranstaltungenSpeedballService, private fb: FormBuilder) {
    this.createForm();
    this.suche = new Suche("A");
    this.wuerfeObservable = verService.getWuerfe("alle");
    
  }
  
  
  wuerfeSuchen(geschlecht){
    console.log("WürfeSuche");
    this.verService.getWuerfe(geschlecht);
  }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      geschlecht: ['']
   });
  }

}
