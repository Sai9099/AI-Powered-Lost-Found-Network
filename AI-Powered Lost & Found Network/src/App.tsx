import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Home/Hero';
import Dashboard from './components/Dashboard/Dashboard';
import ReportForm from './components/Reports/ReportForm';
import ReportDetail from './components/Reports/ReportDetail';
import { Report } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showReportForm, setShowReportForm] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedReport(null);
    setShowReportForm(false);
  };

  const handleOpenReportForm = () => {
    setShowReportForm(true);
  };

  const handleReportClick = (report: Report) => {
    setSelectedReport(report);
    setCurrentPage('report-detail');
  };

  const handleReportSubmit = (data: any) => {
    console.log('Report submitted:', data);
    setShowReportForm(false);
    // Here you would typically send the data to your backend
    alert('Report submitted successfully! You will be notified of any matches.');
  };

  const renderCurrentPage = () => {
    if (selectedReport) {
      return (
        <ReportDetail 
          report={selectedReport} 
          onBack={() => setSelectedReport(null)}
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={handleNavigate} onOpenReportForm={handleOpenReportForm} />;
      case 'dashboard':
        return <Dashboard onReportClick={handleReportClick} />;
      default:
        return <Hero onNavigate={handleNavigate} onOpenReportForm={handleOpenReportForm} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onOpenReportForm={handleOpenReportForm}
      />
      
      <main>
        {renderCurrentPage()}
      </main>

      {/* Report Form Modal */}
      {showReportForm && (
        <ReportForm
          onClose={() => setShowReportForm(false)}
          onSubmit={handleReportSubmit}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold">FindIt</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered lost & found network helping communities reconnect with what matters most.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>AI Image Matching</li>
                <li>Location-Based Search</li>
                <li>Smart Notifications</li>
                <li>Community Network</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Help Center</li>
                <li>Safety Guidelines</li>
                <li>Contact Us</li>
                <li>Report Issues</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Data Protection</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 FindIt. All rights reserved. Powered by AI technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;