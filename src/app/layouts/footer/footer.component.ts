import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { churchInfo } from '@core/church-info';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly church = churchInfo;
  protected readonly currentYear = new Date().getFullYear();
}
