import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from '../shared/projects/projects.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, TranslateModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      projectName: 'Join',
      language: 'JavaScript, HTML, CSS',
      description: '',
      liveLink: 'https://www.christian-westrich.de/projects/Join/index.html',
      gitLink: 'https://github.com/ChristianWestrich/DAjoin.git',
      imgLink: '/assets/img/join.png',
    },
    {
      projectName: 'El Pollo Loco',
      language: 'JavaScript, HTML, CSS',
      description: '',
      liveLink:
        'https://www.christian-westrich.de/projects/El%20Pollo%20Loco/index.html',
      gitLink: 'https://github.com/ChristianWestrich/El-Pollo-Loco.git',
      imgLink: '/assets/img/elpololoco.png',
    },
  ];
}
