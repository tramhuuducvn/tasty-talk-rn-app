import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function FeedHeader() {
  const colors = useTheme();

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: colors.background,
          borderBottomColor: colors.backgroundElement,
        },
      ]}
    >
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.headerIcons}>
        <TouchableOpacity
          style={[
            styles.iconButton,
            { backgroundColor: colors.backgroundElement },
          ]}
        >
          <Text style={styles.iconText}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.iconButton,
            { backgroundColor: colors.backgroundElement },
          ]}
        >
          <Text style={styles.iconText}>▦</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.iconButton,
            { backgroundColor: colors.backgroundElement },
          ]}
        >
          <Text style={styles.iconText}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
          <Text style={styles.iconText}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://picsum.photos/100/100?random=5" }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderBottomWidth: 1,
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  iconText: {
    fontSize: 18,
  },
  notificationBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#FF0000",
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
