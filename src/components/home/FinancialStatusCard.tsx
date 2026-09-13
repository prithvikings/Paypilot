import { SymbolView } from "expo-symbols";
import { View } from "react-native";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";

type FinancialStatusCardProps = {
  message: string;
};

export function FinancialStatusCard({ message }: FinancialStatusCardProps) {
  const { theme } = useTheme();

  return (
    <Card
      style={{
        padding: theme.spacing.lg,
        backgroundColor: theme.colors.successSoft,
        borderColor: theme.colors.successSoft,
        borderRadius: 20,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing.md }}>
        <View
          style={{
            width: 52,
            height: 52,
            borderRadius: 26,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#D4F2E5",
          }}
        >
          <SymbolView
            name={{ ios: "chart.line.uptrend.xyaxis", android: "trending_up", web: "trending_up" }}
            size={24}
            tintColor={theme.colors.success}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text variant="heading3" style={{ color: theme.colors.success }}>
            You&apos;re on track
          </Text>
          <Text variant="bodySmall" tone="secondary" style={{ marginTop: 2 }}>
            {message}
          </Text>
        </View>
        <SymbolView
          name={{ ios: "chevron.right", android: "chevron_right", web: "chevron_right" }}
          size={20}
          tintColor={theme.colors.success}
        />
      </View>
    </Card>
  );
}
