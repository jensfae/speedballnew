import { VeranstaltungenSpeedballService } from './../veranstaltungen-speedball.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-wuerfe-speedball-add',
  templateUrl: './wuerfe-speedball-add.component.html',
  styleUrls: ['./wuerfe-speedball-add.component.css']
})
export class WuerfeSpeedballAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private verService: VeranstaltungenSpeedballService, private fb: FormBuilder, private router: Router) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: [''],
      wurfname: ['', Validators.required ],
      email:[''],
      alter:[],
      geschlecht: [],
      wurf1: [0.0 ],
      wurf2: [0.0 ],
      wurf3: [0.0 ]
   });
  }

  addWurf(wurfname, name, email, wurf1, wurf2, wurf3, alter, geschlecht)
  {
    const dataObj = {
      wurfname: wurfname,
      name: name, 
      email: email,
      alter: alter,
      geschlecht: geschlecht,
      wurf1: wurf1,
      wurf2: wurf2,
      wurf3: wurf3,
      schnellster: 0
   };

   this.verService.addWuerfe(dataObj);
   this.router.navigate(['/wuerfe']);   
 }

  ngOnInit() {
  }

}
