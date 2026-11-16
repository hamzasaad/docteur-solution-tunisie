import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { DemoComponent } from '../../components/demo/demo.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { SolutionsGridComponent } from '../../components/solutions-grid/solutions-grid.component';
import { TechProfessionalsComponent } from '../../components/tech-professionals/tech-professionals.component';
import { DashboardPreviewComponent } from '../../components/dashboard-preview/dashboard-preview.component';
import { ChatPreviewComponent } from '../../components/chat-preview/chat-preview.component';
import { MobileShowcaseComponent } from '../../components/mobile-showcase/mobile-showcase.component';
import { SecurityComponent } from '../../components/security/security.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ValuesComponent } from '../../components/values/values.component';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'dst-home',
  standalone: true,
  imports: [
    HeroComponent,
    DemoComponent,
    StatsComponent,
    SolutionsGridComponent,
    TechProfessionalsComponent,
    DashboardPreviewComponent,
    ChatPreviewComponent,
    MobileShowcaseComponent,
    SecurityComponent,
    ExperienceComponent,
    ValuesComponent,
    CtaComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
