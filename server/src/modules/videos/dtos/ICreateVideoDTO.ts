import Tag from '../infra/typeorm/entities/Tag';

export default interface ICreateVideoDTO {
  title: string;
  video_link: string;
  description: string;
  area_id: string;
  user_id: string;
  tags: Tag[];
}
