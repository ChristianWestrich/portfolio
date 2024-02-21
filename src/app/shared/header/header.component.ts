import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from '../../app.component';
import { style } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() language = 'DE';

  goTo(destination: string) {
    let target = document.querySelector(destination);
    if (target) {
      target.scrollIntoView();
    }
  }

  constructor(private appComponent: AppComponent) {}

  translating() {
    this.language = this.language === 'DE' ? 'EN' : 'DE';
    this.appComponent.translate.setDefaultLang(this.language.toLowerCase());
    let language = document.querySelector('.language-select');
    let english =
      'background-image: url(../../../assets/img/american-flag.png)';
    let german = 'background-image: url(../../../assets/img/german-flag.png)';
    if (this.language === 'DE') {
      language?.setAttribute('style', german);
    } else {
      language?.setAttribute('style', english);
      this.language = 'EN';
    }
  }
}
