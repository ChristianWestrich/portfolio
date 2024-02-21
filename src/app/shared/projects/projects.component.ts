import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input() projectName: string = '';
  @Input() usedLanguage: string = '';
  @Input() description: string = '';
  @Input() liveLink: string = '';
  @Input() gitLink: string = '';
  @Input() imgLink: string = '';
}
