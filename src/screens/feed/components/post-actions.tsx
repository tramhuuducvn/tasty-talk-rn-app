import { Spacing } from "@/constants/theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function PostActions() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.icon}>👍</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.icon}>💬</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.icon}>↗️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.two,
    gap: Spacing.two,
  },
  button: {
    padding: Spacing.two,
  },
  icon: {
    fontSize: 20,
  },
});