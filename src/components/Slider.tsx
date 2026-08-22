import MediaCard from './MediaCard';
import './Slider.css';

export default function Slider() {
  return (
    <div className="Slider">
      <h2>Trending</h2>
      <div className="slider_container">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </div>
  );
}
