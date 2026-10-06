import { Spacing } from "@/constants/theme";
import { ScrollView, StyleSheet } from "react-native";
import { STORIES } from "../data";
import { StoryCard } from "./story-card";

export function StoriesList() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {STORIES.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 8,
  },
  content: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.three,
    gap: Spacing.two,
  },
});