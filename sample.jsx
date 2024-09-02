import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Globe, ShoppingCart, Truck, Stamp, Search, Filter, MapPin } from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState("platform")

  const handleTabChange = (value) => {
    setActiveTab(value)
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-6">National Web Community of Philatelists</h1>
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="platform">Home</TabsTrigger>
          <TabsTrigger value="ordering">Ordering</TabsTrigger>
          <TabsTrigger value="postal">Postal Services</TabsTrigger>
          <TabsTrigger value="cancellation">Cancellations</TabsTrigger>
        </TabsList>
        <TabsContent value="platform">
        <Card>
            <CardHeader>
              <CardTitle>
                <Globe className="inline-block mr-2" />
                Explore Philatelic Treasures
              </CardTitle>
              <CardDescription>Discover stamps and postal items from across India</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-4">
                <Input placeholder="Search stamps, series, themes..." className="flex-grow" />
                <Button>
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item}>
                    <CardContent className="p-4">
                      <img src={`/placeholder.svg?height=100&width=150`} alt={`Stamp ${item}`} className="w-full h-40 object-cover mb-2" />
                      <h3 className="font-semibold">Indian Wildlife Series - Tiger</h3>
                      <p className="text-sm text-gray-600">Released: May 2023</p>
                      <p className="text-sm text-gray-600">Circle: Maharashtra</p>
                      <Button className="mt-2 w-full">View Details</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="ordering">
          <Card>
            <CardHeader>
              <CardTitle>
                <ShoppingCart className="inline-block mr-2" />
                Order Philatelic Items
              </CardTitle>
              <CardDescription>Secure online ordering and payment system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div className="flex-grow">
                    <Label htmlFor="search-order">Search Items</Label>
                    <Input id="search-order" placeholder="Enter stamp name, series, or theme" />
                  </div>
                  <div>
                    <Label htmlFor="filter-order">Filter By</Label>
                    <Select>
                      <SelectTrigger id="filter-order">
                        <SelectValue placeholder="Select filter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Release Date</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[1, 2, 3].map((item) => (
                      <TableRow key={item}>
                        <TableCell>Indian Wildlife Series - Tiger</TableCell>
                        <TableCell>May 15, 2023</TableCell>
                        <TableCell>₹50</TableCell>
                        <TableCell>
                          <Button size="sm">Add to Cart</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">View Cart</Button>
              <Button>Proceed to Checkout</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="postal">
          <Card>
            <CardHeader>
              <CardTitle>
                <Truck className="inline-block mr-2" />
                Postal Services
              </CardTitle>
              <CardDescription>Track your orders and manage deliveries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="tracking-number">Enter Tracking Number</Label>
                  <div className="flex space-x-2">
                    <Input id="tracking-number" placeholder="e.g., IN123456789" className="flex-grow" />
                    <Button>Track</Button>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Expected Delivery</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[1, 2, 3].map((order) => (
                      <TableRow key={order}>
                        <TableCell>ORD-2023-{order.toString().padStart(4, '0')}</TableCell>
                        <TableCell>Indian Wildlife Series (3 items)</TableCell>
                        <TableCell>In Transit</TableCell>
                        <TableCell>June 5, 2023</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Orders</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="cancellation">
          <Card>
            <CardHeader>
              <CardTitle>
                <Stamp className="inline-block mr-2" />
                Cancellation Services
              </CardTitle>
              <CardDescription>Request special cancellations for your philatelic items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cancellation-type">Cancellation Type</Label>
                    <Select>
                      <SelectTrigger id="cancellation-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-day">First Day of Issue</SelectItem>
                        <SelectItem value="special-event">Special Event</SelectItem>
                        <SelectItem value="commemorative">Commemorative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="cancellation-date">Cancellation Date</Label>
                    <Input id="cancellation-date" type="date" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cancellation-location">Cancellation Location</Label>
                  <Select>
                    <SelectTrigger id="cancellation-location">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai GPO</SelectItem>
                      <SelectItem value="delhi">Delhi GPO</SelectItem>
                      <SelectItem value="kolkata">Kolkata GPO</SelectItem>
                      <SelectItem value="chennai">Chennai GPO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="special-instructions">Special Instructions</Label>
                  <Input id="special-instructions" placeholder="Any specific requirements for the cancellation" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Clear Form</Button>
              <Button>Submit Request</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}