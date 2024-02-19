import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { AboutmeComponent } from './aboutme/aboutme.component';



export const routes: Routes = [
    { path: 'imprint', title: 'Impressum', component: ImprintComponent },
    { path: '', title: 'Christian-Westrich', component: LandingpageComponent },
    {path: '',title: 'About-Me', component: AboutmeComponent}
];
