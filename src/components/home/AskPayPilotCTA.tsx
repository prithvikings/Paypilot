import { SymbolView } from "expo-symbols";
import { Pressable, View } from "react-native";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";

type AskPayPilotCTAProps = {
  onPress: () => void;
};

export function AskPayPilotCTA({ onPress }: AskPayPilotCTAProps) {
  const { theme } = useTheme();

  return (
    <Pressable accessibilityRole="button" accessibilityLabel="Ask PayPilot for help with your finances" onPress={onPress}>
      {({ pressed }) => (
        <Card
          variant="soft"
          style={{
            padding: theme.spacing.lg,
            borderColor: theme.colors.accentSoft,
            opacity: pressed ? 0.88 : 1,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing.md }}>
            <View style={{ width: 48, height: 48, borderRadius: 24, alignItems: "center", justifyContent: "center", backgroundColor: theme.colors.accent }}>
              <SymbolView name={{ ios: "sparkles", android: "auto_awesome", web: "auto_awesome" }} size={22} tintColor={theme.colors.white} />
            </View>
            <View style={{ flex: 1, gap: theme.spacing.xs }}>
              <Text variant="heading3">Need help with your finances?</Text>
              <Text variant="bodySmall" tone="secondary">Ask PayPilot for a clear next step.</Text>
            </View>
            <SymbolView name={{ ios: "chevron.right", android: "chevron_right", web: "chevron_right" }} size={22} tintColor={theme.colors.accent} />
          </View>
        </Card>
      )}
    </Pressable>
  );
}
