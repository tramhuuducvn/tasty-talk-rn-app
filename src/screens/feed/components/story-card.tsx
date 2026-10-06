import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Story } from "../types";

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  const colors = useTheme();

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: story.image }} style={styles.image} />
      {story.isCreateStory && (
        <View style={styles.createButton}>
          <Text style={styles.createIcon}>+</Text>
        </View>
      )}
      <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
        {story.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: Spacing.two,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  createButton: {
    position: "absolute",
    bottom: 40,
    left: "50%",
    marginLeft: -20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1877F2",
    alignItems: "center",
    justifyContent: "center",
  },
  createIcon: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    position: "absolute",
    bottom: 8,
    left: 8,
    right: 8,
    fontSize: 13,
    fontWeight: "600",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});
