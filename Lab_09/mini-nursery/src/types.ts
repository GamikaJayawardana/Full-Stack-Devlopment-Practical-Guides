export interface Plant {
    id: number;
    name: string;
    scientific?: string; // ? used to denote optional properties
    difficulty: 'Easy' | 'Medium' | 'Hard';
    light: 'Low' | 'Medium' | 'Bright';
    water: 'Low' | 'Moderate' | 'Frequent';
    rarity?: 'Common' | 'Uncommon' | 'Rare';
    description: string;
}


