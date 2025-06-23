"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  ShoppingCart,
  Star,
  ArrowUpRight,
  TrendingUp,
  Zap,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

export default function ShortsPage() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  // Single product data for demo
  const product = {
    id: 1,
    name: "AirPods Pro Max",
    shortDesc:
      "Premium wireless over-ear headphones with industry-leading Active Noise Cancellation",
    detailedDesc:
      "Experience unparalleled audio quality with computational audio, custom acoustic design, and spatial audio that puts you inside the music. Features up to 20 hours of listening time with ANC enabled.",
    price: 399.99,
    originalPrice: 549.99,
    discount: 27,
    rating: 4.8,
    reviews: 2847,
    catchyReview: "Mind-blowing sound quality! 🔥",
    badge: "Trending",
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="h-screen flex flex-col bg-black">
      {/* Single Image Section - Takes most space */}
      <div className="flex-1 relative p-4">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 rounded-2xl" />

        {/* Top Overlay - Product Details Link */}
        <div className="absolute top-6 left-6 z-10">
          <Button
            size="sm"
            className="bg-black/50 backdrop-blur-sm border-white/20 text-white hover:bg-black/70"
            variant="outline"
          >
            <ArrowUpRight className="h-4 w-4 mr-1" />
            Details
          </Button>
        </div>

        {/* Product Badge */}
        <div className="absolute top-6 right-6 z-10">
          <Badge className="bg-purple-500 text-white border-0">
            <TrendingUp className="h-3 w-3" />
            <span className="ml-1">{product.badge}</span>
          </Badge>
        </div>

        {/* Single Product Image */}
        <div className="w-full h-full bg-gray-200 rounded-2xl overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-lg">Product Image</span>
          </div>
        </div>
      </div>

      {/* Product Details Section - Toggleable */}
      <div className="bg-black/95 backdrop-blur-sm border-t border-white/10">
        {/* Toggle Handle */}
        <div className="flex items-center justify-center py-2">
          <button
            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <div className="w-8 h-1 bg-white/30 rounded-full"></div>
            {isDescriptionOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
            <div className="w-8 h-1 bg-white/30 rounded-full"></div>
          </button>
        </div>

        {/* Collapsed View - Basic Info */}
        {!isDescriptionOpen && (
          <div className="px-4 pb-4">
            <div className="text-white space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">${product.price}</span>
                  <Badge className="bg-red-500 text-white text-xs">
                    {product.discount}% OFF
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-white/60 text-xs">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>
                <div className="text-xs text-white/60">Tap to see more</div>
              </div>
            </div>
          </div>
        )}

        {/* Expanded View - Full Details */}
        {isDescriptionOpen && (
          <div className="px-4 pb-4 max-h-64 overflow-y-auto">
            <div className="text-white space-y-4">
              {/* Product Name & Price */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-bold leading-tight">
                    {product.name}
                  </h2>
                  <p className="text-white/90 text-sm mt-1">
                    {product.shortDesc}
                  </p>
                </div>
                <div className="text-right ml-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <Badge className="bg-red-500 text-white">
                      {product.discount}% OFF
                    </Badge>
                  </div>
                  <span className="text-sm text-white/60 line-through">
                    ${product.originalPrice}
                  </span>
                </div>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-white/60 text-sm">
                    ({product.reviews.toLocaleString()} reviews)
                  </span>
                </div>
              </div>

              {/* Detailed Description */}
              <div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {product.detailedDesc}
                </p>
              </div>

              {/* Catchy Review */}
              <div className="bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                <p className="text-sm font-medium">{`"${product.catchyReview}"`}</p>
              </div>

              {/* Additional Features */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white/90">
                  Key Features:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-white/70">
                  <div>• Active Noise Cancellation</div>
                  <div>• 20hr Battery Life</div>
                  <div>• Spatial Audio</div>
                  <div>• Premium Materials</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action Buttons - Fixed at bottom */}
      <div className="bg-black/95 backdrop-blur-sm p-4 border-t border-white/10">
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20 font-medium"
            onClick={handleWishlist}
          >
            <Heart
              className={`h-4 w-4 ${
                isWishlisted ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </Button>

          <Button
            size="sm"
            className="flex-1 bg-white text-black hover:bg-white/90 font-medium"
          >
            <Zap className="h-4 w-4 mr-2" />
            Buy Now
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20 font-medium"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
