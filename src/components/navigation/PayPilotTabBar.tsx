import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";

type TabRoute = {
  key: string;
  name: string;
  params?: object;
};

type TabState = {
  index: number;
  routes: TabRoute[];
};

type TabNavigation = {
  emit: (event: {
    type: "tabPress" | "tabLongPress";
    target: string;
    canPreventDefault?: boolean;
  }) => {
    defaultPrevented?: boolean;
  };
  navigate: (name: string, params?: object) => void;
};

type PayPilotTabBarProps = {
  state: TabState;
  navigation: TabNavigation;
};

const TAB_LABELS: Record<string, string> = {
  index: "Home",
  plan: "Plan",
  ask: "Ask",
  activity: "Activity",
  profile: "Profile",
};

export function PayPilotTabBar({ state, navigation }: PayPilotTabBarProps) {
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
          const label = TAB_LABELS[route.name];
          if (!label) return null;

          const isFocused = state.index === state.routes.indexOf(route);
          const color = isFocused ? theme.colors.accent : theme.colors.textMuted;
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
              accessibilityLabel={label === "Ask" ? "Ask PayPilot" : label}
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
                      name="sparkles"
                      size={26}
                      tintColor={isFocused ? theme.colors.white : theme.colors.accent}
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.iconWrapper}>
                  {route.name === "index" && <SymbolView name="house" size={24} tintColor={color} />}
                  {route.name === "plan" && <SymbolView name="doc.text" size={24} tintColor={color} />}
                  {route.name === "activity" && <SymbolView name="clock" size={24} tintColor={color} />}
                  {route.name === "profile" && <SymbolView name="person" size={24} tintColor={color} />}
                </View>
              )}

              <Text
                variant="caption"
                tone={isFocused ? "accent" : "muted"}
                style={isAsk ? styles.askLabel : undefined}
              >
                {label}
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
