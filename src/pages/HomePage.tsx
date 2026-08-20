import MediaGrid from '../components/MediaGrid';
import Slider from '../components/Slider';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="HomePage">
      <Slider />
      <MediaGrid />
    </div>
  );
}
