import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Solution } from '../../models/solution.model';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'dst-solution-card',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RouterLink, IconComponent],
  templateUrl: './solution-card.component.html',
  styleUrl: './solution-card.component.scss'
})
export class SolutionCardComponent {
  @Input({ required: true }) solution!: Solution;
  @Input() compact = false;
}
