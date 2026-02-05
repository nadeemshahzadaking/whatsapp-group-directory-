
/**
 * 🎁 ADVANCED PROMO CONFIG (اردو پروموشن کنٹرول فائل)
 * --------------------------------------------------------
 * اس فائل کے ذریعے آپ ویڈیو، امیج یا کسٹم لنک دکھا سکتے ہیں۔
 */

export const PROMO_CONFIG = {
  isVisible: true, 
  contactEmail: "mrbadshahoftheking@gmail.com", // آپ کا ای میل
  data: {
    title: "🔥 VIP پروموشن",
    name: "ہمارا آفیشل یوٹیوب چینل",
    description: "تازہ ترین ٹیکنالوجی اور آن لائن ارننگ کی ویڈیوز دیکھنے کے لیے ابھی سبسکرائب کریں۔ ہم آپ کے کاروبار کی بھی پروموشن کر سکتے ہیں۔",
    
    // یہاں 'video' یا 'image' لکھیں
    mediaType: "video" as "video" | "image" | "text", 
    
    // اگر ویڈیو ہے تو یوٹیوب کا Embed لنک، اگر امیج ہے تو اس کا لنک
    mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    
    link: "https://youtube.com/example", // بٹن کا لنک
    buttonText: "ابھی وزٹ کریں",
    hasNewUpdate: true,
  }
};
