
/**
 * 📢 UNIVERSAL ADS MANAGER (پوری ویب سائٹ کا اشتہارات کنٹرول سسٹم)
 * ----------------------------------------------------------------
 * اس فائل میں آپ 5 بڑے ایڈ نیٹ ورکس کے کوڈ ڈال سکتے ہیں۔
 * اگر کسی سلاٹ کو خالی چھوڑیں گے تو وہ ویب سائٹ پر نظر نہیں آئے گا۔
 */

export const ADS_CONFIG = {
  // 1️⃣ GOOGLE ADSENSE (گوگل ایڈسینس)
  adsense: {
    headerAd: ``, // یہاں ہیڈر ایڈ کا کوڈ ڈالیں
    footerAd: ``, // یہاں فوٹر ایڈ کا کوڈ ڈالیں
    sidebarAd: ``, // یہاں سائیڈ بار ایڈ کا کوڈ ڈالیں
    floatingAd: ``, // یہاں فلوٹنگ (تیرتا ہوا) ایڈ کوڈ ڈالیں
    popupAd: ``, // یہاں پاپ اپ ایڈ کوڈ ڈالیں
    interstitialAd: `` // یہاں پیج بدلتے وقت آنے والا ایڈ کوڈ ڈالیں
  },

  // 2️⃣ ADSTERRA (ایڈسٹیرا)
  adsterra: {
    headerAd: ``,
    footerAd: ``,
    sidebarAd: ``,
    floatingAd: ``,
    popupAd: ``,
    interstitialAd: ``
  },

  // 3️⃣ PROPELLERADS (پروپیلر ایڈز)
  propellerAds: {
    headerAd: ``,
    footerAd: ``,
    sidebarAd: ``,
    floatingAd: ``,
    popupAd: ``,
    interstitialAd: ``
  },

  // 4️⃣ MEDIA.NET (میڈیا ڈاٹ نیٹ)
  mediaNet: {
    headerAd: ``,
    footerAd: ``,
    sidebarAd: ``,
    floatingAd: ``,
    popupAd: ``,
    interstitialAd: ``
  },

  // 5️⃣ MGID (ایم جی آئی ڈی)
  mgid: {
    headerAd: ``,
    footerAd: ``,
    sidebarAd: ``,
    floatingAd: ``,
    popupAd: ``,
    interstitialAd: ``
  }
};

/**
 * ہیلپر فنکشن: یہ فنکشن چیک کرتا ہے کہ کیا کسی نیٹ ورک میں مخصوص سلاٹ کا کوڈ موجود ہے؟
 */
export const getAdForSlot = (slotType: keyof typeof ADS_CONFIG.adsense) => {
  for (const network in ADS_CONFIG) {
    const code = (ADS_CONFIG as any)[network][slotType];
    if (code && code.trim() !== "" && !code.includes('یہاں')) {
      return code;
    }
  }
  return null;
};
