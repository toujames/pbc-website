import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterOutlet],
  template: `
    <app-navbar />
    <main class="site-main">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }

      .site-main {
        min-height: 60vh;
      }
    `
  ]
})
export class AppComponent {}
