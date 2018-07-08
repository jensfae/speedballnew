import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './router.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import {VeranstaltungenSpeedballComponent} from './veranstaltungen-speedball/veranstaltungen-speedball.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { VeranstaltungenSpeedballService } from './veranstaltungen-speedball.service';
import { ReactiveFormsModule } from '@angular/forms';
import { WuerfeSpeedballAddComponent } from './wuerfe-speedball-add/wuerfe-speedball-add.component';
import { WuerfeSpeedballComponent } from './wuerfe-speedball/wuerfe-speedball.component';
import { WuerfeSpeedballUpdateComponent } from './wuerfe-speedball-update/wuerfe-speedball-update.component';



import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesListComponent,
    VeranstaltungenSpeedballComponent,
    WuerfeSpeedballAddComponent, 
    WuerfeSpeedballUpdateComponent,
    WuerfeSpeedballComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [VeranstaltungenSpeedballService],
  bootstrap: [AppComponent]
})
export class AppModule { }
