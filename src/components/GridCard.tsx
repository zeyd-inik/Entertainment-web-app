import { TbMovie } from 'react-icons/tb';

import './GridCard.css';

import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

import PlayIcon from '../assets/icon-play.svg';
import type { ContentItem } from '../types';
import { useAppDispatch } from '../store/hooks';
import { toggleBookmark } from '../store/contentSlice';

type GridCardProps = {
  item: ContentItem;
};

export default function GridCard({ item }: GridCardProps) {
  const isBookmarked = item?.isBookmarked;
  const dispatch = useAppDispatch();
  const sm = item?.thumbnail?.regular?.small.replace('./assets/', '/');
  const md = item?.thumbnail?.regular?.medium.replace('./assets/', '/');
  const lg = item?.thumbnail?.regular?.large.replace('./assets/', '/');
  return (
    <div className="GridCard">
      <div
        className="thumbnail"
        style={
          {
            '--sm': `url(${sm})`,
            '--md': `url(${md})`,
            '--lg': `url(${lg})`,
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
      </div>

      <div className="info">
        <div className="top">
          <span className="year">{item?.year}</span>

          <span className="bullet">&#8226;</span>

          <span className="content_type_container">
            <TbMovie />

            <span className="content_type">{item.category}</span>
          </span>

          <span className="bullet">&#8226;</span>

          <span className="category">{item.category}</span>
        </div>

        <span className="content_title">{item.title}</span>
      </div>
    </div>
  );
}
