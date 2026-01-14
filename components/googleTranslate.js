"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";

const TranslateComponent = () => {
  const googleTranslateRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const addGoogleTranslate = () => {
        try {
          const google = window.google;
          if (google && google.translate) {
            new google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages:
                  "af,ar,bn,zh-CN,zh-TW,hr,cs,da,nl,en,fi,fr,de,el,gu,hi,hu,id,it,ja,ko,ml,mr,ne,no,fa,pl,pt,pa,ro,ru,sr,si,es,sw,sv,ta,te,th,tr,uk,ur,vi",
                layout: google.translate.TranslateElement.InlineLayout.VERTICAL,
              },
              googleTranslateRef.current,
            );
          }
        } catch (error) {
          console.error("Error initializing Google Translate:", error);
        }
      };

      // Add the callback to window object
      window.googleTranslateElementInit = addGoogleTranslate;
    }
  }, []);

  return (
    <>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <div ref={googleTranslateRef} className="google-translate-container" />
    </>
  );
};

export default TranslateComponent;

// ok error
