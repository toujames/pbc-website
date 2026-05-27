import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '@environments/environment';
import { Song } from '@models/song.model';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private readonly client: SupabaseClient = createClient(
    environment.supabase.url,
    environment.supabase.anonKey
  );

  get supabase(): SupabaseClient {
    return this.client;
  }

  async getSongs(): Promise<Song[]> {
    const { data, error } = await this.client
      .from('songs')
      .select('id,title,number,author,category,created_at')
      .order('number', { ascending: true });

    if (error) {
      throw error;
    }

    return data ?? [];
  }

  async getSongById(id: string): Promise<Song | null> {
    const { data, error } = await this.client
      .from('songs')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  }
}
