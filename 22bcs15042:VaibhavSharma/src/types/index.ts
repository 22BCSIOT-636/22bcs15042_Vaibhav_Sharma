export interface Post {
  id: string;
  username: string;
  location: string;
  caption: string;
  imageUrl: string;
  hashtags: string[];
  timestamp: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  category: 'rescue' | 'damage' | 'aid' | 'other';
}

export interface AlertConfig {
  keywords: string[];
  locations: string[];
  enabled: boolean;
}