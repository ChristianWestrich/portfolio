import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  goTo(destination: string) {
    let target = document.querySelector(destination);
    if (target) {
      target.scrollIntoView();
    }
  }

}
