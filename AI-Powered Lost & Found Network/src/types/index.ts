export interface Report {
  id: string;
  type: 'lost' | 'found';
  category: 'pet' | 'item' | 'person';
  title: string;
  description: string;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  dateReported: string;
  dateIncident: string;
  images: string[];
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
  status: 'active' | 'resolved' | 'expired';
  aiMatchConfidence?: number;
  matches?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Notification {
  id: string;
  type: 'match' | 'message' | 'update';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  reportId?: string;
}