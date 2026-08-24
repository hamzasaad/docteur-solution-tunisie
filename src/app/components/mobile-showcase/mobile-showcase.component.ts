import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'dst-mobile-showcase',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './mobile-showcase.component.html',
  styleUrl: './mobile-showcase.component.scss'
})
export class MobileShowcaseComponent {}
