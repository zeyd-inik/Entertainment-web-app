import MediaGrid from '../components/MediaGrid';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';
import { useAppSelector } from '../store/hooks';
import './HomePage.css';

export default function HomePage() {
  const filteredArray = useAppSelector((store) => {
    return store.content.filter((_, index) => {
      return index % 2 === 0;
    });
  });
  return (
    <div className="HomePage">
      <SearchBar placeholder={'Search for movies or TV series'} />
      <Slider />
      <MediaGrid
        title="Recommended for you"
        contents={filteredArray}
      />
    </div>
  );
}
