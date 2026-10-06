import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function CreatePost() {
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
      <Image
        source={{ uri: "https://picsum.photos/100/100?random=5" }}
        style={styles.avatar}
      />
      <View
        style={[styles.input, { backgroundColor: colors.backgroundElement }]}
      >
        <Text style={[styles.inputText, { color: colors.textSecondary }]}>
          What's on your mind, Hữu Đức?
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>📹</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>🖼️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>😊</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.three,
    borderBottomWidth: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: Spacing.two,
  },
  input: {
    borderRadius: 20,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    marginBottom: Spacing.two,
  },
  inputText: {
    fontSize: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButton: {
    padding: Spacing.two,
  },
  actionIcon: {
    fontSize: 24,
  },
});
