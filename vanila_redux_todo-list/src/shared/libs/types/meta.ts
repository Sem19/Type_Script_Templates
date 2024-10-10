export interface ResponseMeta {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface PaginationInfo extends ResponseMeta {
  currentPage: number;
  searchQuery: string;
}
