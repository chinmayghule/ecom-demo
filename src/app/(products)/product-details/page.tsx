"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowLeft,
  Heart,
  Star,
  Plus,
  Minus,
  ShoppingCart,
  Share2,
  ChevronDown,
  ChevronUp,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { redirect } from "next/navigation";

// Mock product data
const product = {
  id: 1,
  name: "Premium Wireless Bluetooth Headphones",
  price: 79.99,
  originalPrice: 99.99,
  rating: 4.5,
  totalReviews: 128,
  description:
    "Experience premium sound quality with these wireless Bluetooth headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for long listening sessions.",
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Quick charge: 5 min = 3 hours",
    "Premium leather ear cups",
    "Bluetooth 5.0 connectivity",
    "Built-in microphone",
  ],
  images: [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ],
  inStock: true,
  category: "Electronics",
  brand: "AudioTech",
  sku: "AT-WH-001",
};

const reviews = [
  {
    id: 1,
    user: "Sarah M.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2 days ago",
    comment:
      "Amazing sound quality! The noise cancellation works perfectly and the battery lasts all day. Highly recommend!",
    helpful: 12,
  },
  {
    id: 2,
    user: "Mike R.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "1 week ago",
    comment:
      "Great headphones overall. Very comfortable for long use. Only minor issue is they're a bit heavy.",
    helpful: 8,
  },
  {
    id: 3,
    user: "Emma L.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Best purchase I've made this year. The sound is crystal clear and the build quality is excellent.",
    helpful: 15,
  },
];

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const renderStars = (rating: number, size: "sm" | "md" = "sm") => {
    const starSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${starSize} ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="sm"
            className="p-2"
            onClick={() => {
              redirect("/products");
            }}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="p-2">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-2"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart
                className={`h-5 w-5 ${
                  isWishlisted ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative">
        <div className="aspect-square overflow-hidden bg-gray-200">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-sm">Product Image</span>
          </div>
        </div>

        {/* Sale Badge */}
        {product.originalPrice && (
          <Badge className="absolute top-4 left-4 bg-red-500">
            Save ${(product.originalPrice - product.price).toFixed(2)}
          </Badge>
        )}
      </div>

      {/* Image Thumbnails */}
      <div className="p-4">
        <div className="flex gap-2 overflow-x-auto">
          {product.images.map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200 bg-gray-200"
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400 text-xs">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-4">
        {/* Title and Brand */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
          <h1 className="text-xl font-bold leading-tight">{product.name}</h1>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          {renderStars(product.rating)}
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">
            ({product.totalReviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
          {product.originalPrice && (
            <Badge variant="secondary" className="ml-2">
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              % OFF
            </Badge>
          )}
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              product.inStock ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <span
            className={`text-sm ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Quantity:</span>
          <div className="flex items-center border rounded-lg">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="h-10 w-10 p-0"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-4 py-2 text-center min-w-[3rem]">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleQuantityChange(1)}
              className="h-10 w-10 p-0"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Truck className="h-4 w-4 text-green-600" />
            <span>Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-blue-600" />
            <span>2-year warranty included</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RotateCcw className="h-4 w-4 text-orange-600" />
            <span>30-day return policy</span>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="border-t">
        <Collapsible
          open={isDescriptionOpen}
          onOpenChange={setIsDescriptionOpen}
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
            <h3 className="font-semibold">Description</h3>
            {isDescriptionOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4">
            <p className="text-sm text-muted-foreground mb-4">
              {product.description}
            </p>
            <div>
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Reviews Section */}
      <div className="border-t">
        <Collapsible open={isReviewsOpen} onOpenChange={setIsReviewsOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Reviews</h3>
              <Badge variant="secondary">{product.totalReviews}</Badge>
            </div>
            {isReviewsOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4">
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={review.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback>{review.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">
                            {review.user}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {review.date}
                          </span>
                        </div>
                        {renderStars(review.rating, "sm")}
                        <p className="text-sm mt-2 text-muted-foreground">
                          {review.comment}
                        </p>
                        <div className="flex items-center gap-1 mt-2">
                          <span className="text-xs text-muted-foreground">
                            Helpful ({review.helpful})
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full">
                View All Reviews
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Sticky Add to Cart */}
      <div className="sticky bottom-0 bg-white border-t p-4">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">
            Buy Now
          </Button>
          <Button className="flex-1" disabled={!product.inStock}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
