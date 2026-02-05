
// A comprehensive list of banned/adult terms in English, Urdu, Roman Urdu, and Arabic.
// Removed common words like 'chat', 'larki', 'shadi' to prevent false positives.
export const BANNED_WORDS = [
  // English (Strictly explicit)
  'sex', 'porn', 'nude', 'adult', 'vulgar', 'explicit', 'boobs', 'pussy', 'dick', 'hentai', 'xxx', 'xnn', 'fuck', 'ass', 'horny', 'lust', 'blowjob', 'sexy',
  // Urdu (Scripts)
  'سیکس', 'فحش', 'گندہ', 'ننگا', 'جماع', 'شہوت', 'زنا', 'بستر', 'جنسی', 'لذت', 'برہنہ',
  // Roman Urdu (Explicit only)
  'ganda', 'nanga', 'tharki', 'fuhsh', 'zina', 'shawat'
];

/**
 * Checks if a given string contains any banned words.
 * Returns true if banned content is found.
 */
export const containsBannedWords = (text: string): boolean => {
  if (!text) return false;
  
  const normalizedText = text.toLowerCase();
  
  for (const word of BANNED_WORDS) {
    // Use word boundaries to prevent matching "hot" inside "photograph"
    // For Urdu/Arabic, we rely on whitespace or string start/end
    const regex = new RegExp(`(^|\\s|\\b)${word}(\\b|\\s|$)`, 'i');
    if (regex.test(normalizedText)) {
      return true;
    }
  }
  
  return false;
};
