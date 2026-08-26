import MediaGrid from '../components/MediaGrid';
import SearchBar from '../components/SearchBar';
import { useAppSelector } from '../store/hooks';
import './MoviesPage.css';

export default function MoviesPage() {
  const movies = useAppSelector((store) => {
    return store.content.filter((item) => {
      return item.category === 'Movie';
    });
  });
  return (
    <div className="MoviesPage">
      <SearchBar placeholder="Search for Movies" />
      <MediaGrid
        title="Movies"
        contents={movies}
      />
    </div>
  );
}
