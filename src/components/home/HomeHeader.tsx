import { SymbolView } from "expo-symbols";
import { StyleSheet, View } from "react-native";
import { Avatar } from "@/components/ui/Avatar";
import { IconButton } from "@/components/ui/IconButton";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";

type HomeHeaderProps = {
  firstName: string;
};

export function HomeHeader({ firstName }: HomeHeaderProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.identity}>
        <Avatar name={firstName} size="lg" />
        <View style={styles.copy}>
          <Text variant="bodySmall" tone="secondary">Good morning,</Text>
          <Text variant="heading1" style={styles.name}>{firstName} 👋</Text>
          <Text variant="bodySmall" tone="secondary" style={styles.subtitle}>
            Here&apos;s your financial picture for September.
          </Text>
        </View>
      </View>

      <View style={styles.actions}>
        <IconButton
          accessibilityLabel="Search"
          variant="plain"
          style={[styles.actionButton, { backgroundColor: theme.colors.surface }]}
        >
          <SymbolView
            name={{ ios: "magnifyingglass", android: "search", web: "search" }}
            size={21}
            tintColor={theme.colors.textPrimary}
          />
        </IconButton>
        <View>
          <IconButton
            accessibilityLabel="Notifications"
            variant="plain"
            style={[styles.actionButton, { backgroundColor: theme.colors.surface }]}
          >
            <SymbolView
              name={{ ios: "bell", android: "notifications_none", web: "notifications_none" }}
              size={21}
              tintColor={theme.colors.textPrimary}
            />
          </IconButton>
          <View
            accessibilityElementsHidden
            style={[styles.notificationDot, { backgroundColor: theme.colors.danger }]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 4,
    paddingBottom: 8,
  },
  identity: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    minWidth: 0,
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    marginTop: 1,
  },
  subtitle: {
    marginTop: 2,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginLeft: 8,
  },
  actionButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  notificationDot: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
  },
});
