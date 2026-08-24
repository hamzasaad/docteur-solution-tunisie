import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CompanyValue } from '../../models/value.model';
import { SolutionsService } from '../../services/solutions.service';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'dst-values',
  standalone: true,
  imports: [NgFor, IconComponent, RevealDirective],
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss'
})
export class ValuesComponent {
  values: CompanyValue[];

  constructor(private service: SolutionsService) {
    this.values = this.service.getCompanyValues();
  }
}
