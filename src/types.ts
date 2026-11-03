export type Category = 'all' | 'stress' | 'sommeil' | 'focus' | 'humeur';

export interface HerbPractice {
  id: string;
  name: string;
  latinName: string;
  category: 'stress' | 'sommeil' | 'focus' | 'humeur';
  categoryLabel: string;
  description: string;
  benefits: string[];
  psychologicalImpact: string;
  recommendedUse: string;
  badge: string;
  badgeColor: 'sage' | 'lavender' | 'amber';
  readTime: string;
}

export interface MoodEntry {
  mood: 'serene' | 'calm' | 'neutral' | 'stressed' | 'exhausted';
  label: string;
  emoji: string;
  color: string;
  advice: string;
}

