import React from 'react';
import { Search, MapPin, Heart, Zap } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
  onOpenReportForm: () => void;
}

export default function Hero({ onNavigate, onOpenReportForm }: HeroProps) {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Reunite with your
            <span className="block bg-gradient-to-r from-blue-600 via-emerald-500 to-orange-500 bg-clip-text text-transparent">
              Lost Treasures
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered network connects lost and found reports across your community. 
            Using advanced image recognition and location matching, we help reunite you with what matters most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={onOpenReportForm}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Heart className="w-5 h-5" />
              <span>Report Lost/Found</span>
            </button>
            
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Search Reports</span>
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all transform hover:-translate-y-1 border border-white/20 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Matching</h3>
              <p className="text-gray-600">
                Advanced image recognition and text analysis to find matches with up to 95% accuracy
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all transform hover:-translate-y-1 border border-white/20 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Location-Based Search</h3>
              <p className="text-gray-600">
                Smart proximity filtering to prioritize matches in your neighborhood
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all transform hover:-translate-y-1 border border-white/20 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Notifications</h3>
              <p className="text-gray-600">
                Get notified immediately when potential matches are found in your area
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12,547</div>
              <div className="text-gray-600">Items Found</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">8,432</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}