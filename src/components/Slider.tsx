import MediaCard from './MediaCard';
import './Slider.css';

import { useAppSelector } from '../store/hooks';

export default function Slider() {
  const trendings = useAppSelector((store) => {
    return store.content.filter((item) => {
      return item.isTrending;
    });
  });
  return (
    <div className="Slider">
      <h2>Trending</h2>
      <div className="slider_container">
        {trendings.map((item) => {
          return (
            <MediaCard
              key={item.title}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}
