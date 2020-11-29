export interface Thumbnail {
  id?: string;
  name?: string;
  size?: number;
  key?: string;
  url: string;
  video_id?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface Tag {
  id?: string;
  name: string;
  area_id?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface Video {
  id: string;
  key: string;
  title: string;
  thumbnail?: Thumbnail;
  video_link: string;
  description: string;
  area_id: string;
  tags_ids: string[];
  tags: Tag[];
  created_at: Date;
  updated_at: Date;
}
