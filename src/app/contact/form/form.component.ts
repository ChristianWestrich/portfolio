import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  http = inject(HttpClient);

  sendingComplete() {
    let overlay = document.querySelector('.overlay-email');
    overlay?.setAttribute('style', 'opacity: 1; z-index:0;');
    setTimeout(() => {
      overlay?.setAttribute('style', 'opacity: 0; z-index:-1;');
    }, 3000);
  }

  checkboxState = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.checkboxState = false;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.sendingComplete,
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.sendingComplete();
      ngForm.resetForm();
      this.checkboxState = false;
    }
  }
}
