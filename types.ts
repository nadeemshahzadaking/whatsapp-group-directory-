
export type Language = 'en' | 'ur' | 'roman' | 'ar';
export type Category = 
  | 'Education' | 'Jobs' | 'Business' | 'Islamic' | 'Entertainment' 
  | 'News' | 'Sports' | 'Tech' | 'Health' | 'Food' 
  | 'Movies' | 'Poetry' | 'Shopping' | 'Real Estate' | 'Trading' 
  | 'Freelancing' | 'Programming' | 'Gaming' | 'Funny' | 'Status' 
  | 'Quotes' | 'Fashion' | 'Travel' | 'Automobiles' | 'Agriculture' 
  | 'Science' | 'History' | 'Photography' | 'Social Help' | 'Other'
  | 'Videos' | 'Girls' | 'Hot' | 'Pro' | 'Max'
  | 'Online Earning' | 'IT & Software' | 'Web Development' | 'Mobile Apps' 
  | 'AI & Technology' | 'Students' | 'Scholarships' | 'Exams & Preparation' 
  | 'Government Jobs' | 'Private Jobs' | 'Overseas Jobs' | 'Visa & Immigration' 
  | 'Quran & Hadith' | 'Islamic Education' | 'Islamic Lectures' | 'Dawah' 
  | 'Women Only' | 'Ladies Groups' | 'Marriage & Rishta' | 'Family' | 'Parenting' 
  | 'Fitness' | 'Gym' | 'Yoga' | 'Medical' | 'Doctors' | 'Nurses' 
  | 'Dramas' | 'Music' | 'Cricket' | 'Football' | 'PUBG' | 'Free Fire' 
  | 'E-commerce' | 'Amazon' | 'Daraz' | 'Forex' | 'Crypto' | 'Property' 
  | 'Cars' | 'Bikes' | 'Tourism' | 'Recipes' | 'Local Community' | 'City Groups' 
  | 'Breaking News' | 'Memes' | 'Study Abroad' | 'IELTS' | 'PTE' 
  | 'Freelance Marketplace' | 'Fiverr' | 'Upwork' | 'Graphic Design' | 'Video Editing'
  | 'Cyber Security' | 'Digital Marketing' | 'SEO Services' | 'Stock Market'
  | 'Poetry & Ghazals' | 'Motivational' | 'Art & Craft' | 'Pets & Animals';

export interface Country {
  name: string;
  code: string;
  dial: string;
  flag: string;
}

export interface WhatsAppGroup {
  id: string;
  name: string;
  link: string;
  category: Category;
  description: string;
  addedAt: string;
  countryCode: string;
  clicks: number;
}

export interface Translations {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  searchBtn: string;
  addBtn: string;
  viewGroupsBtn: string;
  homeLink: string;
  viewLink: string;
  addLink: string;
  promoLink: string;
  aboutLink: string;
  officialLink: string;
  categories: Record<Category, string>;
  allCategories: string;
  groupsListTitle: string;
  groupsFound: string;
  noGroups: string;
  noGroupsSub: string;
  joinNow: string;
  addNewGroup: string;
  groupName: string;
  groupLink: string;
  selectCategory: string;
  selectCountry: string;
  descriptionLabel: string;
  submitBtn: string;
  successTitle: string;
  successMsg: string;
  footerLine1: string;
  footerLine2: string;
  backBtn: string;
  clicksLabel: string;
  allCountries: string;
  linkError: string;
  searchCountryPlaceholder: string;
  safetyTitle: string;
  safetyMessage: string;
  closeBtn: string;
  voicePrompt: string;
  termsTitle: string;
  termsIntro: string;
  termsList: string[];
  agreeBtn: string;
  viewTerms: string;
  promoPageTitle: string;
  promoPageSub: string;
  promoContactHeader: string;
  promoInstructions: string;
  promoEmailLabel: string;
  promoTemplateLabel: string;
  promoTemplateContent: string;
  aboutTitle: string;
  aboutContent: string;
  officialTitle: string;
  officialSub: string;
  dir: 'ltr' | 'rtl';
}
