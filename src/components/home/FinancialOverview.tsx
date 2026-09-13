import { SymbolView } from "expo-symbols";
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

type Metric = {
  label: string;
  amount: number;
  caption: string;
  icon: { ios: "wallet.pass"; android: "account_balance_wallet"; web: "account_balance_wallet" } | { ios: "creditcard"; android: "credit_card"; web: "credit_card" } | { ios: "chart.bar"; android: "bar_chart"; web: "bar_chart" };
  background: string;
  iconColor: string;
};

export function FinancialOverview({ income, expenses, available }: FinancialOverviewProps) {
  const { theme } = useTheme();
  const metrics: Metric[] = [
    {
      label: "Income",
      amount: income,
      caption: "This month",
      icon: { ios: "wallet.pass", android: "account_balance_wallet", web: "account_balance_wallet" },
      background: theme.colors.successSoft,
      iconColor: theme.colors.success,
    },
    {
      label: "Expenses",
      amount: expenses,
      caption: "This month",
      icon: { ios: "creditcard", android: "credit_card", web: "credit_card" },
      background: theme.colors.dangerSoft,
      iconColor: theme.colors.danger,
    },
    {
      label: "Available",
      amount: available,
      caption: "After expenses",
      icon: { ios: "chart.bar", android: "bar_chart", web: "bar_chart" },
      background: theme.colors.accentSoft,
      iconColor: theme.colors.accent,
    },
  ];

  return (
    <View style={styles.container}>
      {metrics.map((metric) => (
        <Card key={metric.label} style={styles.card}>
          <View style={[styles.icon, { backgroundColor: metric.background }]}>
            <SymbolView name={metric.icon} size={18} tintColor={metric.iconColor} />
          </View>
          <Text variant="bodySmall" tone="secondary" style={styles.label}>
            {metric.label}
          </Text>
          <CurrencyText amount={metric.amount} variant="financialMedium" style={styles.amount} />
          <Text variant="caption" tone="muted" style={styles.caption}>
            {metric.caption}
          </Text>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  card: {
    flex: 1,
    minWidth: 0,
    padding: 14,
    borderRadius: 20,
  },
  icon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  label: {
    marginBottom: 2,
  },
  amount: {
    fontSize: 21,
    lineHeight: 27,
  },
  caption: {
    marginTop: 1,
  },
});
