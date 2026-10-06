import { Post, Story } from "./types";

export const STORIES: Story[] = [
  {
    id: "1",
    image: "https://picsum.photos/200/300?random=1",
    title: "Create story",
    isCreateStory: true,
  },
  { id: "2", image: "https://picsum.photos/200/300?random=2", title: "Lẻ Sơn" },
  {
    id: "3",
    image: "https://picsum.photos/200/300?random=3",
    title: "LIKE LION Vietnam",
  },
  {
    id: "4",
    image: "https://picsum.photos/200/300?random=4",
    title: "Vietnam Mountain",
  },
];

export const POSTS: Post[] = [
  {
    id: "1",
    author: "Người Việt tại New Zealand - NZVIET",
    authorAvatar: "https://picsum.photos/100/100?random=10",
    timestamp: "about a minute ago",
    content: "New Zealand Today",
    image: "https://picsum.photos/600/400?random=20",
  },
  {
    id: "2",
    author: "University of Canterbury",
    authorAvatar: "https://picsum.photos/100/100?random=11",
    timestamp: "2h",
    content: "Study in New Zealand in 2027",
    isAd: true,
    verified: true,
  },
];