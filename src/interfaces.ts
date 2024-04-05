interface Image {
  url: string;
  alt: string;
}

export interface Review {
  description: string;
  rating: number;
  id: string;
  username: string;
}

export interface Product {
  title: string;
  description: string;
  discountedPrice: number;
  id: string;
  image: Image;
  price: number;
  rating: number;
  reviews: Review[];
  tags: string[];
  quantity: number;
}

interface Meta {
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  nextPage: number;
  pageCount: number;
  previousPage: number;
  totalCount: number;
}

export interface ProductResponse {
  data: Product;
}

export interface ProductsResponse {
  data: Product[];
  meta: Meta;
}
