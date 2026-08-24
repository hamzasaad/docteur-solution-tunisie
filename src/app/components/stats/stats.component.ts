import { Component, ElementRef, OnInit } from '@angular/core';
import { NgFor, DecimalPipe } from '@angular/common';
import { CompanyStat } from '../../models/company-stat.model';
import { SolutionsService } from '../../services/solutions.service';
import { RevealDirective } from '../../directives/reveal.directive';

interface AnimatedStat extends CompanyStat {
  display: number;
}

@Component({
  selector: 'dst-stats',
  standalone: true,
  imports: [NgFor, DecimalPipe, RevealDirective],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnInit {
  stats: AnimatedStat[] = [];
  private hasAnimated = false;
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private service: SolutionsService) {}

  ngOnInit(): void {
    this.stats = this.service.getCompanyStats().map((s) => ({ ...s, display: 0 }));

    if (typeof IntersectionObserver === 'undefined') {
      this.stats = this.stats.map((s) => ({ ...s, display: s.value }));
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateStats();
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  private animateStats(): void {
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.stats = this.stats.map((s, i) => ({
        ...s,
        display: Math.round(this.service.getCompanyStats()[i].value * eased)
      }));

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}
