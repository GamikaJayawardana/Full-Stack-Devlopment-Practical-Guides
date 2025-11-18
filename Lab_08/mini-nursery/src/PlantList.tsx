import React from 'react';
import type { Plant } from './types';

interface PlantListProps {
  plants: Plant[];
  selectedId: number;
  onSelect: (id: number) => void;
}

const PlantList: React.FC<PlantListProps> = ({ plants, selectedId, onSelect }) => {
  return (
    <div className="list-group">
      {plants.map((plant) => (
        <button
          key={plant.id}
          type="button"
          // We add 'active' if this plant is the selected one
          className={`list-group-item list-group-item-action ${plant.id === selectedId ? 'active' : ''}`}
          onClick={() => onSelect(plant.id)}
          style={{ cursor: 'pointer' }} // [cite: 32]
        >
          <div className="d-flex w-100 justify-content-between align-items-center mb-1">
            <h5 className="mb-1">{plant.name}</h5>
            <div>
              {/* Badges for Difficulty and Rarity  */}
              <span className={`badge ${plant.id === selectedId ? 'bg-light text-dark' : 'bg-success'} me-1`}>
                {plant.difficulty}
              </span>
              <span className={`badge ${plant.id === selectedId ? 'bg-light text-dark' : 'bg-info text-dark'}`}>
                {plant.rarity}
              </span>
            </div>
          </div>
          <p className="mb-1 small">{plant.scientific}</p>
        </button>
      ))}
    </div>
  );
};

export default PlantList;