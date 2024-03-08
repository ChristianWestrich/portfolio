import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() language = 'DE';
  @ViewChild('checkbox', { static: false }) checkbox!: ElementRef;

  showOverlay = false;

  goTo(destination: string) {
    let target = document.querySelector(destination);
    if (target!.id === 'portfolio') {
      const yoffset = -100;
      window.scroll({
        top: target!.getBoundingClientRect().top + window.scrollY + yoffset,
        behavior: 'smooth',
      });
      this.checkbox.nativeElement.checked = false;
      this.showOverlay = false;
      document.body.style.overflow = 'auto';
    } else if (target!.id === 'skills') {
      const yoffset = -500;
      window.scroll({
        top: target!.getBoundingClientRect().top + window.scrollY + yoffset,
        behavior: 'smooth',
      });
      this.checkbox.nativeElement.checked = false;
      this.showOverlay = false;
      document.body.style.overflow = 'auto';
    } else if (target!) {
      target!.scrollIntoView();
      this.checkbox.nativeElement.checked = false;
      this.showOverlay = false;
      document.body.style.overflow = 'auto';
    }
  }

  openMobileMenu() {
    this.showOverlay = !this.showOverlay;
    if (this.showOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
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
