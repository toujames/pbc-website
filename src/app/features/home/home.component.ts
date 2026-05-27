import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { churchInfo } from '@core/church-info';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly church = churchInfo;
  protected readonly latestVideoUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.latestVideoUrl = sanitizer.bypassSecurityTrustResourceUrl(churchInfo.links.youtubeUploadsEmbed);
  }
}
