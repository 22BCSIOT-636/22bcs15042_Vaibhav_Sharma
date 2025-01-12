import React from 'react';
import { AlertCircle, Bell, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-2" />
            <h1 className="text-xl font-bold">Disaster Management System</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-indigo-700 rounded-full">
              <AlertCircle className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-indigo-700 rounded-full">
              <Bell className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}