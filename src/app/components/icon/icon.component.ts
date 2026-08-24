import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

/**
 * Minimal self-contained icon set (hand-drawn, stroke-based) so the whole
 * app has zero external icon-library dependency. Add new `case`s as needed.
 */
@Component({
  selector: 'dst-icon',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      [ngSwitch]="name"
    >
      <ng-container *ngSwitchCase="'briefcase-medical'">
        <rect x="3" y="7" width="18" height="13" rx="2.5"/>
        <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7"/>
        <path d="M12 11v6M9 14h6"/>
      </ng-container>
      <ng-container *ngSwitchCase="'calendar'">
        <rect x="3.5" y="5" width="17" height="16" rx="2.5"/>
        <path d="M3.5 10h17M8 3v4M16 3v4"/>
        <path d="M8 14h1M12 14h1M16 14h1M8 17.5h1M12 17.5h1"/>
      </ng-container>
      <ng-container *ngSwitchCase="'folder-heart'">
        <path d="M3.5 7.5A2 2 0 0 1 5.5 5.5H10l2 2.3h6.5a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2z"/>
        <path d="M12 16.2s-3.2-1.9-3.2-4.1a1.9 1.9 0 0 1 3.2-1.4 1.9 1.9 0 0 1 3.2 1.4c0 2.2-3.2 4.1-3.2 4.1Z"/>
      </ng-container>
      <ng-container *ngSwitchCase="'video'">
        <rect x="3" y="6.5" width="12.5" height="11" rx="2.2"/>
        <path d="M15.5 10.5 21 8v8l-5.5-2.5z"/>
      </ng-container>
      <ng-container *ngSwitchCase="'message-circle'">
        <path d="M21 12a8 8 0 1 1-3.4-6.5"/>
        <path d="M21 12a8 8 0 0 1-11.9 6.9L4 20l1.2-4.6"/>
        <path d="M8.5 11.5h7M8.5 14h4.5"/>
      </ng-container>
      <ng-container *ngSwitchCase="'file-text'">
        <path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5a1.5 1.5 0 0 1 1.5-1.5Z"/>
        <path d="M14 3.5V8h4.2"/>
        <path d="M9 12.5h6M9 15.5h6M9 9.5h2"/>
      </ng-container>
      <ng-container *ngSwitchCase="'user-round'">
        <circle cx="12" cy="8.2" r="3.6"/>
        <path d="M4.5 20.2a7.5 7.5 0 0 1 15 0"/>
      </ng-container>
      <ng-container *ngSwitchCase="'layout-dashboard'">
        <rect x="3.5" y="3.5" width="8" height="8" rx="1.6"/>
        <rect x="12.5" y="3.5" width="8" height="5" rx="1.6"/>
        <rect x="12.5" y="10.5" width="8" height="10" rx="1.6"/>
        <rect x="3.5" y="13.5" width="8" height="7" rx="1.6"/>
      </ng-container>
      <ng-container *ngSwitchCase="'shield-check'">
        <path d="M12 3.5 5 6v6.2c0 4.4 3 7 7 8.3 4-1.3 7-3.9 7-8.3V6z"/>
        <path d="m9 12 2 2 4-4.2"/>
      </ng-container>
      <ng-container *ngSwitchCase="'award'">
        <circle cx="12" cy="9" r="5.2"/>
        <path d="m8.5 13.5-1.6 6.8 5.1-2.4 5.1 2.4-1.6-6.8"/>
      </ng-container>
      <ng-container *ngSwitchCase="'sparkles'">
        <path d="M12 3v4M12 17v4M4 12h4M16 12h4"/>
        <path d="m6.5 6.5 2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2"/>
      </ng-container>
      <ng-container *ngSwitchCase="'feather'">
        <path d="M20 3s-8.5.5-12.5 4.5S3.5 18 3.5 18 12 15.5 16 11.5 20 3 20 3Z"/>
        <path d="M12.5 12 4 20.5M9 15.5h4.2v4.2"/>
      </ng-container>
      <ng-container *ngSwitchCase="'handshake'">
        <path d="m3.5 12 4-4 3 2.2 3-2.2 2.6 2M20.5 12l-4-4"/>
        <path d="M7.5 8 4 11.5l4 4.3a2 2 0 0 0 2.9 0l.4-.4"/>
        <path d="m16.5 8 3.5 3.5-4 4.3a2 2 0 0 1-2.9 0l-2.6-2.6"/>
      </ng-container>
      <ng-container *ngSwitchCase="'heart-handshake'">
        <path d="M12 6.5c-1-1.6-2.7-2.5-4.4-2-2.6.7-3.7 3.7-2.2 6l6.6 8 6.6-8c1.5-2.3.4-5.3-2.2-6-1.7-.5-3.4.4-4.4 2Z"/>
      </ng-container>
      <ng-container *ngSwitchCase="'check'">
        <path d="m4.5 12.5 5 5 10-10.5"/>
      </ng-container>
      <ng-container *ngSwitchCase="'check-circle'">
        <circle cx="12" cy="12" r="8.5"/>
        <path d="m8.3 12.3 2.6 2.6 4.8-5.4"/>
      </ng-container>
      <ng-container *ngSwitchCase="'arrow-right'">
        <path d="M4 12h16M13 5l7 7-7 7"/>
      </ng-container>
      <ng-container *ngSwitchCase="'menu'">
        <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17"/>
      </ng-container>
      <ng-container *ngSwitchCase="'x'">
        <path d="M5 5l14 14M19 5 5 19"/>
      </ng-container>
      <ng-container *ngSwitchCase="'send'">
        <path d="m3.5 11.5 17-8-6.5 17-3-7.3z"/>
        <path d="M20.5 3.5 10.5 12.7"/>
      </ng-container>
      <ng-container *ngSwitchCase="'paperclip'">
        <path d="M17.5 7.5 9 16a3 3 0 1 1-4.2-4.3l8.8-8.8a4.5 4.5 0 1 1 6.4 6.4L10.6 18.7"/>
      </ng-container>
      <ng-container *ngSwitchCase="'bell'">
        <path d="M6 9.5a6 6 0 1 1 12 0c0 4.5 1.5 6 1.5 6h-15s1.5-1.5 1.5-6Z"/>
        <path d="M10 19.5a2 2 0 0 0 4 0"/>
      </ng-container>
      <ng-container *ngSwitchCase="'users'">
        <circle cx="9" cy="8.5" r="3.2"/>
        <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0"/>
        <path d="M16 5.7a3.2 3.2 0 0 1 0 6.2M20.5 19.5a5.2 5.2 0 0 0-4.3-5.4"/>
      </ng-container>
      <ng-container *ngSwitchCase="'activity'">
        <path d="M3.5 12.5h4l2.2-6.5 4 13 2.2-6.5h4.6"/>
      </ng-container>
      <ng-container *ngSwitchCase="'clock'">
        <circle cx="12" cy="12" r="8.5"/>
        <path d="M12 7.5V12l3.2 2"/>
      </ng-container>
      <ng-container *ngSwitchCase="'phone'">
        <path d="M7 3.5 5 6c-.6 3.4 3.2 8.4 6.5 10.3l1.9-2.3 4.3 2c.2 1.5-.5 3-2 3.5-5.3-.3-11.7-6.7-12-12-.2-1.6 1.2-3.2 2.8-3.5Z"/>
      </ng-container>
      <ng-container *ngSwitchCase="'mic'">
        <rect x="9" y="3" width="6" height="11" rx="3"/>
        <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v3.2M9 20.7h6"/>
      </ng-container>
      <ng-container *ngSwitchCase="'search'">
        <circle cx="10.5" cy="10.5" r="6.5"/>
        <path d="m20 20-4.4-4.4"/>
      </ng-container>
      <ng-container *ngSwitchCase="'lock'">
        <rect x="4.5" y="10.5" width="15" height="10" rx="2.2"/>
        <path d="M8 10.5V7.2a4 4 0 0 1 8 0v3.3"/>
      </ng-container>
      <ng-container *ngSwitchCase="'database'">
        <ellipse cx="12" cy="5.5" rx="7.5" ry="3"/>
        <path d="M4.5 5.5V12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5.5"/>
        <path d="M4.5 12v6.5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V12"/>
      </ng-container>
      <ng-container *ngSwitchCase="'eye'">
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/>
        <circle cx="12" cy="12" r="3"/>
      </ng-container>
      <ng-container *ngSwitchCase="'server'">
        <rect x="3.5" y="4" width="17" height="7" rx="1.8"/>
        <rect x="3.5" y="13" width="17" height="7" rx="1.8"/>
        <path d="M7 7.5h.01M7 16.5h.01"/>
      </ng-container>
      <ng-container *ngSwitchCase="'smartphone'">
        <rect x="7" y="2.5" width="10" height="19" rx="2.4"/>
        <path d="M11 18.3h2"/>
      </ng-container>
      <ng-container *ngSwitchCase="'star'">
        <path d="m12 3.5 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>
      </ng-container>
      <ng-container *ngSwitchCase="'chevron-right'">
        <path d="m9 6 6 6-6 6"/>
      </ng-container>
      <ng-container *ngSwitchCase="'map-pin'">
        <path d="M12 21.5s7-6.3 7-11.8a7 7 0 1 0-14 0c0 5.5 7 11.8 7 11.8Z"/>
        <circle cx="12" cy="9.7" r="2.4"/>
      </ng-container>
      <ng-container *ngSwitchCase="'mail'">
        <rect x="3" y="5.5" width="18" height="13" rx="2.2"/>
        <path d="m4 7 8 6 8-6"/>
      </ng-container>
      <ng-container *ngSwitchCase="'trending-up'">
        <path d="M3.5 16.5 10 10l4 4 6.5-6.5"/>
        <path d="M15 7.5h5.5V13"/>
      </ng-container>
      <ng-container *ngSwitchCase="'refresh'">
        <path d="M20 11a8 8 0 0 0-14.9-3.5M4 13a8 8 0 0 0 14.9 3.5"/>
        <path d="M4.5 4v4.5H9M19.5 20v-4.5H15"/>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <circle cx="12" cy="12" r="8.5"/>
      </ng-container>
    </svg>
  `
})
export class IconComponent {
  @Input() name = '';
  @Input() size = 22;
}
