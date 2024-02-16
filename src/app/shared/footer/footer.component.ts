import { Component } from '@angular/core';
import { SymbolsComponent } from '../symbols/symbols.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SymbolsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
