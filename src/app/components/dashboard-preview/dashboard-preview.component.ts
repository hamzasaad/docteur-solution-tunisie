import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';

interface SidebarItem { icon: string; label: string; active?: boolean; }
interface RecentPatient { initials: string; name: string; reason: string; time: string; }

@Component({
  selector: 'dst-dashboard-preview',
  standalone: true,
  imports: [NgFor, IconComponent, RevealDirective],
  templateUrl: './dashboard-preview.component.html',
  styleUrl: './dashboard-preview.component.scss'
})
export class DashboardPreviewComponent {
  readonly sidebarItems: SidebarItem[] = [
    { icon: 'layout-dashboard', label: 'Dashboard', active: true },
    { icon: 'users', label: 'Patients' },
    { icon: 'calendar', label: 'Rendez-vous' },
    { icon: 'video', label: 'Consultations' },
    { icon: 'message-circle', label: 'Messages' },
    { icon: 'file-text', label: 'Documents' },
    { icon: 'briefcase-medical', label: 'Facturation' },
    { icon: 'activity', label: 'Statistiques' },
    { icon: 'shield-check', label: 'Paramètres' }
  ];

  readonly recentPatients: RecentPatient[] = [
    { initials: 'SL', name: 'Sarah Larbi', reason: 'Consultation de suivi', time: '14:30' },
    { initials: 'MK', name: 'Mehdi Khelifi', reason: 'Téléconsultation', time: '15:15' },
    { initials: 'AB', name: 'Amira Belhadj', reason: 'Première consultation', time: '16:00' },
    { initials: 'YT', name: 'Youssef Trabelsi', reason: 'Renouvellement ordonnance', time: '16:45' }
  ];

  readonly weeklyBars = [45, 62, 50, 78, 60, 88, 70];
}
