import './MediaCard.css';
import { FaRegBookmark } from 'react-icons/fa';
import { TbMovie } from 'react-icons/tb';

export default function MediaCard() {
  return (
    <div className="MediaCard">
      <i className="bookmark">
        <FaRegBookmark className="icon" />
      </i>
      <div className="info">
        <div className="top text-preset-5 ">
          <span className="year">2019</span>
          <span className="bullet">&#8226;</span>
          <span className="content_type_container">
            <TbMovie />
            <span className="content_type">Movie</span>
          </span>
          <span className="bullet">&#8226;</span>
          <span className="category">PG</span>
        </div>
        <span className="content_title text-preset-3 ">Beyond Earth</span>
      </div>
    </div>
  );
}
