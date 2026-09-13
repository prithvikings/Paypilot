import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";

type TabConfig = {
  label: string;
  icon: {
    ios: string;
    android: string;
    web: string;
  };
};

const TAB_CONFIG: Record<string, TabConfig> = {
  index: {
    label: "Home",
    icon: { ios: "house", android: "home", web: "home" },
  },
  plan: {
    label: "Plan",
    icon: { ios: "doc.text", android: "receipt_long", web: "receipt_long" },
  },
  ask: {
    label: "Ask",
    icon: { ios: "sparkles", android: "auto_awesome", web: "auto_awesome" },
  },
  activity: {
    label: "Activity",
    icon: { ios: "clock", android: "schedule", web: "schedule" },
  },
  profile: {
    label: "Profile",
    icon: { ios: "person", android: "person", web: "person" },
  },
};

export function PayPilotTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          paddingBottom: Math.max(insets.bottom, theme.spacing.sm),
        },
      ]}
    >
      <View style={styles.tabs}>
        {state.routes.map((route) => {
          const config = TAB_CONFIG[route.name];
          if (!config) return null;

          const { options } = descriptors[route.key];
          const isFocused = state.index === state.routes.indexOf(route);
          const color = isFocused ? theme.colors.accent : theme.colors.muted;
          const isAsk = route.name === "ask";

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="tab"
              accessibilityLabel={options.tabBarAccessibilityLabel ?? config.label}
              accessibilityState={{ selected: isFocused }}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}
            >
              {isAsk ? (
                <View
                  style={[
                    styles.askOuter,
                    {
                      backgroundColor: theme.colors.accentSoft,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.askButton,
                      {
                        backgroundColor: isFocused ? theme.colors.accent : theme.colors.surfaceSecondary,
                      },
                    ]}
                  >
                    <SymbolView
                      name={config.icon}
                      size={26}
                      tintColor={isFocused ? theme.colors.inverse : theme.colors.accent}
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.iconWrapper}>
                  <SymbolView name={config.icon} size={24} tintColor={color} />
                </View>
              )}

              <Text
                variant="caption"
                tone={isFocused ? "accent" : "muted"}
                style={isAsk ? styles.askLabel : undefined}
              >
                {config.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  tabs: {
    flexDirection: "row",
    minHeight: 68,
    alignItems: "flex-end",
  },
  tab: {
    flex: 1,
    minHeight: 68,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 8,
    paddingBottom: 4,
  },
  iconWrapper: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  askOuter: {
    width: 68,
    height: 68,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -34,
    marginBottom: 2,
  },
  askButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  askLabel: {
    marginTop: -2,
  },
});
