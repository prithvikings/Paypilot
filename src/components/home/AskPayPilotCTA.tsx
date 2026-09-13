import { SymbolView } from "expo-symbols";
import { Pressable, View } from "react-native";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";

type AskPayPilotCTAProps = {
  onPress: () => void;
};

export function AskPayPilotCTA({ onPress }: AskPayPilotCTAProps) {
  const { theme } = useTheme();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Ask PayPilot for help with your finances"
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: theme.colors.textPrimary,
        borderRadius: 22,
        padding: theme.spacing.lg,
        opacity: pressed ? 0.9 : 1,
      })}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing.md }}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.accentSoft,
          }}
        >
          <SymbolView
            name={{ ios: "sparkles", android: "auto_awesome", web: "auto_awesome" }}
            size={23}
            tintColor={theme.colors.accent}
          />
        </View>
        <View style={{ flex: 1, gap: 3 }}>
          <Text variant="heading3" style={{ color: theme.colors.white }}>
            Ask PayPilot
          </Text>
          <Text variant="bodySmall" style={{ color: "#E6ECF7" }}>
            Get personalized insights, plans and answers.
          </Text>
        </View>
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#26344D",
          }}
        >
          <SymbolView
            name={{ ios: "chevron.right", android: "chevron_right", web: "chevron_right" }}
            size={20}
            tintColor={theme.colors.white}
          />
        </View>
      </View>
    </Pressable>
  );
}
