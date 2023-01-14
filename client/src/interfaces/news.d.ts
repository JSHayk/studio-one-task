export interface INews {
  _id: string;
  keywords: {
    _id: string;
    keywords: string;
    user_id: string;
  }[];
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
  specificData: INews | null;
  isEdit: boolean;
}

export interface IAddNews {
  payload: INews[];
}
export interface IAddSpecificNews {
  payload: INews;
}
