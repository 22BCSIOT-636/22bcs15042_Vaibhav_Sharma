import React from 'react';
import { Filter, RefreshCw } from 'lucide-react';
import { PostCard } from './PostCard';
import { Post } from '../types';

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    username: 'emergency_response',
    location: 'California, USA',
    caption: 'Wildfire spreading in Northern California. Evacuation orders in place.',
    imageUrl: 'https://images.unsplash.com/photo-1542396601-dca920ea2807',
    hashtags: ['wildfire', 'emergency', 'california'],
    timestamp: new Date().toISOString(),
    sentiment: 'negative',
    category: 'damage'
  },
  {
    id: '2',
    username: 'rescue_team',
    location: 'Miami, Florida',
    caption: 'Relief supplies being distributed to hurricane affected areas.',
    imageUrl: 'https://images.unsplash.com/photo-1623600989906-6aae5aa131d4',
    hashtags: ['hurricane', 'relief', 'aid'],
    timestamp: new Date().toISOString(),
    sentiment: 'positive',
    category: 'aid'
  }
];

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Live Feed</h2>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}