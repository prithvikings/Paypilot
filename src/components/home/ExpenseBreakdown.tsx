import { View } from "react-native";
import { Card } from "@/components/ui/Card";
import { CurrencyText } from "@/components/financial/CurrencyText";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";
import type { DemoExpense } from "@/data/demoFinancialData";

type ExpenseBreakdownProps = {
  total: number;
  expenses: readonly DemoExpense[];
};

export function ExpenseBreakdown({ total, expenses }: ExpenseBreakdownProps) {
  const { theme } = useTheme();
  const maxAmount = Math.max(...expenses.map((expense) => expense.amount), 1);

  return (
    <View style={{ gap: theme.spacing.md }}>
      <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
        <View>
          <Text variant="heading2">Spending</Text>
          <Text variant="bodySmall" tone="secondary" style={{ marginTop: theme.spacing.xs }}>Where your ₹27,000 monthly expenses go.</Text>
        </View>
        <CurrencyText amount={total} variant="financialMedium" />
      </View>
      <Card style={{ padding: theme.spacing.lg }}>
        <View style={{ gap: theme.spacing.md }}>
          {expenses.map((expense) => (
            <View key={expense.id}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: theme.spacing.xs }}>
                <Text variant="bodySmall">{expense.category}</Text>
                <CurrencyText amount={expense.amount} variant="bodySmall" />
              </View>
              <View style={{ height: 6, borderRadius: 3, backgroundColor: theme.colors.surfaceSecondary, overflow: "hidden" }}>
                <View style={{ width: `${Math.max((expense.amount / maxAmount) * 100, 3)}%`, height: "100%", borderRadius: 3, backgroundColor: theme.colors.accent }} />
              </View>
            </View>
          ))}
        </View>
      </Card>
    </View>
  );
}
