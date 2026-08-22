import GridCard from './GridCard';
import './MediaGrid.css';

export default function MediaGrid() {
  return (
    <div className="MediaGrid">
      <h2 className="title">Recommended for you</h2>
      <div className="grid_container">
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
      </div>
    </div>
  );
}
