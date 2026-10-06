import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Post } from "../types";
import { PostActions } from "./post-actions";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const colors = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderBottomColor: colors.backgroundElement,
        },
      ]}
    >
      {/* Post Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.authorAvatar }} style={styles.avatar} />
        <View style={styles.headerText}>
          <View style={styles.authorRow}>
            <Text style={[styles.authorName, { color: colors.text }]}>
              {post.author}
            </Text>
            {post.verified && <Text style={styles.verifiedBadge}>✓</Text>}
          </View>
          <View style={styles.timestampRow}>
            <Text style={[styles.timestamp, { color: colors.textSecondary }]}>
              {post.timestamp}
            </Text>
            {post.isAd && (
              <>
                <Text
                  style={[styles.timestamp, { color: colors.textSecondary }]}
                >
                  {" · "}
                </Text>
                <Text
                  style={[styles.timestamp, { color: colors.textSecondary }]}
                >
                  Ad
                </Text>
              </>
            )}
            <Text style={[styles.timestamp, { color: colors.textSecondary }]}>
              {" · 🌐"}
            </Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={[styles.moreIcon, { color: colors.textSecondary }]}>
              ⋯
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton}>
            <Text style={[styles.closeIcon, { color: colors.textSecondary }]}>
              ✕
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Post Content */}
      {post.content && (
        <Text style={[styles.content, { color: colors.text }]}>
          {post.content}
        </Text>
      )}

      {/* Post Image */}
      {post.image && (
        <Image
          source={{ uri: post.image }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      {/* Post Actions */}
      <PostActions />

      {/* Ad CTA */}
      {post.isAd && (
        <TouchableOpacity style={styles.adCta}>
          <Text style={styles.adCtaIcon}>✏️</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 8,
    paddingBottom: Spacing.three,
  },
  header: {
    flexDirection: "row",
    padding: Spacing.three,
    alignItems: "flex-start",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: Spacing.two,
  },
  headerText: {
    flex: 1,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  authorName: {
    fontSize: 15,
    fontWeight: "600",
  },
  verifiedBadge: {
    fontSize: 14,
    color: "#1877F2",
  },
  timestampRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  timestamp: {
    fontSize: 13,
  },
  headerActions: {
    flexDirection: "row",
    gap: Spacing.one,
  },
  moreButton: {
    padding: Spacing.one,
  },
  moreIcon: {
    fontSize: 20,
  },
  closeButton: {
    padding: Spacing.one,
  },
  closeIcon: {
    fontSize: 18,
  },
  content: {
    paddingHorizontal: Spacing.three,
    fontSize: 15,
    lineHeight: 20,
    marginBottom: Spacing.two,
  },
  image: {
    width: "100%",
    height: 400,
  },
  adCta: {
    position: "absolute",
    bottom: Spacing.three,
    right: Spacing.three,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  adCtaIcon: {
    fontSize: 20,
  },
});
