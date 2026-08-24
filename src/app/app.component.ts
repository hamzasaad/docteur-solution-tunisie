import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'dst-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <dst-header></dst-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <dst-footer></dst-footer>
  `
})
export class AppComponent {}
