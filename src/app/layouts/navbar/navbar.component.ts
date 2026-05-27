import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { churchInfo } from '@core/church-info';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  protected readonly church = churchInfo;
  protected readonly menuOpen = signal(false);
  protected readonly navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Songbook', path: '/songbook' },
    { label: 'About', path: '/about' },
    { label: 'Staff', path: '/staff' },
    { label: 'Sermons', path: '/sermons' },
    { label: 'Contact', path: '/contact' }
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
