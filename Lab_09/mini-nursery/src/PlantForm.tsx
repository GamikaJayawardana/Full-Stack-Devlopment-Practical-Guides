import React, { useState } from "react";
import type { Plant } from "./types";

interface PlantFormProps {
  onAdd: (plant: Omit<Plant, "id">) => void;
}

export const PlantForm: React.FC<PlantFormProps> = ({ onAdd }) => {
  const initialState = {
    name: "",
    scientific: "",
    difficulty: "Easy" as const,
    light: "Medium" as const,
    water: "Moderate" as const,
    rarity: "Common" as const,
    description: "",
  };

  const [form, setForm] = useState(initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name) return alert("Plant name is required");
    onAdd(form);
    setForm(initialState);
  };

  return (
    <div className="card p-3 bg-light border-0 shadow-sm mb-4">
      <h4 className="mb-3">Add New Plant</h4>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Plant name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Scientific name"
              value={form.scientific}
              onChange={(e) => setForm({ ...form, scientific: e.target.value })}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <select
              className="form-select"
              value={form.difficulty}
              onChange={(e) =>
                setForm({ ...form, difficulty: e.target.value as any })
              }
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select"
              value={form.light}
              onChange={(e) =>
                setForm({ ...form, light: e.target.value as any })
              }
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="Bright">Bright</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select"
              value={form.water}
              onChange={(e) =>
                setForm({ ...form, water: e.target.value as any })
              }
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="Frequent">Frequent</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Short description"
            rows={2}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Add Plant
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => setForm(initialState)}
        >
          Clear
        </button>
      </form>
    </div>
  );
};
