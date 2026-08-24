import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Solution } from '../../models/solution.model';
import { SolutionsService } from '../../services/solutions.service';
import { SolutionCardComponent } from '../solution-card/solution-card.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'dst-solutions-grid',
  standalone: true,
  imports: [NgFor, NgIf, SolutionCardComponent, RevealDirective],
  templateUrl: './solutions-grid.component.html',
  styleUrl: './solutions-grid.component.scss'
})
export class SolutionsGridComponent {
  @Input() title = 'Nos solutions';
  @Input() subtitle =
    "Un logiciel de santé complet, pensé pour les professionnels de santé : gestion de cabinet, agenda médical, dossier patient numérique, téléconsultation et bien plus.";
  @Input() showEyebrow = true;
  @Input() limit?: number;

  solutions: Solution[];

  constructor(private service: SolutionsService) {
    this.solutions = this.service.getFeaturedSolutions();
  }

  get visibleSolutions(): Solution[] {
    return this.limit ? this.solutions.slice(0, this.limit) : this.solutions;
  }
}
