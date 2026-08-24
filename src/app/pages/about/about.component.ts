import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IconComponent } from '../../components/icon/icon.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { TechProfessionalsComponent } from '../../components/tech-professionals/tech-professionals.component';
import { ValuesComponent } from '../../components/values/values.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { RevealDirective } from '../../directives/reveal.directive';

interface TimelineStep { year: string; title: string; description: string; }

@Component({
  selector: 'dst-about',
  standalone: true,
  imports: [
    NgFor,
    IconComponent,
    StatsComponent,
    ExperienceComponent,
    TechProfessionalsComponent,
    ValuesComponent,
    CtaComponent,
    RevealDirective
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly timeline: TimelineStep[] = [
    { year: 'Depuis 40 ans', title: 'Une expertise historique de la santé', description: "Une entreprise française née avec une conviction : le secteur de la santé mérite des outils à la hauteur de son exigence." },
    { year: 'Au fil des années', title: 'La confiance de milliers de clients', description: "Plus de 5 000 clients — médecins, cabinets, cliniques et établissements de santé — nous ont fait confiance pour simplifier leur quotidien." },
    { year: 'Aujourd\'hui', title: '2 500 collaborateurs engagés', description: "Une équipe de 2 500 collaborateurs dédiée à la transformation numérique du secteur médical, au plus près du terrain." },
    { year: 'Demain', title: 'Une nouvelle génération de solutions', description: "Nous combinons 40 ans d'expertise métier avec les technologies modernes pour construire les solutions de demain." }
  ];
}
