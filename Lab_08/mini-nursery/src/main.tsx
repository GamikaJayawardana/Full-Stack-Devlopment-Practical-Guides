import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import type { Plant } from './types';
import 'bootstrap/dist/css/bootstrap.min.css';

const plants: Plant[] = [
  {
    id: 1,
    name: "Pilea peperomioides",
    scientific: "Pilea peperomioides",
    difficulty: "Easy",
    light: "Bright",
    water: "Moderate",
    rarity: "Uncommon",
    description: "Coin-shaped leaves, easy to propagate; prefers bright, indirect light."
  },
  {
    id: 2,
    name: "String of Hearts",
    scientific: "Ceropegia woodii",
    difficulty: "Medium",
    light: "Bright",
    water: "Low",
    rarity: "Rare",
    description: "Trailing succulent-like vine with heart-shaped leaves."
  },
  {
    id: 3,
    name: "ZZ Plant",
    scientific: "Zamioculcas zamiifolia",
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    rarity: "Common",
    description: "Extremely hardy plant that tolerates low light and neglect."
  }
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App plants={plants} />
  </StrictMode>,
)