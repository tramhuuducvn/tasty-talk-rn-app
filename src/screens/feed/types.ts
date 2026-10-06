export interface Story {
  id: string;
  image: string;
  title: string;
  isCreateStory?: boolean;
}

export interface Post {
  id: string;
  author: string;
  authorAvatar: string;
  timestamp: string;
  content: string;
  image?: string;
  isAd?: boolean;
  verified?: boolean;
}