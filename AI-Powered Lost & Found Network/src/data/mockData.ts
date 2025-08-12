import { Report, Notification } from '../types';

export const mockReports: Report[] = [
  {
    id: '1',
    type: 'lost',
    category: 'pet',
    title: 'Golden Retriever - Max',
    description: 'Friendly golden retriever, 3 years old, wearing a blue collar with name tag. Last seen at Central Park near the fountain.',
    location: {
      address: 'Central Park, New York, NY',
      lat: 40.7829,
      lng: -73.9654
    },
    dateReported: '2024-01-15T10:30:00Z',
    dateIncident: '2024-01-14T16:00:00Z',
    images: ['https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=800'],
    contactInfo: {
      name: 'Sarah Johnson',
      email: 'sarah@email.com',
      phone: '+1-555-0123'
    },
    status: 'active',
    aiMatchConfidence: 92,
    matches: ['2', '8']
  },
  {
    id: '2',
    type: 'found',
    category: 'pet',
    title: 'Found Golden Dog',
    description: 'Found a golden retriever wandering near the park. Very friendly and well-trained. No collar visible.',
    location: {
      address: 'Central Park East, New York, NY',
      lat: 40.7794,
      lng: -73.9632
    },
    dateReported: '2024-01-15T14:20:00Z',
    dateIncident: '2024-01-15T13:00:00Z',
    images: ['https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800'],
    contactInfo: {
      name: 'Mike Chen',
      email: 'mike@email.com',
      phone: '+1-555-0456'
    },
    status: 'active',
    aiMatchConfidence: 92
  },
  {
    id: '3',
    type: 'lost',
    category: 'item',
    title: 'Black Leather Wallet',
    description: 'Black leather wallet with credit cards and ID. Lost while walking to work this morning.',
    location: {
      address: '5th Avenue, New York, NY',
      lat: 40.7648,
      lng: -73.9808
    },
    dateReported: '2024-01-16T09:15:00Z',
    dateIncident: '2024-01-16T08:30:00Z',
    images: ['https://images.pexels.com/photos/164593/pexels-photo-164593.jpeg?auto=compress&cs=tinysrgb&w=800'],
    contactInfo: {
      name: 'David Williams',
      email: 'david@email.com',
      phone: '+1-555-0789'
    },
    status: 'active'
  },
  {
    id: '4',
    type: 'found',
    category: 'item',
    title: 'iPhone 14 Pro',
    description: 'Found an iPhone 14 Pro in a blue case at the coffee shop. Screen is cracked but device works.',
    location: {
      address: 'Brooklyn, NY',
      lat: 40.6892,
      lng: -73.9442
    },
    dateReported: '2024-01-16T12:00:00Z',
    dateIncident: '2024-01-16T11:30:00Z',
    images: ['https://images.pexels.com/photos/163065/mobile-phone-android-apps-smartphone-163065.jpeg?auto=compress&cs=tinysrgb&w=800'],
    contactInfo: {
      name: 'Emma Davis',
      email: 'emma@email.com',
      phone: '+1-555-0321'
    },
    status: 'active'
  },
  {
    id: '5',
    type: 'lost',
    category: 'pet',
    title: 'Tabby Cat - Luna',
    description: 'Small tabby cat, very shy, wearing a pink collar. Indoor cat that escaped through an open window.',
    location: {
      address: 'Queens, NY',
      lat: 40.7282,
      lng: -73.7949
    },
    dateReported: '2024-01-17T07:45:00Z',
    dateIncident: '2024-01-16T22:00:00Z',
    images: ['https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800'],
    contactInfo: {
      name: 'Lisa Rodriguez',
      email: 'lisa@email.com',
      phone: '+1-555-0654'
    },
    status: 'active',
    aiMatchConfidence: 78
  }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'match',
    title: 'Potential Match Found!',
    message: 'We found a 92% match for your lost Golden Retriever',
    timestamp: '2024-01-15T15:30:00Z',
    read: false,
    reportId: '1'
  },
  {
    id: '2',
    type: 'message',
    title: 'New Message',
    message: 'Someone has inquired about your found cat report',
    timestamp: '2024-01-15T12:15:00Z',
    read: false,
    reportId: '5'
  },
  {
    id: '3',
    type: 'update',
    title: 'Report Updated',
    message: 'Your lost wallet report has been viewed 15 times',
    timestamp: '2024-01-15T10:00:00Z',
    read: true,
    reportId: '3'
  }
];