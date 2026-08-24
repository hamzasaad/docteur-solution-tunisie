import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'dst-experience',
  standalone: true,
  imports: [NgFor, IconComponent, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly heritage = [
    '40 ans dans la santé',
    'Connaissance du terrain',
    'Expertise métier',
    'Confiance de milliers de clients'
  ];

  readonly future = [
    'Intelligence artificielle',
    'Cloud',
    'Mobilité',
    'Automatisation',
    'Interopérabilité',
    'Nouvelles expériences digitales'
  ];
}
