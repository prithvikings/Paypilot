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
  const accents = [
    theme.colors.danger,
    theme.colors.warning,
    theme.colors.accent,
    theme.colors.info,
    theme.colors.success,
    theme.colors.accentPressed,
    theme.colors.textMuted,
    theme.colors.borderStrong,
  ];

  return (
    <Card style={{ padding: 14, flex: 1, minWidth: 0, borderRadius: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text variant="heading3">Expense Breakdown</Text>
        <Text variant="bodySmall" tone="accent">›</Text>
      </View>

      <CurrencyText amount={total} variant="financialMedium" style={{ marginTop: 10 }} />
      <Text variant="caption" tone="muted">Monthly expenses</Text>

      <View
        accessibilityLabel="Expense distribution"
        style={{
          flexDirection: "row",
          height: 10,
          marginTop: 14,
          borderRadius: 5,
          overflow: "hidden",
          backgroundColor: theme.colors.surfaceSecondary,
        }}
      >
        {expenses.map((expense, index) => (
          <View
            key={expense.id}
            style={{
              width: `${expense.percentage}%`,
              height: "100%",
              backgroundColor: accents[index % accents.length],
            }}
          />
        ))}
      </View>

      <View style={{ marginTop: 14, gap: 8 }}>
        {expenses.map((expense, index) => (
          <View key={expense.id} style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <View
              style={{
                width: 7,
                height: 7,
                borderRadius: 4,
                backgroundColor: accents[index % accents.length],
              }}
            />
            <Text variant="caption" numberOfLines={1} style={{ flex: 1 }}>
              {expense.category}
            </Text>
            <CurrencyText amount={expense.amount} variant="caption" />
          </View>
        ))}
      </View>
    </Card>
  );
}
