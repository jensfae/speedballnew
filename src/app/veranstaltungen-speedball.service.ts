import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class VeranstaltungenSpeedballService {

  private basePath = '/veranstaltunges';
  private baseVeranstaltungspath = '/KiBueFe'
  public items: any;
  public item: any;
  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) { }

  addShare(data) {
  const obj = this.db.database.ref(this.basePath);
  obj.push(data);
  console.log('Success');
  }

  addWuerfe(data) {
    var temp = [data.wurf1, data.wurf2, data.wurf3];
    temp.sort(function (a, b){
      return b - a;
    });
    console.log(temp);
    var schnellster = temp[0];
    data.schnellster = parseFloat(temp[0]);
    const obj = this.db.database.ref(this.baseVeranstaltungspath);
    obj.push(data);

    this.afs.collection(this.baseVeranstaltungspath).add(data);

    console.log('Success');
    }

  getWuerfe(geschlecht): Observable<any[]>{
       console.log(geschlecht + ": wurde übergeben");
      
       if (geschlecht=="" || geschlecht == "alle" )
      {
        console.log("Suche alle");
       return this.afs.collection(this.baseVeranstaltungspath,  ref => ref.orderBy("schnellster","desc").where("geschlecht", "==", "m")).valueChanges();
      }
       else
       {
         console.log("suche:" + geschlecht);
       return this.afs.collection(this.baseVeranstaltungspath,  ref => ref.where("geschlecht", "==", geschlecht)).valueChanges();
       

      //this.db.list(this.baseVeranstaltungspath, ref => ref.orderByChild('schnellster'))
      
      
       }

  }  
}
