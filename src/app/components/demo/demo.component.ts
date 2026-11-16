import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'dst-demo',
  standalone: true,
  imports: [NgFor, NgIf, IconComponent, RevealDirective, TiltDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('stage') stage!: ElementRef<HTMLElement>;

  readonly src = 'assets/video/denticab-demo.mp4';
  readonly poster = 'assets/video/denticab-poster.jpg';
  playing = false;
  activeTime = 0;

  readonly chapters = [
    { label: 'Tableau de bord', desc: 'Patients, rendez-vous et chiffre d’affaires du jour.', icon: 'layout-dashboard', time: 10 },
    { label: 'Agenda et salle d’attente', desc: 'Planning de la semaine et file d’attente en temps réel.', icon: 'calendar', time: 20 },
    { label: 'Paiements et impayés', desc: 'Factures, restes à payer et relances patients.', icon: 'file-text', time: 30 }
  ];

  /** Scroll-linked 3D: the frame starts tilted back and settles flat as it reaches the centre. */
  @HostListener('window:scroll')
  onScroll(): void {
    const el = this.stage?.nativeElement;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, 1 - (r.top - window.innerHeight * 0.15) / (window.innerHeight * 0.8)));
    el.style.setProperty('--p', p.toFixed(3));
  }

  toggle(): void {
    const v = this.video.nativeElement;
    v.paused ? v.play() : v.pause();
  }

  seek(time: number): void {
    const v = this.video.nativeElement;
    v.currentTime = time;
    v.play();
  }

  onTime(): void {
    const t = this.video.nativeElement.currentTime;
    this.activeTime = [...this.chapters].reverse().find((c) => t >= c.time - 0.5)?.time ?? 0;
  }
}
