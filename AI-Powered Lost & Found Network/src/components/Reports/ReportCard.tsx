import React from 'react';
import { MapPin, Calendar, Eye, MessageCircle, Zap } from 'lucide-react';
import { Report } from '../../types';

interface ReportCardProps {
  report: Report;
  onClick: () => void;
}

export default function ReportCard({ report, onClick }: ReportCardProps) {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100 overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={report.images[0]}
          alt={report.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            report.type === 'lost' 
              ? 'bg-red-100 text-red-700' 
              : 'bg-green-100 text-green-700'
          }`}>
            {report.type.toUpperCase()}
          </span>
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
            {getCategoryIcon(report.category)} {report.category.charAt(0).toUpperCase() + report.category.slice(1)}
          </span>
        </div>
        
        {report.aiMatchConfidence && (
          <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Zap className="w-3 h-3" />
            <span>{report.aiMatchConfidence}% match</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {report.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {report.description}
        </p>

        <div className="space-y-2 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <MapPin className="w-3 h-3" />
            <span className="truncate">{report.location.address}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>Reported {formatDate(report.dateReported)}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-3 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye className="w-3 h-3" />
              <span>42 views</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-3 h-3" />
              <span>3 inquiries</span>
            </div>
          </div>
          
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
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
  );
}