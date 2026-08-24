export type TrendingThumbnailSize = {
  small: string;
  large: string;
};
export type RegularThumbnailSize = {
  small: string;
  medium: string;
  large: string;
};

export type ContentItem = {
  title: string;
  thumbnail: {
    trending?: TrendingThumbnailSize;
    regular: RegularThumbnailSize;
  };
  year: number;
  category: 'Movie' | 'TV Series';
  rating: 'E' | 'PG' | '18+';
  isBookmarked: boolean;
  isTrending: boolean;
};
export type ContentData = ContentItem[];
