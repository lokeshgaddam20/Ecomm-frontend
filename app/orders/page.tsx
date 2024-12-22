'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Timeline, TimelineItem, TimelineConnector, TimelineContent, TimelineDot } from "@/components/ui/timeline"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

type Order = {
  id: string
  amount: number
  date: string
  status: 'Dispatched' | 'Shipped' | 'Out for Delivery'
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from your backend
    const fetchOrders = async () => {
      // Simulating an API call
      const response = await new Promise<Order[]>((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 'ORD001', amount: 1500, date: '2023-06-01', status: 'Dispatched' },
            { id: 'ORD002', amount: 2000, date: '2023-06-05', status: 'Shipped' },
            { id: 'ORD003', amount: 1000, date: '2023-06-10', status: 'Out for Delivery' },
          ])
        }, 1000)
      })
      setOrders(response)
    }

    fetchOrders()
  }, [])

  const getStatusIndex = (status: Order['status']) => {
    const statuses = ['Dispatched', 'Shipped', 'Out for Delivery']
    return statuses.indexOf(status)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      {orders.map((order) => (
        <Card key={order.id} className="mb-6">
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Order ID: {order.id}</CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/orders/${order.id}`}>View Order</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <p className="mb-2"><span className="font-bold">Amount:</span> ₹{order.amount}</p>
            <p className="mb-4">Date Placed: {order.date}</p>
            <Timeline>
              <TimelineItem>
                <TimelineDot isCompleted={getStatusIndex(order.status) >= 0} />
                <TimelineConnector />
                <TimelineContent>Dispatched</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineDot isCompleted={getStatusIndex(order.status) >= 1} />
                <TimelineConnector />
                <TimelineContent>Shipped</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineDot isCompleted={getStatusIndex(order.status) >= 2} />
                <TimelineContent>Out for Delivery</TimelineContent>
              </TimelineItem>
            </Timeline>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

