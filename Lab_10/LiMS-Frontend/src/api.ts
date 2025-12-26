import axios from 'axios';

export interface Book {
  id?: string;
  title: string;
  author: string;
  publicationYear: number;
  genre: string;
  copiesAvailable: number;
  shelfLocation?: string;
}

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default api;