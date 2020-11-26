export interface Thumbnail {
  id: string;
  name: string;
  size: number;
  key: string;
  url: string;
  video_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface Video {
  title: string;
  thumbnail?: Thumbnail;
  video_link: string;
  description: string;
  area_id: string;
  tags_ids: string[];
  created_at: Date;
  updated_at: Date;
}
