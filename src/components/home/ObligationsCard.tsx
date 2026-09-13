import { View } from "react-native";
import { Card } from "@/components/ui/Card";
import { CurrencyText } from "@/components/financial/CurrencyText";
import { StatusIndicator } from "@/components/financial/StatusIndicator";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";
import type { DemoDebt } from "@/data/demoFinancialData";

type ObligationsCardProps = {
  obligations: readonly DemoDebt[];
};

export function ObligationsCard({ obligations }: ObligationsCardProps) {
  const { theme } = useTheme();

  return (
    <View style={{ gap: theme.spacing.md }}>
      <View>
        <Text variant="heading2">Obligations</Text>
        <Text variant="bodySmall" tone="secondary" style={{ marginTop: theme.spacing.xs }}>Payments that need your attention.</Text>
      </View>
      {obligations.map((obligation) => {
        const overdue = obligation.status === "overdue";
        return (
          <Card key={obligation.id} variant={overdue ? "soft" : "default"} style={{ padding: theme.spacing.lg }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: theme.spacing.md }}>
              <View style={{ flex: 1 }}>
                <Text variant="heading3">{obligation.name}</Text>
                <Text variant="bodySmall" tone="secondary" style={{ marginTop: theme.spacing.xs }}>{obligation.paymentLabel}</Text>
              </View>
              <StatusIndicator status={overdue ? "overdue" : "current"} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", marginTop: theme.spacing.lg }}>
              <CurrencyText amount={obligation.paymentAmount} variant="financialMedium" tone={overdue ? "danger" : "primary"} />
              <Text variant="caption" tone={overdue ? "danger" : "muted"}>{obligation.statusDetail}</Text>
            </View>
          </Card>
        );
      })}
    </View>
  );
}
