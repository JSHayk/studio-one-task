export interface INews {
  _id: string;
  keywords: {}[];
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
}

export interface INewsState {
  data: INews[] | null;
}

export interface IAddNews {
  payload: INews[];
}
