import GridCard from './GridCard';
import './MediaGrid.css';

import type { ContentData } from '../types';

type MediaGridProps = {
  title: string;
  contents: ContentData;
};

export default function MediaGrid({ title, contents }: MediaGridProps) {
  return (
    <div className="MediaGrid">
      {contents.length > 0 && <h2 className="title">{title}</h2>}

      <div className="grid_container">
        {contents.map((item) => {
          return (
            <GridCard
              key={item.title}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}
