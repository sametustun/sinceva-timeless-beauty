import { useEffect, useState } from 'react';

interface AnalyticsSettings {
  googleTagManagerId?: string;
  googleAnalyticsId?: string;
  facebookPixelId?: string;
  hotjarId?: string;
  clarityId?: string;
}

let analyticsLoaded = false;

export function useAnalytics() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Prevent loading twice
    if (analyticsLoaded) {
      setLoaded(true);
      return;
    }

    const loadAnalytics = async () => {
      try {
        // Fetch settings from backend
        const response = await fetch('https://sinceva.com/backend/admin/settings.php?type=integrations');
        const data = await response.json();
        
        if (!data.success || !data.data) {
          console.log('Analytics settings not available');
          return;
        }

        const settings: AnalyticsSettings = data.data;
        
        // Load Google Tag Manager
        if (settings.googleTagManagerId && !settings.googleTagManagerId.includes('YOUR_') && settings.googleTagManagerId.trim()) {
          loadGTM(settings.googleTagManagerId);
        }

        // Load Google Analytics 4
        if (settings.googleAnalyticsId && !settings.googleAnalyticsId.includes('YOUR_') && !settings.googleAnalyticsId.includes('XXXXX') && settings.googleAnalyticsId.trim()) {
          loadGA4(settings.googleAnalyticsId);
        }

        // Load Facebook Pixel
        if (settings.facebookPixelId && !settings.facebookPixelId.includes('YOUR_') && settings.facebookPixelId.trim()) {
          loadFacebookPixel(settings.facebookPixelId);
        }

        // Load Hotjar
        if (settings.hotjarId && settings.hotjarId !== '0' && settings.hotjarId.trim()) {
          loadHotjar(settings.hotjarId);
        }

        // Load Microsoft Clarity
        if (settings.clarityId && !settings.clarityId.includes('YOUR_') && settings.clarityId.trim()) {
          loadClarity(settings.clarityId);
        }

        analyticsLoaded = true;
        setLoaded(true);
        console.log('Analytics loaded successfully');
      } catch (error) {
        console.error('Failed to load analytics settings:', error);
      }
    };

    loadAnalytics();
  }, []);

  return { loaded };
}

function loadGTM(id: string) {
  // Check if already loaded
  if (document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${id}"]`)) {
    return;
  }

  // GTM script
  const script = document.createElement('script');
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${id}');
  `;
  document.head.appendChild(script);

  // GTM noscript iframe
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${id}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
  
  console.log('GTM loaded:', id);
}

function loadGA4(id: string) {
  // Check if already loaded
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${id}"]`)) {
    return;
  }

  // GA4 script
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(gtagScript);

  // GA4 config
  const configScript = document.createElement('script');
  configScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}');
  `;
  document.head.appendChild(configScript);
  
  console.log('GA4 loaded:', id);
}

function loadFacebookPixel(id: string) {
  // Check if already loaded
  if ((window as any).fbq) {
    return;
  }

  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${id}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);
  
  console.log('Facebook Pixel loaded:', id);
}

function loadHotjar(id: string) {
  // Check if already loaded
  if ((window as any).hj) {
    return;
  }

  const script = document.createElement('script');
  script.innerHTML = `
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:${id},hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;
  document.head.appendChild(script);
  
  console.log('Hotjar loaded:', id);
}

function loadClarity(id: string) {
  // Check if already loaded
  if ((window as any).clarity) {
    return;
  }

  const script = document.createElement('script');
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${id}");
  `;
  document.head.appendChild(script);
  
  console.log('Clarity loaded:', id);
}
