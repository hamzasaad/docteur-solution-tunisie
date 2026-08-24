import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';

interface SecurityPoint { icon: string; title: string; description: string; }

@Component({
  selector: 'dst-security',
  standalone: true,
  imports: [NgFor, IconComponent, RevealDirective],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  readonly points: SecurityPoint[] = [
    { icon: 'database', title: 'Protection des données', description: "Les données de santé sont hébergées et gérées avec une vigilance constante." },
    { icon: 'lock', title: "Contrôle des accès", description: "Chaque utilisateur accède uniquement aux informations nécessaires à son rôle." },
    { icon: 'shield-check', title: 'Authentification', description: "Des mécanismes d'authentification pensés pour limiter les accès non autorisés." },
    { icon: 'users', title: 'Gestion des permissions', description: "Des niveaux de droits adaptés aux médecins, secrétariats et équipes administratives." },
    { icon: 'eye', title: 'Confidentialité', description: "La confidentialité des échanges et des dossiers patients est une priorité constante." },
    { icon: 'activity', title: 'Traçabilité', description: "Les actions importantes peuvent être suivies pour renforcer la fiabilité du système." },
    { icon: 'server', title: 'Sauvegarde', description: 'Des mécanismes de sauvegarde pensés pour limiter les risques de perte de données.' }
  ];
}
