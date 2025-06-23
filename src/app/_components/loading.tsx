"use client";

import { Crown } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Loading Animation */}
        <div className="relative">
          {/* Spinning Border Circle */}
          <div className="w-24 h-24 rounded-full border-4 border-gray-200 border-t-purple-500 animate-spin"></div>

          {/* Inner Circle with Crown */}
          <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Crown className="h-8 w-8 text-purple-500" />
          </div>
        </div>

        {/* Brand Title */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-foreground">Royal Shop</h2>
        </div>
      </div>
    </div>
  );
}
