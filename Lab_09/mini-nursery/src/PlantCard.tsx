import React from "react";
import type { Plant } from "./types";

interface PlantCardProps {
  plant: Plant;
  onDelete: (id: number) => void; 
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, onDelete }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h3 className="card-title">{plant.name}</h3>
            <h6 className="card-subtitle mb-2 text-muted">
              ({plant.scientific})
            </h6>
          </div>
          <div>
            <button
              className="btn btn-outline-secondary btn-sm me-2"
              onClick={() => alert(`Plant: ${plant.name}`)} 
            >
              View Details
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => onDelete(plant.id)} 
            >
              Remove
            </button>
          </div>
        </div>

        <p className="card-text mt-3">{plant.description}</p>

        <div className="mb-3">
          <span className="badge bg-secondary me-2">{plant.difficulty}</span>
          <span className="badge bg-warning text-dark">{plant.rarity}</span>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <small className="text-muted d-block">Light</small>
            <span>☀️ {plant.light}</span>
          </div>
          <div className="col-sm-6">
            <small className="text-muted d-block">Water</small>
            <span>💧 {plant.water}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
