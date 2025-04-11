import { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//pl26348450.profitableratecpm.com/b7/d3/63/b7d363643e155d53c7b6ab8e2e509bf7.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default AdComponent;
