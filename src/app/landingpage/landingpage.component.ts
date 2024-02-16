import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { SymbolsComponent } from '../shared/symbols/symbols.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [ButtonComponent, SymbolsComponent, AboutmeComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  btnText = "Let´s talk!"
}
