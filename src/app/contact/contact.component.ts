import { Component, OnInit } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit{
  goTo(destination: string) {
    let target = document.querySelector(destination);
    if (target) {
      target.scrollIntoView();
    }
  }
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
