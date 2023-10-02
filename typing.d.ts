export interface ResponseType<T> {
  data: Data<T>;
  //   attributionText: string;
  //   attributionHTML: string;
  //   status: "Ok" | "Error";
}

export interface CharacterType {
  copyright: string;
  etag: string;
  results: Result[];
}

export interface LimitOffset {
  query?: string;
  limit: number;
  offset: number;
  queryKey?: "analytics" | "characters";
}
//* type generated from https://transform.tools/json-to-typescript

interface Data<T> {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[] | [];
  };
}

export interface Result {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Item {
  resourceURI: string;
  name: string;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
}

export interface Item2 {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: Item3[];
  returned: number;
}

export interface Item3 {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: Item4[];
  returned: number;
}

export interface Item4 {
  resourceURI: string;
  name: string;
}

export interface Url {
  type: string;
  url: string;
}
