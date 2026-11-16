import { Directive, ElementRef, HostListener } from '@angular/core';

/** 3D tilt that follows the pointer. Sets --rx / --ry on the host (see styles.scss). */
@Directive({ selector: '[dstTilt]', standalone: true })
export class TiltDirective {
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('pointermove', ['$event'])
  onMove(e: PointerEvent): void {
    const r = this.el.nativeElement.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    this.el.nativeElement.style.setProperty('--ry', `${x * 12}deg`);
    this.el.nativeElement.style.setProperty('--rx', `${-y * 10}deg`);
  }

  @HostListener('pointerleave')
  onLeave(): void {
    this.el.nativeElement.style.setProperty('--ry', '0deg');
    this.el.nativeElement.style.setProperty('--rx', '0deg');
  }
}
