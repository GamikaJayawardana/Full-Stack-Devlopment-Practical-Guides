import React, { useState } from 'react';
import type { Plant } from './types';
import PlantList from './PlantList';
import PlantCard from './PlantCard';
import { PlantForm } from './PlantForm';

interface AppProps {
  plants: Plant[];
}

const App: React.FC<AppProps> = ({ plants }) => {

  const [selectedId, setSelectedId] = useState<number>(plants[0].id);
  const selectedPlant = plants.find((p) => p.id === selectedId);

  return (
    <div className=".container p-4">

      <h1 className="mb-4">Mini Indoor Plant Nursery</h1>

      <div className="row">


        <div className="col-md-4">

          
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search plants (UI-only)"
            />
          </div>

         
          <PlantList
            plants={plants}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />

          
          <button
            className="btn btn-secondary w-100 mt-3"
            // Optional: You can add logic here later to reset the selection
            onClick={() => console.log("Reset clicked")}
          >
            Reset Selection (UI-only)
          </button>

        </div>

        
        <div className="col-md-8">

          
          <div className="mb-4">
            <PlantForm />
          </div>

         
          {selectedPlant && <PlantCard plant={selectedPlant} />}

        </div>
      </div>
    </div>
  );
};

export default App;