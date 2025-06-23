"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Phone,
  Search,
  Star,
  TrendingUp,
  Crown,
  Sparkles,
  Tag,
  Heart,
  ShoppingCart,
  ArrowRight,
  User,
} from "lucide-react";
import { redirect } from "next/navigation";

interface IProduct {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
}

// Mock product data
const trendingProducts: IProduct[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 128,
    image: "/placeholder.svg?height=150&width=150",
    badge: "Trending",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 256,
    image: "/placeholder.svg?height=150&width=150",
    badge: "Hot",
  },
];

const popularProducts: IProduct[] = [
  {
    id: 3,
    name: "Premium T-Shirt",
    price: 24.99,
    originalPrice: null,
    rating: 4.2,
    reviews: 89,
    image: "/placeholder.svg?height=150&width=150",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Coffee Beans",
    price: 18.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 342,
    image: "/placeholder.svg?height=150&width=150",
    badge: "Best Seller",
  },
];

const newProducts: IProduct[] = [
  {
    id: 5,
    name: "Leather Wallet",
    price: 45.99,
    originalPrice: null,
    rating: 4.3,
    reviews: 67,
    image: "/placeholder.svg?height=150&width=150",
    badge: "New",
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 32.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 145,
    image: "/placeholder.svg?height=150&width=150",
    badge: "Just In",
  },
];

const saleProducts: IProduct[] = [
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.4,
    reviews: 203,
    image: "/placeholder.svg?height=150&width=150",
    badge: "33% OFF",
  },
  {
    id: 8,
    name: "Phone Case",
    price: 12.99,
    originalPrice: 19.99,
    rating: 4.1,
    reviews: 156,
    image: "/placeholder.svg?height=150&width=150",
    badge: "35% OFF",
  },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const ProductCard = ({ product }: { product: IProduct }) => (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="aspect-square bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-xs">Product</span>
        </div>
        <Badge className="absolute top-2 left-2 text-xs bg-purple-500 text-white">
          {product.badge}
        </Badge>
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-3">
        <h3 className="font-medium text-sm line-clamp-2 mb-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs">{product.rating}</span>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Button size="sm" variant="outline" className="h-7 w-7 p-0">
            <ShoppingCart className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const ProductSection = ({
    title,
    products,
    icon,
  }: {
    title: string;
    products: IProduct[];
    icon: React.ReactNode;
  }) => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <Button variant="ghost" size="sm">
          View All
          <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Crown className="h-6 w-6 text-purple-500" />
              <h1 className="text-2xl font-bold text-foreground">Royal Shop</h1>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                redirect("/auth/login");
              }}
            >
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="p-4">
        <Card className="overflow-hidden">
          <div className="relative">
            <div className="aspect-[16/9] bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-2">
                  Welcome to Royal Shop
                </h2>
                <p className="text-white/90 text-sm">
                  Discover premium products at amazing prices
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA Buttons */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-12 flex-col gap-1">
            <MapPin className="h-5 w-5" />
            <span className="text-xs">Our Location</span>
          </Button>
          <Button variant="outline" className="h-12 flex-col gap-1">
            <Phone className="h-5 w-5" />
            <span className="text-xs">Contact Us</span>
          </Button>
        </div>
      </div>

      {/* Product Sections */}
      <div className="p-4 space-y-6">
        {/* Trending Products */}
        <ProductSection
          title="Trending Now"
          products={trendingProducts}
          icon={<TrendingUp className="h-5 w-5 text-orange-500" />}
        />

        {/* Most Popular Products */}
        <ProductSection
          title="Most Popular"
          products={popularProducts}
          icon={<Crown className="h-5 w-5 text-yellow-500" />}
        />

        {/* New Products */}
        <ProductSection
          title="New Arrivals"
          products={newProducts}
          icon={<Sparkles className="h-5 w-5 text-green-500" />}
        />

        {/* Sale Products */}
        <ProductSection
          title="On Sale"
          products={saleProducts}
          icon={<Tag className="h-5 w-5 text-red-500" />}
        />
      </div>

      {/* Bottom Spacing */}
      <div className="h-8"></div>
    </div>
  );
}
