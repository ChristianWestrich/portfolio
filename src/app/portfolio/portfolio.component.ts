import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from '../shared/projects/projects.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, TranslateModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit{
  constructor(private translateService: TranslateService) {}


  projects = [
    {
      projectName: 'Join',
      language: 'JavaScript, HTML, CSS',
      description: "",
      liveLink: '',
      gitLink: '',
      imgLink: '../../assets/img/join.png',
    },
    {
      projectName: 'El Pollo Loco',
      language: 'JavaScript, HTML, CSS',
      description: "",
      liveLink: '',
      gitLink: '',
      imgLink: '../../assets/img/elpololoco.png',
    },
  ];



  ngOnInit() {
    for (let i in this.projects) {
      this.translateService
        .get(`portfolio.description${[i]}`)
        .subscribe((translate: string) => {
          this.projects[i].description = translate;
        });
    }
  }


}
