import { TbMovie } from 'react-icons/tb';
import './GridCard.css';
import { FaRegBookmark } from 'react-icons/fa';

export default function GridCard() {
  return (
    <div className="GridCard">
      <div className="thumbnail">
        <i className="bookmark">
          <FaRegBookmark className="icon" />
        </i>
      </div>
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
