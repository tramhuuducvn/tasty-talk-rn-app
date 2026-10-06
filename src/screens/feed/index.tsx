import { useTheme } from "@/hooks/use-theme";
import { ScrollView, StyleSheet, View } from "react-native";
import { CreatePost } from "./components/create-post";
import { FeedHeader } from "./components/feed-header";
import { PostCard } from "./components/post-card";
import { StoriesList } from "./components/stories-list";
import { POSTS } from "./data";

export function FeedScreen() {
  const colors = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FeedHeader />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <CreatePost />
        <StoriesList />
        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
