import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Solution } from '../../models/solution.model';
import { SolutionsService } from '../../services/solutions.service';
import { IconComponent } from '../../components/icon/icon.component';
import { SolutionsGridComponent } from '../../components/solutions-grid/solutions-grid.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'dst-solution-detail',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RouterLink, IconComponent, SolutionsGridComponent, CtaComponent, RevealDirective],
  templateUrl: './solution-detail.component.html',
  styleUrl: './solution-detail.component.scss'
})
export class SolutionDetailComponent implements OnInit {
  solution?: Solution;
  otherSolutions: Solution[] = [];

  constructor(private route: ActivatedRoute, private service: SolutionsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      this.solution = this.service.getSolutionBySlug(slug);
      this.otherSolutions = this.service
        .getSolutions()
        .filter((s) => s.slug !== slug)
        .slice(0, 4);
      window.scrollTo({ top: 0 });
    });
  }
}
