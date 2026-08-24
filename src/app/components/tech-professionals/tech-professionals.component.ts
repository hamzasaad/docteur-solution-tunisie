import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';

interface Pillar { icon: string; label: string; }

@Component({
  selector: 'dst-tech-professionals',
  standalone: true,
  imports: [NgFor, IconComponent, RevealDirective],
  templateUrl: './tech-professionals.component.html',
  styleUrl: './tech-professionals.component.scss'
})
export class TechProfessionalsComponent {
  readonly pillars: Pillar[] = [
    { icon: 'feather', label: 'Simplicité' },
    { icon: 'shield-check', label: 'Sécurité' },
    { icon: 'trending-up', label: 'Productivité' },
    { icon: 'smartphone', label: 'Mobilité' },
    { icon: 'refresh', label: 'Interopérabilité' },
    { icon: 'sparkles', label: 'Expérience utilisateur' }
  ];
}
