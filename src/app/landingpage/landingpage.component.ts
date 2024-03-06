import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { SymbolsComponent } from '../shared/symbols/symbols.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { MyskillsComponent } from '../myskills/myskills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    ButtonComponent,
    SymbolsComponent,
    AboutmeComponent,
    MyskillsComponent,
    PortfolioComponent,
    ContactComponent,

  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  btnText = 'Let´s talk!';

  goTo(destination: string) {
    let target = document.querySelector(destination);
    if (target) {
      target.scrollIntoView();
    }
  }

 
}

