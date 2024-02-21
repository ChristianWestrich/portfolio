import { Component } from '@angular/core';
import { ProjectsComponent } from '../shared/projects/projects.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, TranslateModule, ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    for (let i in this.projects) {
      this.translateService
        .get(`portfolio.description${[i]}`)
        .subscribe((translation: string) => {
          this.projects[i].description = translation;
        });
    }
  }

  projects = [
    {
      projectName: 'Join',
      language: 'JavaScript, HTML, CSS',
      description: '',
      liveLink: '',
      gitLink: '',
      imgLink: '../../assets/img/join.png',
    },
    {
      projectName: 'El Pollo Loco',
      language: 'JavaScript, HTML, CSS',
      description: "{{'portfolio.description' | translate}}",
      liveLink: '',
      gitLink: '',
      imgLink: '../../assets/img/elpololoco.png',
    },
  ];




}

