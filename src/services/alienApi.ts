import axios from 'axios';
import { Alien } from '../types/alien.types';

const API_BASE_URL = 'https://challenge.generatenu.com/api/v1';

// You'll need to replace this with your actual ID after registration
const YOUR_REGISTERED_ID = '28ada0e2-04eb-4403-91cd-376a54c9399a'; // 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const alienApi = {
  // Register your Northeastern email to get an ID
  register: async (email: string, nuid: string): Promise<string> => {
    try {
      const response = await api.post('/member/register', { email, nuid });
      return response.data.id;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  // Get all aliens with pagination
  getAllAliens: async (limit: number = 50, offset: number = 0): Promise<Alien[]> => {
    try {
      const response = await api.get<Alien[]>(
        `/challenge/frontend/${YOUR_REGISTERED_ID}/aliens`,
        {
          params: { limit, offset }
        }
      );
      return response.data || [];
    } catch (error) {
      console.error('Error fetching aliens:', error);
      return [];
    }
  },

  // Get a specific alien by ID (from the already fetched list)
  getAlienById: async (alienId: string): Promise<Alien | null> => {
    try {
      const aliens = await alienApi.getAllAliens(100, 0);
      return aliens.find(alien => alien.id === alienId) || null;
    } catch (error) {
      console.error('Error fetching alien:', error);
      return null;
    }
  },
};