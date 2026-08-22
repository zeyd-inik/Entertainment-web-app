import { TbMovie } from 'react-icons/tb';
import './GridCard.css';
import { FaRegBookmark } from 'react-icons/fa';
import PlayIcon from '../assets/icon-play.svg';

export default function GridCard() {
  return (
    <div className="GridCard">
      <div className="thumbnail">
        <div className="play_button">
          <img
            src={PlayIcon}
            alt="play button"
          />
          <span>Play</span>
        </div>
        <i className="bookmark">
          <FaRegBookmark className="icon" />
        </i>
      </div>
      <div className="info">
        <div className="top">
          <span className="year">2019</span>
          <span className="bullet">&#8226;</span>
          <span className="content_type_container">
            <TbMovie />
            <span className="content_type">Movie</span>
          </span>
          <span className="bullet">&#8226;</span>
          <span className="category">PG</span>
        </div>
        <span className="content_title">Beyond Earth</span>
      </div>
    </div>
  );
}
