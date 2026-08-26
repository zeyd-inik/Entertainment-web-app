import MediaGrid from '../components/MediaGrid';
import SearchBar from '../components/SearchBar';
import { useAppSelector } from '../store/hooks';
import './Bookmarks.css';

export default function Bookmarks() {
  const bookmarkedMovies = useAppSelector((store) => {
    return store.content.filter((i) => {
      return i.isBookmarked === true && i.category === 'Movie';
    });
  });
  const bookmarkedSeries = useAppSelector((store) => {
    return store.content.filter((i) => {
      return i.isBookmarked === true && i.category === 'TV Series';
    });
  });
  return (
    <div className="Bookmarks">
      <SearchBar placeholder="Search for bookmarked shows" />
      <MediaGrid
        title="Bookmarked movies"
        contents={bookmarkedMovies}
      />
      <MediaGrid
        title="Bookmarked TV Series"
        contents={bookmarkedSeries}
      />
    </div>
  );
}
