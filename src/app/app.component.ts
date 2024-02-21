import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutmeComponent, ContactComponent,LandingpageComponent,MyskillsComponent,PortfolioComponent, HeaderComponent, FooterComponent, ImprintComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'portfolio';

  translation = "de";

  constructor(public translate: TranslateService) {
    translate.setDefaultLang(this.translation);
  }

}
