'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock user data
const initialUserData = {
  username: 'johndoe',
  email: 'john@example.com',
  address: '123 Main St, City, Country',
  paymentMethod: '**** **** **** 1234'
}

export default function AccountPage() {
  const [userData, setUserData] = useState(initialUserData)
  const [isEditing, setIsEditing] = useState({
    username: false,
    email: false,
    address: false,
    paymentMethod: false,
    password: false
  })

  const handleEdit = (field: keyof typeof isEditing) => {
    setIsEditing(prev => ({ ...prev, [field]: true }))
  }

  const handleSave = (field: keyof typeof userData) => {
    // Here you would typically make an API call to update the user data
    setIsEditing(prev => ({ ...prev, [field]: false }))
  }

  const handleChange = (field: keyof typeof userData, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="username"
                    value={userData.username}
                    onChange={(e) => handleChange('username', e.target.value)}
                    disabled={!isEditing.username}
                  />
                  {isEditing.username ? (
                    <Button onClick={() => handleSave('username')}>Save</Button>
                  ) : (
                    <Button onClick={() => handleEdit('username')}>Edit</Button>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="email"
                    type="email"
                    value={userData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    disabled={!isEditing.email}
                  />
                  {isEditing.email ? (
                    <Button onClick={() => handleSave('email')}>Save</Button>
                  ) : (
                    <Button onClick={() => handleEdit('email')}>Edit</Button>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="address"
                    value={userData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    disabled={!isEditing.address}
                  />
                  {isEditing.address ? (
                    <Button onClick={() => handleSave('address')}>Save</Button>
                  ) : (
                    <Button onClick={() => handleEdit('address')}>Edit</Button>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="paymentMethod">Payment Method</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="paymentMethod"
                    value={userData.paymentMethod}
                    onChange={(e) => handleChange('paymentMethod', e.target.value)}
                    disabled={!isEditing.paymentMethod}
                  />
                  {isEditing.paymentMethod ? (
                    <Button onClick={() => handleSave('paymentMethod')}>Save</Button>
                  ) : (
                    <Button onClick={() => handleEdit('paymentMethod')}>Edit</Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Button>Update Password</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

