import { Component } from '@angular/core';
import { ProjectsComponent } from '../shared/projects/projects.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects = [
    {projectName: 'Join',
    language: 'JavaScript, HTML, CSS',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    liveLink:'',
    gitLink: '',
    imgLink:'../../assets/img/join.png',
  },
  {
    projectName: 'El Polo Loco',
    language: 'JavaScript, HTML, CSS',
    description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and chilli-sauce-bottles to fight against the killer hen.',
    liveLink: '',
    gitLink: '',
    imgLink: '../../assets/img/elpololoco.png',
  },];
};
