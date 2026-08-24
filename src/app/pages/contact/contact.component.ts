import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { IconComponent } from '../../components/icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContactService } from '../../services/contact.service';

/** Fallback mailbox, used only if the backend can't be reached. */
const CONTACT_EMAIL = 'docteursolution.tn@gmail.com';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'dst-contact',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, IconComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  state: SubmitState = 'idle';
  errorMessage = '';
  readonly contactEmail = CONTACT_EMAIL;

  readonly form = this.fb.group({
    fullName: ['', Validators.required],
    organization: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    subject: ['Demande de démonstration', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  /**
   * Sends the form to the Spring Boot backend (`POST /api/contact`), which
   * dispatches the email server-side. If the backend can't be reached
   * (not running, network error…), we fall back to a `mailto:` link so the
   * visitor can still send their message via their own mail client.
   */
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.state = 'loading';
    this.errorMessage = '';

    const { fullName, organization, email, phone, subject, message } = this.form.value;

    this.contactService
      .send({
        fullName: fullName!,
        organization: organization || null,
        email: email!,
        phone: phone || null,
        subject: subject!,
        message: message!
      })
      .subscribe({
        next: () => {
          this.state = 'success';
        },
        error: (err: HttpErrorResponse) => {
          this.state = 'error';
          this.errorMessage =
            err.error?.error ??
            "Impossible de contacter le serveur pour le moment. Vous pouvez nous écrire directement par email.";
        }
      });
  }

  /** Opens the visitor's mail client pre-filled, as a fallback when the API is unreachable. */
  openMailFallback(): void {
    const { fullName, organization, email, phone, subject, message } = this.form.value;

    const bodyLines = [
      `Nom complet : ${fullName}`,
      organization ? `Organisation : ${organization}` : null,
      `Email : ${email}`,
      phone ? `Téléphone : ${phone}` : null,
      '',
      message
    ].filter((line): line is string => line !== null);

    const mailtoUrl =
      `mailto:${this.contactEmail}` +
      `?subject=${encodeURIComponent(`[Site DST] ${subject}`)}` +
      `&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailtoUrl;
  }

  resetForm(): void {
    this.state = 'idle';
    this.errorMessage = '';
    this.form.reset({ subject: 'Demande de démonstration' });
  }
}
