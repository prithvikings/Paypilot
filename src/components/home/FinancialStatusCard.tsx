import { View } from "react-native";
import { Card } from "@/components/ui/Card";
import { StatusIndicator } from "@/components/financial/StatusIndicator";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";

type FinancialStatusCardProps = {
  message: string;
};

export function FinancialStatusCard({ message }: FinancialStatusCardProps) {
  const { theme } = useTheme();

  return (
    <Card style={{ padding: theme.spacing.lg }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: theme.spacing.md }}>
        <View style={{ flex: 1 }}>
          <Text variant="heading3">Financial health</Text>
          <Text variant="bodySmall" tone="secondary" style={{ marginTop: theme.spacing.xs }}>{message}</Text>
        </View>
        <StatusIndicator status="warning" />
      </View>
    </Card>
  );
}
