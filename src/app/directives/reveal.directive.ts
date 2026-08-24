import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

/**
 * Lightweight scroll-reveal directive.
 * Adds `.dst-in-view` once the host element enters the viewport,
 * triggering the fade/slide-up transition defined in styles.scss.
 */
@Directive({
  selector: '[dstReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() dstRevealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.el.nativeElement.classList.add('dst-in-view');
      return;
    }

    this.el.nativeElement.style.transitionDelay = `${this.dstRevealDelay}ms`;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('dst-in-view');
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.15 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
