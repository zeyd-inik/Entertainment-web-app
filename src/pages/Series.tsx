import MediaGrid from '../components/MediaGrid';
import SearchBar from '../components/SearchBar';
import { useAppSelector } from '../store/hooks';
import './Series.css';

export default function Series() {
  const series = useAppSelector((store) => {
    return store.content.filter((i) => {
      return i?.category === 'TV Series';
    });
  });
  return (
    <div className="Series">
      <SearchBar placeholder="Search for TV series" />
      <MediaGrid
        title="TV Series"
        contents={series}
      />
    </div>
  );
}
