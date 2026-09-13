import { useRouter } from "expo-router";
import { View } from "react-native";
import { Screen } from "@/components/ui/Screen";
import { Text } from "@/components/ui/Text";
import {
  AskPayPilotCTA,
  DebtSummary,
  ExpenseBreakdown,
  FinancialOverview,
  FinancialStatusCard,
  HomeHeader,
  ObligationsCard,
  RecentTransactions,
} from "@/components/home";
import { demoFinancialData } from "@/data/demoFinancialData";
import { useTheme } from "@/theme";

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { financialOverview, financialStatus, obligations, expenses, debtSummary, recentTransactions } = demoFinancialData;

  return (
    <Screen contentContainerStyle={{ paddingTop: theme.spacing.sm }}>
      <HomeHeader firstName={demoFinancialData.user.firstName} />

      <View style={{ gap: theme.spacing["2xl"] }}>
        <FinancialOverview
          income={financialOverview.income}
          expenses={financialOverview.expenses}
          available={financialOverview.available}
        />

        <FinancialStatusCard message={financialStatus.message} />

        <ObligationsCard obligations={obligations} />

        <ExpenseBreakdown total={financialOverview.expenses} expenses={expenses} />

        <DebtSummary totalOutstanding={debtSummary.totalOutstanding} debts={obligations} />

        <RecentTransactions transactions={recentTransactions} />

        <AskPayPilotCTA onPress={() => router.push("/(tabs)/ask")} />

        <Text variant="caption" tone="muted" style={{ textAlign: "center", paddingBottom: theme.spacing.sm }}>
          {demoFinancialData.demoLabel}
        </Text>
      </View>
    </Screen>
  );
}
