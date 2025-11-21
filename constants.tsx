
import { ScheduleItem, SocialLink, GalleryImage, Teaching, WeeklyActivity } from './types';
import { Youtube, Facebook, Instagram, Globe, Mail, Users, Video, BookOpen, Heart, HandPlatter } from 'lucide-react';

export const PRABHUJI_NAME = "HG Pranavananda Das Prabhuji";
export const PRABHUJI_TITLE = "A Beacon of Krishna Consciousness";
export const BIRTHDAY_GREETING = "Happy Birthday, Beloved Gurudeva";
export const AUDIO_URL = "https://archive.org/download/hk-kirtan/Gurudeva%20Krpa%20Bindu%20Diya%20-%20Agni%20Dev%20Das.mp3";

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    time: "6:45 - 7:10 AM",
    activity: "Yoga Class",
    description: "Harmonizing body and soul in preparation for divine communion."
  },
  {
    time: "7:10 - 7:20 AM",
    activity: "Japa Session",
    description: "Guiding participants in the sacred chanting of the Hare Krishna maha-mantra."
  },
  {
    time: "7:20 - 7:35 AM",
    activity: "Srimad Bhagavatam Reading",
    description: "Immersing hearts in the nectar of Krishna's lilas."
  },
  {
    time: "7:35 - 8:15 AM",
    activity: "Japa Class",
    description: "Gentle encouragement dissolves offenses and deepens connection to the holy name."
  }
];

export const WEEKLY_ACTIVITIES: WeeklyActivity[] = [
  {
    day: "Daily Morning",
    activity: "Nithyam Bhagavata Sevaya",
    audience: "Everyone",
    description: "Leading the daily worship and reading of Srimad Bhagavatam to foster consistent spiritual practice and scriptural immersion.",
    icon: BookOpen
  },
  {
    day: "Daily Service",
    activity: "Annadanam Seva",
    audience: "Farmers & Locals",
    description: "Feeding over 1000 farmers daily and providing food donations to local people, demonstrating compassion in action.",
    icon: HandPlatter
  },
  {
    day: "Every Tuesday",
    activity: "Children's Value Education",
    audience: "Children below 15 years",
    description: "Nurturing spirituality from a young age through stories, values, and scriptural knowledge.",
    icon: Users
  },
  {
    day: "Every Friday",
    activity: "Youth Preaching",
    audience: "Youth (Zoom)",
    description: "Inspiring and educating young devotees about Krishna consciousness and practical spirituality.",
    icon: Video
  }
];

export const TEACHINGS: Teaching[] = [
  {
    title: "The Heart as a Lamp",
    quote: "మన హృదయం దేవుడి దారి చూపించే దీపంలా మారాలి. మనను చూసిన వారు కృష్ణుని వైపు ఒక అడుగు వేయాలనుకునేలా మన హృదయం మార్గం అవ్వాలి.\n\n(Our heart should become a lamp that guides others toward God. When someone looks at us, let our heart become the path that inspires them to take one step toward Krishna.)",
    source: "Spiritual Vision"
  },
  {
    title: "The Guru as Captain",
    quote: "భగవంతుడు సముద్రంలో ఉన్న అలలను తొలగించడు… కానీ మన పడవ ఏ తుఫాన్నైనా తట్టుకునేలా బలంగా తయారు చేస్తాడు. ఆ పడవను ఎలా నడపాలో మన గురుదేవరు కెప్టెన్‌లా మారి ప్రతి అలలోనూ, ప్రతి తుఫానులోనూ మనల్ని సరైన దారిలో నడిపిస్తారు.\n\n(God does not remove the waves from the ocean… Instead, He strengthens our boat so it can withstand any storm. And like the captain of that boat, our guru guides us through every wave and every storm, safely on the right path.)",
    source: "Faith & Surrender"
  },
  {
    title: "Perceiving God",
    quote: "If we want to truly perceive God in our life, the heart must be filled with love-and-devotion, and the approach must be scriptural.",
    source: "Spiritual Instruction"
  },
  {
    title: "Divine Grace",
    quote: "మనము భగవంతుడిని దర్శనం చేసుకునే విధానం శాస్త్రీయమైనప్పుడు & మనసులో ప్రేమ, భక్తి ఉన్నప్పుడు, భగవంతుడి యొక్క కృప పూర్తిగా లభిస్తుంది.\n\n(When our approach to seeing God is in accordance with the scriptures and filled with love and devotion, we always receive His complete grace.)",
    source: "Lecture Excerpt"
  },
  {
    title: "Character & Trust",
    quote: "మనము వేరే వాళ్ళ గురించి మాట్లాడి, చాడీలు చెప్తున్నామనుకోండి, మనము ఎలాంటి ప్రవర్తన కలిగిన వాళ్ళమో అందరికి చెప్తూ ఉన్నాము. వేరే వాళ్ళు మనల్ని ఎప్పడు నమ్మరు.\n\n(If we gossip or speak ill about others, we reveal our own character. People will never trust us, thinking we might speak about them to others.)",
    source: "Moral Teaching"
  },
  {
    title: "Good In, Good Out",
    quote: "'Good in Good out and Bad in Bad out' అనే సూత్రాన్ని జీవితంలో ఆచరించగలిగితే మన లోపలుండే చెడు ఆలోచనలను మరియు చెడు అలవాట్లను దూరం చేసుకోవచ్చు.\n\n(If we practice 'Good in, Good out', we can remove negative thoughts and habits. By following good association and dharma, life proceeds on the right path.)",
    source: "Life Principles"
  },
  {
    title: "Healthy Living",
    quote: "Early to sleep, early to wake up makes a person healthy, wealthy, and happy.",
    source: "Daily Sadhana"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@PranavanandaDas",
    icon: Youtube,
    label: "Daily Lectures"
  },
  {
    name: "WhatsApp Channel",
    url: "https://whatsapp.com/channel/0029VaBLnhz8Pgs8IXNpoD2b",
    icon: Globe,
    label: "Join the WhatsApp Channel"
  },
  {
    name: "Facebook",
    url: "https://facebook.com/hgpranavanandadas",
    icon: Facebook,
    label: "Community Updates"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/pranavananda_das?igshid=YmMyMTA2M2Y=",
    icon: Instagram,
    label: "Daily Inspiration"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pranavanandadas",
    icon: Globe,
    label: "Professional Profile"
  },
  {
    name: "Telegram",
    url: "https://t.me/krishnakathamruthamtelugu",
    icon: Globe,
    label: "Telegram Channel"
  },
  {
    name: "Email",
    url: "mailto:pranavanandadas.office@gmail.com",
    icon: Mail,
    label: "Contact Office"
  }
];

export const CONTACT_PHONE = "+91 99638 28877";
export const CONTACT_EMAIL = "pranavanandadas.office@gmail.com";

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: '/Images/prabhuji-with-crowd.png', caption: 'Prabhuji with crowd', isVertical: false },
  { url: '/Images/hg-pranavanand-1.jpg', caption: 'HG Pranavananda Das Prabhu', isVertical: false },
  { url: '/Images/prabhuji-taking-aashirvaad.png', caption: 'Taking Aashirvaad', isVertical: false },
  { url: '/Images/prabhuji-taking-dress.png', caption: 'Receiving Dress', isVertical: false },
  { url: '/Images/prabhuji-with-radhanath.png', caption: 'With Radhanath Swami Maharaj', isVertical: false },
  { url: '/Images/prabhuju.png', caption: 'Prabhuji Portrait', isVertical: true },
  { url: '/Images/prabhuju-in-school.png', caption: 'Prabhuji in School', isVertical: true },
  { url: '/Images/pranavanand-with-radhanath-1.jpg', caption: 'Pranavanand Das with Radhanath Swami (1)', isVertical: false },
  { url: '/Images/pranavanand-with-radhanath-2.jpg', caption: 'Pranavanand Das with Radhanath Swami', isVertical: false },
  { url: '/Images/radhanath-swamy.jpg', caption: 'HH Radhanath Swami Maharaj', isVertical: false }
];

export const TRIBUTE_TEXT = `
Hare Krishna Prabhuji 🙏
Dandavat Pranams at your lotus feet 🙇‍♂️

Prabhuji, today is your appearance day, and from my heart I just want to thank you. Whatever little bhakti I am trying to do today… it is only because of your guidance, your teachings, and your mercy. Your classes, your voice, your smile, your patience — everything has given me strength in many weak moments.

Whenever I listen to your Bhagavatam or Gita lectures, I feel like Krishna is personally speaking to me through you. You changed my thinking, my habits, my direction, and even my hopes for life. I am truly grateful, Prabhuji.

On your auspicious birthday, I pray to Radha Madhav that:
• I can develop even 1% of your steadiness
• I can serve devotees with humility
• I can follow your teachings sincerely, without laziness
• I can always stay under your shelter

Prabhuji, please bless me with devotion, discipline, and purity, so that one day I may become a worthy student of yours. 🙏

Wishing you a very Happy Appearance Day, Prabhuji 🌼
May Sri Sri Radha Krishna always keep you healthy, joyful, and ever engaged in Their divine service.

Your aspiring servant,
Jashwanth

Prabhuji, at your divine lotus feet, I, Jashwanth, offer myself as your ever-obedient servant in pure devotion and humility.
At your lotus feet, Prabhuji, I, Jashwanth, remain your humble servant — offering my life in devotion, surrender, and pure bhakti.
`;

export const HERO_SUBTITLE = "I, J Jashwanth, am your small dāsa, Prabhuji — holding on to your lotus feet with devotion, surrender, and love.";

export const GLORIFICATION_RADHANATH_SWAMI = `
Radhanath Swami Maharaj is like a soft breeze of compassion sent by Sri Krishna to soothe the hearts of seekers in this age of suffering.
His presence carries the fragrance of humility, purity, and endless kindness.

Maharaj shows that true greatness lies not in position, but in service.
His life — from wandering in the Himalayas to surrendering at the lotus feet of Srila Prabhupada — is a testament to how a sincere heart can find the path of divine love.

His teachings melt the hardest of hearts, not because of eloquence alone, but because he speaks from a place of deep realization.
He embodies the principle: "Love is the greatest power, humility is the greatest strength."

Wherever he goes, he awakens devotion, unity, and compassion.
By his example, he reminds us that every soul is a child of God, deserving love, respect, and upliftment.

To glorify Radhanath Swami Maharaj is to glorify the mercy of Krishna, for he is one of those rare teachers who turns pain into purpose, sorrow into surrender, and struggle into service.
`;

export const GLORIFICATION_PRABHUJI = `
Pranavanand Dasa Prabhu is a shining example of a dedicated servant of Srila Prabhupada, bringing spiritual wisdom in a simple, practical, and heart-touching way — especially to Telugu-speaking devotees.

His teachings carry a deep sweetness, like nectar meant to awaken love for Krishna.
He speaks with clarity, patience, and heartfelt devotion, making even complex truths easy for anyone to understand.

His life reflects a sincere commitment to discipline, humility, and service to Vaishnavas.
Through the Bhagavad Gita, he inspires people to transform their minds, conquer emotions, and live with spiritual vision.

Prabhu’s gentle voice, compassionate nature, and simple explanations have helped thousands find peace, direction, and a deeper connection with Krishna.

He reminds us that real spirituality is not in show, but in sincerity—
not in knowledge alone, but in transformation.

His presence feels like a guiding lamp that lights the path of devotees wandering in confusion.
`;
