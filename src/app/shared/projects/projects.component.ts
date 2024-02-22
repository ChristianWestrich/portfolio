import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, OnDestroy{


  observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef) { }


  @Input() projectName: string = '';
  @Input() usedLanguage: string = '';
  @Input() description: string = '';
  @Input() liveLink: string = '';
  @Input() gitLink: string = '';
  @Input() imgLink: string = '';


  ngOnInit(): void {
    const options = {threshold: 0.4};
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('left-side')) {
            entry.target.classList.add('animation-class-left');
          } else if (entry.target.classList.contains('right-side')) {
            entry.target.classList.add('animation-class-right');
          }
        } else {
          entry.target.classList.remove('animation-class-left');
          entry.target.classList.remove('animation-class-right');
        }
      });
    }, options);
  
    let targetElements: NodeListOf<HTMLElement> = this.elementRef.nativeElement.querySelectorAll('.left-side, .right-side');
    targetElements.forEach(targetElement => {
      this.observer?.observe(targetElement);
    });

  }

ngOnDestroy(): void {
  if (this.observer) {
    this.observer.disconnect();
  }}


}
