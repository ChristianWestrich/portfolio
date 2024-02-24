import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent implements OnDestroy, OnInit {

  observer?: IntersectionObserver


  constructor(private elementRef: ElementRef) {}
  
  ngOnInit() {
    const options = { threshold: 0.8 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('left-side')) {
            entry.target.classList.add('animation-coming-in');
          }
        } else {
          entry.target.classList.remove('animation-coming-in');
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
