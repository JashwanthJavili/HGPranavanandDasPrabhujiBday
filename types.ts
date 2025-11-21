import { LucideIcon } from 'lucide-react';

export interface ScheduleItem {
  time: string;
  activity: string;
  description: string;
}

export interface WeeklyActivity {
  day: string;
  activity: string;
  audience: string;
  description: string;
  icon?: LucideIcon;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  label: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
  isVertical?: boolean;
}

export interface Teaching {
  title: string;
  quote: string;
  source?: string;
}