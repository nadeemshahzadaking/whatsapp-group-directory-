
import { WhatsAppGroup, Category, Country } from './types';

export const CATEGORIES: Category[] = [
  'Education', 'Jobs', 'Business', 'Islamic', 'Entertainment',
  'News', 'Sports', 'Tech', 'Health', 'Food',
  'Movies', 'Poetry', 'Shopping', 'Real Estate', 'Trading',
  'Freelancing', 'Programming', 'Gaming', 'Funny', 'Status',
  'Quotes', 'Fashion', 'Travel', 'Automobiles', 'Agriculture',
  'Science', 'History', 'Photography', 'Social Help', 'Other',
  'Videos', 'Girls', 'Hot', 'Pro', 'Max',
  'Online Earning', 'IT & Software', 'Web Development', 'Mobile Apps', 
  'AI & Technology', 'Students', 'Scholarships', 'Exams & Preparation', 
  'Government Jobs', 'Private Jobs', 'Overseas Jobs', 'Visa & Immigration', 
  'Quran & Hadith', 'Islamic Education', 'Islamic Lectures', 'Dawah', 
  'Women Only', 'Ladies Groups', 'Marriage & Rishta', 'Family', 'Parenting', 
  'Fitness', 'Gym', 'Yoga', 'Medical', 'Doctors', 'Nurses', 
  'Dramas', 'Music', 'Cricket', 'Football', 'PUBG', 'Free Fire', 
  'E-commerce', 'Amazon', 'Daraz', 'Forex', 'Crypto', 'Property', 
  'Cars', 'Bikes', 'Tourism', 'Recipes', 'Local Community', 'City Groups', 
  'Breaking News', 'Memes', 'Study Abroad', 'IELTS', 'PTE', 
  'Freelance Marketplace', 'Fiverr', 'Upwork', 'Graphic Design', 'Video Editing',
  'Cyber Security', 'Digital Marketing', 'SEO Services', 'Stock Market',
  'Poetry & Ghazals', 'Motivational', 'Art & Craft', 'Pets & Animals'
];

export const COUNTRIES: Country[] = [
  { name: 'Pakistan', code: 'PK', dial: '+92', flag: '🇵🇰' },
  { name: 'India', code: 'IN', dial: '+91', flag: '🇮🇳' },
  { name: 'Saudi Arabia', code: 'SA', dial: '+966', flag: '🇸🇦' },
  { name: 'United Arab Emirates', code: 'AE', dial: '+971', flag: '🇦🇪' },
  { name: 'United Kingdom', code: 'GB', dial: '+44', flag: '🇬🇧' },
  { name: 'United States', code: 'US', dial: '+1', flag: '🇺🇸' },
  { name: 'Canada', code: 'CA', dial: '+1', flag: '🇨🇦' },
  { name: 'Australia', code: 'AU', dial: '+61', flag: '🇦🇺' },
  { name: 'Turkey', code: 'TR', dial: '+90', flag: '🇹🇷' },
  { name: 'Qatar', code: 'QA', dial: '+974', flag: '🇶🇦' },
  { name: 'Kuwait', code: 'KW', dial: '+965', flag: '🇰🇼' },
  { name: 'Oman', code: 'OM', dial: '+968', flag: '🇴🇲' },
  { name: 'Bangladesh', code: 'BD', dial: '+880', flag: '🇧🇩' },
  { name: 'Malaysia', code: 'MY', dial: '+60', flag: '🇲🇾' },
  { name: 'South Africa', code: 'ZA', dial: '+27', flag: '🇿🇦' },
  { name: 'Egypt', code: 'EG', dial: '+20', flag: '🇪🇬' },
  { name: 'Morocco', code: 'MA', dial: '+212', flag: '🇲🇦' }
];

// Removing demo groups as requested. Real groups will be populated via user submission or backend logic.
export const MOCK_GROUPS: WhatsAppGroup[] = [];
