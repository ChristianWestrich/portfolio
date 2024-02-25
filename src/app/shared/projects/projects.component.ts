import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, OnDestroy {

  observer?: IntersectionObserver;

  constructor(
    private elementRef: ElementRef) {}

  @Input() projectName: string = '';
  @Input() usedLanguage: string = '';
  @Input() description: string = '';
  @Input() liveLink: string = '';
  @Input() gitLink: string = '';
  @Input() imgLink: string = '';
  @ViewChild('projectRightSide') rightSideElement!: ElementRef;

  ngOnInit(): void {


    const options = { threshold: 0.5 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('left-side')) {
            entry.target.classList.add('animation-class-left');
            this.rightSideElement.nativeElement.classList.add(
              'animation-class-right'
            );
          }
        } else {
          entry.target.classList.remove('animation-class-left');
          this.rightSideElement.nativeElement.classList.remove(
            'animation-class-right'
          );
        }
      });
    }, options);

    let targetElements: NodeListOf<HTMLElement> =
      this.elementRef.nativeElement.querySelectorAll('.left-side');
    targetElements.forEach((targetElement) => {
      this.observer?.observe(targetElement);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
