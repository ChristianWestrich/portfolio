import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { PrivacyPolicyComponent } from './contact/privacy-policy/privacy-policy.component';


export const routes: Routes = [
  { path: 'imprint', title: 'Imprint', component: ImprintComponent },
  { path: '', title: 'Christian-Westrich', component: LandingpageComponent },
  {
    path: 'privacyPolicy',
    title: 'Privacy-Policy',
    component: PrivacyPolicyComponent,
  },
];
