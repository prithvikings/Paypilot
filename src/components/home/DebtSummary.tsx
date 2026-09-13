import { SymbolView } from "expo-symbols";
import { View } from "react-native";
import { Card } from "@/components/ui/Card";
import { CurrencyText } from "@/components/financial/CurrencyText";
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
    <Card style={{ padding: 14, flex: 1, minWidth: 0, borderRadius: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text variant="heading3">Your Debts</Text>
        <Text variant="bodySmall" tone="accent">›</Text>
      </View>

      <CurrencyText amount={totalOutstanding} variant="financialMedium" style={{ marginTop: 10 }} />
      <Text variant="caption" tone="muted">Total outstanding</Text>

      <View style={{ marginTop: 14, gap: 12 }}>
        {debts.map((debt, index) => {
          const overdue = debt.status === "overdue";
          return (
            <View
              key={debt.id}
              style={{
                paddingTop: index === 0 ? 0 : 12,
                borderTopWidth: index === 0 ? 0 : 1,
                borderTopColor: theme.colors.border,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <View
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 17,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: overdue ? theme.colors.dangerSoft : theme.colors.accentSoft,
                  }}
                >
                  <SymbolView
                    name={
                      debt.type === "Credit Card"
                        ? { ios: "creditcard", android: "credit_card", web: "credit_card" }
                        : { ios: "building.columns", android: "account_balance", web: "account_balance" }
                    }
                    size={16}
                    tintColor={overdue ? theme.colors.danger : theme.colors.accent}
                  />
                </View>
                <View style={{ flex: 1, minWidth: 0 }}>
                  <Text variant="bodySmall" numberOfLines={1}>{debt.name}</Text>
                  <CurrencyText amount={debt.outstanding} variant="bodyMedium" />
                </View>
                <SymbolView
                  name={{ ios: "chevron.right", android: "chevron_right", web: "chevron_right" }}
                  size={16}
                  tintColor={theme.colors.textMuted}
                />
              </View>
            </View>
          );
        })}
      </View>
    </Card>
  );
}
