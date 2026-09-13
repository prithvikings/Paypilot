import { View } from "react-native";
import { Card } from "@/components/ui/Card";
import { CurrencyText } from "@/components/financial/CurrencyText";
import { StatusIndicator } from "@/components/financial/StatusIndicator";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";
import type { DemoDebt } from "@/data/demoFinancialData";

type DebtSummaryProps = {
  totalOutstanding: number;
  debts: readonly DemoDebt[];
};

export function DebtSummary({ totalOutstanding, debts }: DebtSummaryProps) {
  const { theme } = useTheme();

  return (
    <View style={{ gap: theme.spacing.md }}>
      <View>
        <Text variant="heading2">Debt overview</Text>
        <Text variant="bodySmall" tone="secondary" style={{ marginTop: theme.spacing.xs }}>Outstanding balances across your debts.</Text>
      </View>
      <Card style={{ padding: theme.spacing.lg }}>
        <Text variant="bodySmall" tone="secondary">Total outstanding</Text>
        <CurrencyText amount={totalOutstanding} variant="financialLarge" style={{ marginTop: theme.spacing.xs }} />
        <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: theme.colors.border, marginVertical: theme.spacing.lg }} />
        <View style={{ gap: theme.spacing.lg }}>
          {debts.map((debt) => (
            <View key={debt.id} style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing.md }}>
              <View style={{ flex: 1 }}>
                <Text variant="bodyMedium">{debt.name}</Text>
                <Text variant="caption" tone="muted" style={{ marginTop: theme.spacing.xs }}>{debt.type}</Text>
              </View>
              <View style={{ alignItems: "flex-end", gap: theme.spacing.xs }}>
                <CurrencyText amount={debt.outstanding} variant="financialMedium" />
                <StatusIndicator status={debt.status === "overdue" ? "overdue" : "current"} />
              </View>
            </View>
          ))}
        </View>
      </Card>
    </View>
  );
}
