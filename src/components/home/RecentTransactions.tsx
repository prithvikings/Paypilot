import { CurrencyText } from "@/components/financial/CurrencyText";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import type { DemoTransaction } from "@/data/demoFinancialData";
import { useTheme } from "@/theme";
import { SymbolView } from "expo-symbols";
import { StyleSheet, View } from "react-native";

type RecentTransactionsProps = {
  transactions: readonly DemoTransaction[];
};

const icons = {
  Food: {
    ios: "cart",
    android: "shopping_cart",
    web: "shopping_cart",
  },
  Transport: {
    ios: "car",
    android: "directions_car",
    web: "directions_car",
  },
  Utilities: {
    ios: "bolt",
    android: "bolt",
    web: "bolt",
  },
  Income: {
    ios: "arrow.down",
    android: "arrow_downward",
    web: "arrow_downward",
  },
} as const;

const fallbackIcon = {
  ios: "circle.fill",
  android: "circle",
  web: "circle",
} as const;

function getTransactionIcon(category: string) {
  if (category in icons) {
    return icons[category as keyof typeof icons];
  }

  return fallbackIcon;
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  const { theme } = useTheme();

  return (
    <View style={{ gap: theme.spacing.md }}>
      <View>
        <Text variant="heading2">Recent activity</Text>

        <Text
          variant="bodySmall"
          tone="secondary"
          style={{ marginTop: theme.spacing.xs }}
        >
          A quick look at your latest transactions.
        </Text>
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
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:
                  transaction.direction === "income"
                    ? theme.colors.successSoft
                    : theme.colors.surfaceSecondary,
              }}
            >
              <SymbolView
                name={getTransactionIcon(transaction.category)}
                size={19}
                tintColor={
                  transaction.direction === "income"
                    ? theme.colors.success
                    : theme.colors.accent
                }
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text variant="bodyMedium">{transaction.title}</Text>

              <Text variant="caption" tone="muted" style={{ marginTop: 2 }}>
                {transaction.category}
              </Text>
            </View>

            <CurrencyText
              amount={
                transaction.direction === "income"
                  ? transaction.amount
                  : -transaction.amount
              }
              variant="bodyMedium"
              tone={transaction.direction === "income" ? "success" : "primary"}
            />
          </View>
        ))}
      </Card>
    </View>
  );
}
