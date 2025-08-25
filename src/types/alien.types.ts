export interface AlienStats {
  atk: number;  // 1-3
  hp: number;   // 1-3
  spd: number;  // 1-3
}

export interface Alien {
  id: string;  // 6 character ID
  firstName: string;
  lastName: string;
  type: 'Regular' | 'Elite' | 'Boss';  // Capitalized as per API
  url: string;  // Profile picture URL
  stats: AlienStats;
}

// For display purposes, we'll compute max values
export interface AlienWithMaxStats extends Alien {
  maxHp: number;
  maxAtk: number;
  maxSpd: number;
}