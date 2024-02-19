import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { SkillIconsComponent } from '../shared/skill-icons/skill-icons.component';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [ButtonComponent, SkillIconsComponent],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {

  GetInTouch = 'Get in touch'

 

  skillIcons  = [{ 
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
