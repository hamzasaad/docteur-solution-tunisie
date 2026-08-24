import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: "Docteur Solution Tunisie — La technologie au service de la santé"
  },
  {
    path: 'solutions',
    loadComponent: () =>
      import('./pages/solutions/solutions.component').then((m) => m.SolutionsComponent),
    title: 'Nos solutions digitales pour la santé — Docteur Solution Tunisie'
  },
  {
    path: 'solutions/:slug',
    loadComponent: () =>
      import('./pages/solution-detail/solution-detail.component').then(
        (m) => m.SolutionDetailComponent
      ),
    title: 'Solution — Docteur Solution Tunisie'
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'À propos — 40 ans d’expertise santé — Docteur Solution Tunisie'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact — Docteur Solution Tunisie'
  },
  { path: '**', redirectTo: '' }
];
