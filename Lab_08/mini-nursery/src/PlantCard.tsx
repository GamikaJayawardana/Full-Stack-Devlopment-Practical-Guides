import React from 'react';
import type { Plant } from './types';

interface PlantCardProps {
    plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">

                
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        <h3 className="card-title">{plant.name}</h3>
                        <h6 className="card-subtitle mb-2 text-muted">({plant.scientific})</h6>
                    </div>
                    <div>
                        <button className="btn btn-outline-secondary btn-sm me-2">View</button>
                        <button className="btn btn-outline-danger btn-sm">Buy (UI-only)</button>
                    </div>
                </div>

               
                <p className="card-text">{plant.description}</p>

                {/* Badges for Difficulty and Rarity */}
                <div className="mb-3">
                    <span className="badge bg-secondary me-2">{plant.difficulty}</span>
                    <span className="badge bg-warning text-dark">{plant.rarity}</span>
                </div>

                
                <div className="row">
                    <div className="col-sm-6">
                        <small className="text-muted">Light</small>
                        <div>☀️ {plant.light}</div>
                    </div>
                    <div className="col-sm-6">
                        <small className="text-muted">Water</small>
                        <div>💧 {plant.water}</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlantCard;