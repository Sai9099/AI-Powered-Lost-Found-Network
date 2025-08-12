import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, User, Phone, Mail, MessageCircle, Heart, Share, Flag, Zap, Eye } from 'lucide-react';
import { Report } from '../../types';

interface ReportDetailProps {
  report: Report;
  onBack: () => void;
}

export default function ReportDetail({ report, onBack }: ReportDetailProps) {
  const [showContact, setShowContact] = useState(false);
  const [message, setMessage] = useState('');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'pet':
        return '🐾';
      case 'item':
        return '📱';
      case 'person':
        return '👤';
      default:
        return '📋';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-1">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              report.type === 'lost' 
                ? 'bg-red-100 text-red-700' 
                : 'bg-green-100 text-green-700'
            }`}>
              {report.type.toUpperCase()}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {getCategoryIcon(report.category)} {report.category.charAt(0).toUpperCase() + report.category.slice(1)}
            </span>
            {report.aiMatchConfidence && (
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center space-x-1">
                <Zap className="w-3 h-3" />
                <span>{report.aiMatchConfidence}% AI Match</span>
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{report.title}</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Share className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Flag className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Images */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {report.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${report.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {report.description}
            </p>
          </div>

          {/* AI Matches */}
          {report.matches && report.matches.length > 0 && (
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Potential Matches</h2>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  AI-Powered
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Our AI has found {report.matches.length} potential matches based on image similarity and location proximity.
              </p>
              <div className="space-y-3">
                {report.matches.slice(0, 2).map((matchId) => {
                  const matchReport = { 
                    id: matchId, 
                    title: 'Golden Retriever Found', 
                    location: 'Central Park East', 
                    confidence: 92,
                    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400'
                  };
                  return (
                    <div key={matchId} className="bg-white rounded-lg p-4 flex items-center space-x-4">
                      <img
                        src={matchReport.image}
                        alt="Match"
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{matchReport.title}</h3>
                        <p className="text-sm text-gray-600">{matchReport.location}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-blue-600 text-sm font-medium">
                            {matchReport.confidence}% confidence match
                          </span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        View Match
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Location Map Placeholder */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Location
            </h2>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive map would be displayed here</p>
                <p className="text-sm text-gray-500 mt-1">{report.location.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Key Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Key Details</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-400" />
                <div className="text-sm">
                  <p className="text-gray-500">Date Reported</p>
                  <p className="font-medium">{formatDate(report.dateReported)}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-400" />
                <div className="text-sm">
                  <p className="text-gray-500">Date of Incident</p>
                  <p className="font-medium">{formatDate(report.dateIncident)}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <div className="text-sm">
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium">{report.location.address}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Eye className="w-4 h-4 text-gray-400" />
                <div className="text-sm">
                  <p className="text-gray-500">Status</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === 'active' 
                      ? 'bg-blue-100 text-blue-700'
                      : report.status === 'resolved'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {report.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <User className="w-4 h-4 mr-2" />
              Reporter Information
            </h3>
            
            {!showContact ? (
              <div className="text-center py-4">
                <p className="text-gray-600 mb-4">
                  Contact details are protected. Click below to reveal contact information.
                </p>
                <button
                  onClick={() => setShowContact(true)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Show Contact Info
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium">{report.contactInfo.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a 
                    href={`mailto:${report.contactInfo.email}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {report.contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a 
                    href={`tel:${report.contactInfo.phone}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {report.contactInfo.phone}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Quick Message */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              Send Message
            </h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message to the reporter..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={4}
            />
            <button className="w-full mt-3 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}