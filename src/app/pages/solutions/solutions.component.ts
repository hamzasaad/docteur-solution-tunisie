import { Component } from '@angular/core';
import { SolutionsGridComponent } from '../../components/solutions-grid/solutions-grid.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { IconComponent } from '../../components/icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'dst-solutions-page',
  standalone: true,
  imports: [SolutionsGridComponent, CtaComponent, IconComponent, RevealDirective],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {}
