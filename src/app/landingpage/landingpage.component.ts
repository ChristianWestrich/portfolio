import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { SymbolsComponent } from '../shared/symbols/symbols.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [ButtonComponent, SymbolsComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  btnText = "Let´s talk!"
}
