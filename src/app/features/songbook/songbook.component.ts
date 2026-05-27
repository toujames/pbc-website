import { NgFor, NgIf } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Song } from '@models/song.model';
import { SupabaseService } from '@services/supabase.service';

const fallbackSongs: Song[] = [
  { id: 'ka-hatna-pakai', title: 'Ka Hatna Pakai', author: 'Charis Worship' },
  { id: 'galjona-nang-nahi', title: 'Galjona nang nahi (Battle Belongs to You)', author: 'Goulal Tuboi', category: 'Worship' },
  { id: 'atheng-atheng', title: 'Atheng Atheng (Revelation Song)', author: 'Goulal Tuboi & Rev. Onkhomang Touthang', category: 'Gospel' },
  { id: '66-ni-luopi-hung-lhun-ding', number: 66, title: 'NI LUOPI HUNG LHUN DING', category: 'KCN' },
  { id: 'golpha-jesu', title: 'Golpha Jesu', author: 'David Kakap', category: 'Gospel' }
];

@Component({
  selector: 'app-songbook',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, RouterLink],
  templateUrl: './songbook.component.html',
  styleUrl: './songbook.component.scss'
})
export class SongbookComponent {
  private readonly supabaseService = inject(SupabaseService);

  protected readonly songs = signal<Song[]>(fallbackSongs);
  protected readonly searchTerm = signal('');
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly currentType = signal('All Song Type');

  protected readonly filteredSongs = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();

    if (!term) {
      return this.songs();
    }

    return this.songs().filter((song) =>
      [song.title, song.author, song.category, song.number?.toString()]
        .filter(Boolean)
        .some((value) => value?.toLowerCase().includes(term))
    );
  });

  constructor() {
    void this.loadSongs();
  }

  protected updateSearchTerm(value: string): void {
    this.searchTerm.set(value);
  }

  private async loadSongs(): Promise<void> {
    try {
      const songs = await this.supabaseService.getSongs();

      if (songs.length > 0) {
        this.songs.set(songs);
      }
    } catch {
      this.errorMessage.set('Showing sample songs from the current PBC songbook until Supabase is configured.');
    } finally {
      this.isLoading.set(false);
    }
  }
}
