import { SymbolView } from "expo-symbols";
import { StyleSheet, View } from "react-native";
import { Card } from "@/components/ui/Card";
import { CurrencyText } from "@/components/financial/CurrencyText";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";
import type { DemoTransaction } from "@/data/demoFinancialData";

type RecentTransactionsProps = {
  transactions: readonly DemoTransaction[];
};

const icons: Record<string, { ios: string; android: string; web: string }> = {
  Food: { ios: "cart", android: "shopping_cart", web: "shopping_cart" },
  Transport: { ios: "car", android: "directions_car", web: "directions_car" },
  Utilities: { ios: "bolt", android: "bolt", web: "bolt" },
  Income: { ios: "arrow.down", android: "arrow_downward", web: "arrow_downward" },
};

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  const { theme } = useTheme();

  return (
    <View style={{ gap: theme.spacing.md }}>
      <View>
        <Text variant="heading2">Recent activity</Text>
        <Text variant="bodySmall" tone="secondary" style={{ marginTop: theme.spacing.xs }}>A quick look at your latest transactions.</Text>
      </View>
      <Card style={{ paddingVertical: theme.spacing.sm }}>
        {transactions.map((transaction, index) => (
          <View
            key={transaction.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: theme.spacing.md,
              paddingHorizontal: theme.spacing.lg,
              paddingVertical: theme.spacing.md,
              borderTopWidth: index === 0 ? 0 : StyleSheet.hairlineWidth,
              borderTopColor: theme.colors.border,
            }}
          >
            <View style={{ width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center", backgroundColor: transaction.direction === "income" ? theme.colors.successSoft : theme.colors.surfaceSecondary }}>
              <SymbolView name={icons[transaction.category] ?? { ios: "circle.fill", android: "circle", web: "circle" }} size={19} tintColor={transaction.direction === "income" ? theme.colors.success : theme.colors.accent} />
            </View>
            <View style={{ flex: 1 }}>
              <Text variant="bodyMedium">{transaction.title}</Text>
              <Text variant="caption" tone="muted" style={{ marginTop: 2 }}>{transaction.category}</Text>
            </View>
            <CurrencyText amount={transaction.direction === "income" ? transaction.amount : -transaction.amount} variant="bodyMedium" tone={transaction.direction === "income" ? "success" : "primary"} />
          </View>
        ))}
      </Card>
    </View>
  );
}
