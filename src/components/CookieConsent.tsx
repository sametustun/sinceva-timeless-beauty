import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true
    }));
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    localStorage.setItem('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false
    }));
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        {!showDetails ? (
          /* Simple consent banner */
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 text-[#ef2b2d] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">We Use Cookies</h3>
                <p className="text-sm text-gray-600">
                  We use cookies to improve your browsing experience, personalize content, and analyze our traffic. By continuing to use our site, you consent to our use of cookies.{' '}
                  <Link to="/cookie-policy" className="text-[#ef2b2d] hover:underline">
                    Learn more
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={handleCustomize}
                variant="outline"
                size="sm"
                className="text-gray-600 border-gray-300"
              >
                Preferences
              </Button>
              <Button
                onClick={handleReject}
                variant="outline"
                size="sm"
                className="text-gray-600 border-gray-300"
              >
                Reject
              </Button>
              <Button
                onClick={handleAccept}
                size="sm"
                className="bg-[#ef2b2d] hover:bg-[#ef2b2d]/90"
              >
                Accept All
              </Button>
            </div>
          </div>
        ) : (
          /* Detailed preferences */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#ef2b2d]" />
                Cookie Preferences
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid gap-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Necessary Cookies</h4>
                  <p className="text-sm text-gray-600">Required for site functionality</p>
                </div>
                <div className="text-sm text-gray-500">Always active</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">Help us analyze site usage</p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-[#ef2b2d]" />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                  <p className="text-sm text-gray-600">Personalized advertisements</p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-[#ef2b2d]" />
              </div>
            </div>
            
            <div className="flex justify-end gap-2 pt-2">
              <Button
                onClick={handleReject}
                variant="outline"
                size="sm"
              >
                Essential Only
              </Button>
              <Button
                onClick={handleAccept}
                size="sm"
                className="bg-[#ef2b2d] hover:bg-[#ef2b2d]/90"
              >
                Accept All
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;