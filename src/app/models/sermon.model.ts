export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  preachedOn: string;
  scripture?: string;
  audioUrl?: string;
  videoUrl?: string;
}
