import React, { useEffect, useState } from "react";
import { getUsers, type User } from "../services/UserService";

interface PeopleDropdownProps {
  onSelect: (user: User) => void;
}

const PeopleDropdown: React.FC<PeopleDropdownProps> = ({ onSelect }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users.");
        setLoading(false);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const user = users.find((u) => u.id === parseInt(e.target.value));
    if (user) {
      setSelectedUser(user);
      onSelect(user);
    }
  };

  if (loading)
    return <div className="spinner-border text-primary" role="status"></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="mb-4">
      <label className="form-label">Select a person</label>
      <select className="form-select mb-3" onChange={handleChange}>
        <option value="">Choose a user...</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name} ({user.email})
          </option>
        ))}
      </select>

      {selectedUser && (
        <div className="card bg-light border-0 shadow-sm p-3">
          <h5>{selectedUser.name}</h5>
          <p className="small mb-1">
            <strong>Email:</strong> {selectedUser.email}
          </p>
          <p className="small mb-1">
            <strong>Phone:</strong> {selectedUser.phone}
          </p>
          <p className="small mb-0">
            <strong>Company:</strong> {selectedUser.company?.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default PeopleDropdown;
