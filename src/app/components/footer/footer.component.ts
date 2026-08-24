import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'dst-footer',
  standalone: true,
  imports: [RouterLink, NgFor, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly solutionLinks = [
    { label: 'Gestion de cabinet', path: '/solutions/gestion-cabinet' },
    { label: 'Agenda médical', path: '/solutions/agenda' },
    { label: 'Dossier patient', path: '/solutions/dossier-patient' },
    { label: 'Téléconsultation', path: '/solutions/teleconsultation' },
    { label: 'Messagerie sécurisée', path: '/solutions/messagerie' }
  ];

  readonly companyLinks = [
    { label: 'À propos', path: '/a-propos' },
    { label: 'Toutes nos solutions', path: '/solutions' },
    { label: 'Contact', path: '/contact' }
  ];
}
