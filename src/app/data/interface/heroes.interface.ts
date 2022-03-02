export interface HeroesHttpResponse {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: HeroesPageInfo;
}

interface HeroesPageInfo {
  count: number;
  limit: number;
  offset: number;
  results: HeroesListInterface[];
  etag: string;
  status: string;
  total: number;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: ComicItems[];
  returned: number;
  description: string;
}
interface ComicItems {
  name: string;
  resourceURI: string;
}
export interface HeroesListInterface {
  comics: Comics;
  description: string;
  events: any;
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  thumbnail: thumbnail;
}
interface thumbnail {
  extension: string;
  path: string;
}
