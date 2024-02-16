import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ImprintComponent } from './imprint/imprint.component';


export const routes: Routes = [
    { path: '', title: 'Christian-Westrich', component: LandingpageComponent },
    { path: 'imprint', title: 'Impressum', component: ImprintComponent },
];
