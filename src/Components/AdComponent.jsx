import { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2915175777820694"  // Replace with your AdSense Publisher ID
        data-ad-slot="8697667533"  // Replace with your Ad Slot ID
        data-ad-format="auto"
      ></ins>
    </div>
  );
};

export default AdComponent;
