import { Component } from '@angular/core';
import { churchInfo } from '@core/church-info';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="section-inner">
        <p class="eyebrow">About</p>
        <h1 class="section-title">About {{ church.name }}</h1>
        <div class="statement-grid">
          <article>
            <h2>Mission Statement</h2>
            <p>{{ church.mission }}</p>
          </article>
          <article>
            <h2>Vision Statement</h2>
            <p>{{ church.vision }}</p>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .statement-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
        margin-top: 2rem;
        gap: 1rem;
      }

      article {
        border-top: 4px solid var(--color-red-700);
        padding: 1.25rem;
        background: var(--color-surface);
      }

      h2 {
        margin: 0 0 0.5rem;
        color: var(--color-blue-900);
        font-family: var(--font-serif);
      }

      p {
        margin: 0;
        color: var(--color-muted);
      }
    `
  ]
})
export class AboutComponent {
  protected readonly church = churchInfo;
}
