import { Component, HostListener } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'dst-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgFor, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  readonly navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Expertise', path: '/a-propos', fragment: 'expertise' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Innovation', path: '/a-propos', fragment: 'innovation' },
    { label: 'Démonstration', path: '/', fragment: 'demonstration' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 12;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
