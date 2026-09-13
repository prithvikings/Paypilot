import { StyleSheet, View } from "react-native";
import { Card } from "@/components/ui/Card";
import { CurrencyText } from "@/components/financial/CurrencyText";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";

type FinancialOverviewProps = {
  income: number;
  expenses: number;
  available: number;
};

export function FinancialOverview({ income, expenses, available }: FinancialOverviewProps) {
  const { theme } = useTheme();
  const metrics = [
    { label: "Income", amount: income },
    { label: "Expenses", amount: expenses },
  ];

  return (
    <Card variant="soft" style={styles.card}>
      <Text variant="label" tone="secondary">This month</Text>
      <View style={[styles.metrics, { marginTop: theme.spacing.md }]}> 
        {metrics.map((metric) => (
          <View key={metric.label} style={styles.metric}>
            <Text variant="bodySmall" tone="secondary">{metric.label}</Text>
            <CurrencyText amount={metric.amount} variant="financialMedium" style={{ marginTop: theme.spacing.xs }} />
          </View>
        ))}
      </View>
      <View style={[styles.available, { borderTopColor: theme.colors.border, marginTop: theme.spacing.lg, paddingTop: theme.spacing.lg }]}> 
        <View style={styles.availableCopy}>
          <Text variant="bodySmall" tone="secondary">Available</Text>
          <Text variant="caption" tone="muted" style={{ marginTop: theme.spacing.xs }}>After monthly expenses</Text>
        </View>
        <CurrencyText amount={available} variant="financialLarge" tone="accent" />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { padding: 20 },
  metrics: { flexDirection: "row", gap: 12 },
  metric: { flex: 1 },
  available: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderTopWidth: StyleSheet.hairlineWidth },
  availableCopy: { flex: 1 },
});
