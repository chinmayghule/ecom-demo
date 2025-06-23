"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  User,
  Settings,
  Package,
  MapPin,
  CreditCard,
  Heart,
  Bell,
  Shield,
  LogOut,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Edit,
  Plus,
} from "lucide-react";

// Mock user data
const userData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  avatar: "/placeholder.svg?height=80&width=80",
  memberSince: "March 2022",
  totalOrders: 24,
  totalSpent: 1247.89,
  loyaltyPoints: 850,
};

const recentOrders = [
  {
    id: "ORD-001",
    date: "Dec 15, 2024",
    status: "Delivered",
    total: 79.99,
    items: 2,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "ORD-002",
    date: "Dec 10, 2024",
    status: "In Transit",
    total: 149.99,
    items: 1,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "ORD-003",
    date: "Dec 5, 2024",
    status: "Delivered",
    total: 34.99,
    items: 3,
    image: "/placeholder.svg?height=50&width=50",
  },
];

const addresses = [
  {
    id: 1,
    type: "Home",
    name: "Sarah Johnson",
    address: "123 Main Street, Apt 4B",
    city: "New York, NY 10001",
    isDefault: true,
  },
  {
    id: 2,
    type: "Work",
    name: "Sarah Johnson",
    address: "456 Business Ave, Suite 200",
    city: "New York, NY 10002",
    isDefault: false,
  },
];

const paymentMethods = [
  {
    id: 1,
    type: "Visa",
    last4: "4242",
    expiry: "12/26",
    isDefault: true,
  },
  {
    id: 2,
    type: "Mastercard",
    last4: "8888",
    expiry: "08/25",
    isDefault: false,
  },
];

export default function ProfilePage() {
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isAddressesOpen, setIsAddressesOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "In Transit":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="p-4">
          <h1 className="text-xl font-bold">My Profile</h1>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-white border-b">
        <div className="p-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 self-start">
              <AvatarImage src={userData.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-lg">
                {userData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{userData.name}</h2>
              <p className="text-sm text-muted-foreground">{userData.email}</p>
              <p className="text-xs text-muted-foreground">
                Member since {userData.memberSince}
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <CardContent className="p-0 sm:p-3 text-center">
              <div className="text-lg font-bold">{userData.totalOrders}</div>
              <div className="text-xs text-muted-foreground">Orders</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0 sm:p-3 text-center">
              <div className="text-lg font-bold">${userData.totalSpent}</div>
              <div className="text-xs text-muted-foreground">Total Spent</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0 sm:p-3 text-center">
              <div className="text-lg font-bold">{userData.loyaltyPoints}</div>
              <div className="text-xs text-muted-foreground">Points</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-12">
            <Heart className="h-4 w-4 mr-2" />
            Wishlist
          </Button>
          <Button variant="outline" className="h-12">
            <Package className="h-4 w-4 mr-2" />
            Track Order
          </Button>
        </div>
      </div>

      {/* Recent Orders Section */}
      <Card className="mx-4 mb-4">
        <Collapsible open={isOrdersOpen} onOpenChange={setIsOrdersOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              <span className="font-semibold">Recent Orders</span>
            </div>
            {isOrdersOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="px-4 pb-4 space-y-3">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Package className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{order.id}</span>
                      <Badge
                        className={`text-xs ${getStatusColor(order.status)}`}
                      >
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {order.date} • {order.items} items
                    </p>
                    <p className="text-sm font-medium">${order.total}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Orders
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Addresses Section */}
      <Card className="mx-4 mb-4">
        <Collapsible open={isAddressesOpen} onOpenChange={setIsAddressesOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">Addresses</span>
            </div>
            {isAddressesOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="px-4 pb-4 space-y-3">
              {addresses.map((address) => (
                <div key={address.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">
                        {address.type}
                      </span>
                      {address.isDefault && (
                        <Badge variant="secondary" className="text-xs">
                          Default
                        </Badge>
                      )}
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-sm">{address.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {address.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {address.city}
                  </p>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add New Address
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Payment Methods Section */}
      <Card className="mx-4 mb-4">
        <Collapsible open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              <span className="font-semibold">Payment Methods</span>
            </div>
            {isPaymentOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="px-4 pb-4 space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                      <CreditCard className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">
                          {method.type} •••• {method.last4}
                        </span>
                        {method.isDefault && (
                          <Badge variant="secondary" className="text-xs">
                            Default
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Expires {method.expiry}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <Edit className="h-3 w-3" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Payment Method
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Settings Section */}
      <Card className="mx-4 mb-4">
        <Collapsible open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4">
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              <span className="font-semibold">Account Settings</span>
            </div>
            {isSettingsOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="px-4 pb-4 space-y-2">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Notifications</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Privacy & Security</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Personal Information</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Logout Button */}
      <div className="p-4">
        <Button
          variant="outline"
          className="w-full text-red-600 border-red-200 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>

      {/* Bottom Spacing */}
      <div className="h-8"></div>
    </div>
  );
}
