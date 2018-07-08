import { WuerfeSpeedballComponent } from './wuerfe-speedball/wuerfe-speedball.component';
import { VeranstaltungenSpeedballComponent } from './veranstaltungen-speedball/veranstaltungen-speedball.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { RouterModule, Routes } from '@angular/router';
import { WuerfeSpeedballAddComponent } from './wuerfe-speedball-add/wuerfe-speedball-add.component';


export const appRoutes: Routes = [
  { path: 'course',
    component: VeranstaltungenSpeedballComponent
  },
  { path: 'wuerfe',
  component: WuerfeSpeedballComponent
},
{ path: 'wuerfeadd',
component: WuerfeSpeedballAddComponent
}
];