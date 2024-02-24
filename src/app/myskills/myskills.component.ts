import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { SkillIconsComponent } from '../shared/skill-icons/skill-icons.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [ButtonComponent, SkillIconsComponent, TranslateModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss',
})
export class MyskillsComponent implements OnDestroy, OnInit {
  GetInTouch: any;
  observer?: IntersectionObserver;

  constructor(
    private translateService: TranslateService,
    private elementRef: ElementRef
  ) {}

  goTo(destination: string) {
    let target = document.querySelector(destination);
    if (target) {
      target.scrollIntoView();
    }
  }

  ngOnInit() {
    this.translateService
      .get('skills.touch')
      .subscribe((translation: string) => {
        this.GetInTouch = translation;
      });
    const options = { threshold: 0.8 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('skill-container')) {
            entry.target.classList.add('animation-coming-in');
          }
        } else {
          entry.target.classList.remove('animation-coming-in');
        }
      });
    }, options);

    let targetElements: NodeListOf<HTMLElement> =
      this.elementRef.nativeElement.querySelectorAll('.skill-container');
    targetElements.forEach((targetElement) => {
      this.observer?.observe(targetElement);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  skillIcons = [
    {
      iconSrc: './assets/img/Angular.png',
      iconName: 'Angular',
    },
    {
      iconSrc: './assets/img/Api.svg',
      iconName: 'Rest-API',
    },
    {
      iconSrc: './assets/img/css.png',
      iconName: 'CSS',
    },
    {
      iconSrc: './assets/img/Firebase.png',
      iconName: 'Firebase',
    },
    {
      iconSrc: './assets/img/Git.png',
      iconName: 'GIT',
    },
    {
      iconSrc: './assets/img/html.png',
      iconName: 'HTML',
    },
    {
      iconSrc: './assets/img/JavScript.png',
      iconName: 'JavaScript',
    },
    {
      iconSrc: './assets/img/material_design.png',
      iconName: 'Material Design',
    },
    {
      iconSrc: './assets/img/Scrum.png',
      iconName: 'Scrum',
    },
    {
      iconSrc: './assets/img/Typescript.png',
      iconName: 'TypeScript',
    },
  ];
}
