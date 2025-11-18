import React from 'react';

export const PlantForm: React.FC = () => {
    return (
        <div className="card p-3 bg-light">
            <h4 className="mb-3">Add New Plant (UI-only)</h4>
            <form>
                {/* Row 1: Text Inputs */}
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Plant name" disabled />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Scientific name" disabled />
                    </div>
                </div>

                {/* Row 2: Select Dropdowns */}
                <div className="row mb-3">
                    <div className="col">
                        <select className="form-select" defaultValue="" disabled>
                            <option value="" disabled>Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-select" defaultValue="" disabled>
                            <option value="" disabled>Light</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="Bright">Bright</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-select" defaultValue="" disabled>
                            <option value="" disabled>Water</option>
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
                        disabled
                    />
                </div>

            
                <div>
                    <button type="button" className="btn btn-primary me-2" disabled>
                        Add Plant
                    </button>
                    <button type="button" className="btn btn-outline-secondary" disabled>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};