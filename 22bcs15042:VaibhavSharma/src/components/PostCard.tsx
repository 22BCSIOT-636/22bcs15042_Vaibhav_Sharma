import React from 'react';
import { MapPin, Hash, Clock } from 'lucide-react';
import { Post } from '../types';
import { formatDistanceToNow } from 'date-fns';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const sentimentColor = {
    positive: 'bg-green-100 text-green-800',
    negative: 'bg-red-100 text-red-800',
    neutral: 'bg-gray-100 text-gray-800',
  }[post.sentiment];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={post.imageUrl} 
        alt={post.caption} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold">@{post.username}</span>
          <span className={`px-2 py-1 rounded-full text-sm ${sentimentColor}`}>
            {post.sentiment}
          </span>
        </div>
        <p className="text-gray-600 mb-3">{post.caption}</p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{post.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Hash className="h-4 w-4 mr-1" />
          <div className="flex flex-wrap gap-1">
            {post.hashtags.map((tag) => (
              <span key={tag} className="bg-gray-100 px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>{formatDistanceToNow(new Date(post.timestamp))} ago</span>
        </div>
      </div>
    </div>
  );
}