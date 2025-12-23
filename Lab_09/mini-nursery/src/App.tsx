import React, { useState, useMemo } from "react";
import type { Plant } from "./types";
import PlantList from "./PlantList";
import PlantCard from "./PlantCard";
import { PlantForm } from "./PlantForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import PeopleDropdown from "./components/PeopleDropdown";

interface AppProps {
  plants: Plant[];
}

const App: React.FC<AppProps> = ({ plants: initialPlants }) => {
  const [plants, setPlants] = useState<Plant[]>(initialPlants);
  const [selectedId, setSelectedId] = useState<number>(initialPlants[0]?.id);
  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const filteredPlants = useMemo(() => {
    return plants.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (difficultyFilter === "All" || p.difficulty === difficultyFilter)
    );
  }, [plants, search, difficultyFilter]);

  const selectedPlant = plants.find((p) => p.id === selectedId);

  const handleAdd = (newPlant: Omit<Plant, "id">) => {
    const plantWithId = { ...newPlant, id: Date.now() };
    setPlants([...plants, plantWithId]);
  };

  const handleDelete = (id: number) => {
    setPlants(plants.filter((p) => p.id !== id));
    if (selectedId === id) setSelectedId(plants[0]?.id);
  };

  return (
    <>
      <Header />
      <Banner>
        <h1>Welcome to Your Mini Nursery</h1>
      </Banner>
      <div className="container px-4">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Search plants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="form-select mb-3"
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <PeopleDropdown onSelect={(u) => console.log(u)} />
            <PlantList
              plants={filteredPlants}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
            <button
              className="btn btn-secondary w-100 mt-3"
              onClick={() => {
                setSearch("");
                setDifficultyFilter("All");
              }}
            >
              Reset Filters
            </button>
          </div>
          <div className="col-md-8">
            <PlantForm onAdd={handleAdd} />
            {selectedPlant && (
              <PlantCard plant={selectedPlant} onDelete={handleDelete} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
