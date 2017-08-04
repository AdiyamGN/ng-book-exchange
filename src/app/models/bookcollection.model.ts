export interface BookCollection {
  $key?: string;
  title: string;
  author: string;
  owner: string;
  date?: Date;
  url: string;
}