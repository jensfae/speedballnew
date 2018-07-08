import { VeranstaltungenSpeedballService } from './../veranstaltungen-speedball.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-veranstaltungen-speedball',
  templateUrl: './veranstaltungen-speedball.component.html',
  styleUrls: ['./veranstaltungen-speedball.component.css']
})
export class VeranstaltungenSpeedballComponent implements OnInit {
  angForm: FormGroup;
  constructor(private verService: VeranstaltungenSpeedballService, private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      datumvon:['', Validators.required],
      price: ['', Validators.required ]
   });
  }
  addShare(name, price, datumvon) {
    const dataObj = {
     name: name,
     datumvon: datumvon,
     price: price
   };
   this.verService.addShare(dataObj);
 }


  ngOnInit() {
  }

}
