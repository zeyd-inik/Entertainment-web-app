import './MediaCard.css';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { TbMovie } from 'react-icons/tb';
import PlayIcon from '../assets/icon-play.svg';
import type { ContentItem } from '../types';
import { useAppDispatch } from '../store/hooks';
import { toggleBookmark } from '../store/contentSlice';

type MediaCardProps = {
  item: ContentItem;
};

export default function MediaCard({ item }: MediaCardProps) {
  const isBookmarked = item.isBookmarked;
  const dispatch = useAppDispatch();
  const small = item?.thumbnail?.trending?.small.replace('./assets/', '/');
  const large = item?.thumbnail?.trending?.large.replace('./assets/', '/');
  return (
    <div
      className="MediaCard"
      style={
        {
          '--small': `url(${small})`,
          '--large': `url(${large})`,
        } as React.CSSProperties
      }
    >
      <div className="play_button">
        <img
          src={PlayIcon}
          alt="play button"
        />
        <span>Play</span>
      </div>
      <i
        className="bookmark"
        onClick={() => {
          dispatch(toggleBookmark(item.title));
        }}
      >
        {isBookmarked ? (
          <FaBookmark className="icon" />
        ) : (
          <FaRegBookmark className="icon" />
        )}
      </i>
      <div className="info">
        <div className="top">
          <span className="year">{item.year}</span>
          <span className="bullet">&#8226;</span>
          <span className="content_type_container">
            <TbMovie />
            <span className="content_type">{item.category}</span>
          </span>
          <span className="bullet">&#8226;</span>
          <span className="category">{item.rating}</span>
        </div>
        <span className="content_title">{item.title}</span>
      </div>
    </div>
  );
}
