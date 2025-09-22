import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true
    }));
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
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
                <h3 className="font-semibold text-gray-900 mb-1">Çerez Kullanımı</h3>
                <p className="text-sm text-gray-600">
                  Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. 
                  Zorunlu olmayan çerezler için onayınıza ihtiyacımız var.{' '}
                  <Link to="/cookie-policy" className="text-[#ef2b2d] hover:underline">
                    Detaylı bilgi
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
                Ayarlar
              </Button>
              <Button
                onClick={handleReject}
                variant="outline"
                size="sm"
                className="text-gray-600 border-gray-300"
              >
                Reddet
              </Button>
              <Button
                onClick={handleAccept}
                size="sm"
                className="bg-[#ef2b2d] hover:bg-[#ef2b2d]/90"
              >
                Kabul Et
              </Button>
            </div>
          </div>
        ) : (
          /* Detailed preferences */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#ef2b2d]" />
                Çerez Tercihleri
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
                  <h4 className="font-medium text-gray-900">Zorunlu Çerezler</h4>
                  <p className="text-sm text-gray-600">Site işlevselliği için gerekli</p>
                </div>
                <div className="text-sm text-gray-500">Her zaman aktif</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Analitik Çerezler</h4>
                  <p className="text-sm text-gray-600">Site kullanımını analiz eder</p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-[#ef2b2d]" />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Pazarlama Çerezler</h4>
                  <p className="text-sm text-gray-600">Kişiselleştirilmiş reklamlar</p>
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
                Yalnızca Zorunlu
              </Button>
              <Button
                onClick={handleAccept}
                size="sm"
                className="bg-[#ef2b2d] hover:bg-[#ef2b2d]/90"
              >
                Tümünü Kabul Et
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;