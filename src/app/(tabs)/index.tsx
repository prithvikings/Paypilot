import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
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
  const {
    financialOverview,
    financialStatus,
    dueThisMonth,
    expenses,
    debtSummary,
    obligations,
    recentTransactions,
  } = demoFinancialData;

  return (
    <Screen
      contentContainerStyle={{
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing["4xl"],
      }}
    >
      <HomeHeader firstName={demoFinancialData.user.firstName} />

      <View style={styles.content}>
        <FinancialStatusCard message="Your finances look stable this month." />

        <FinancialOverview
          income={financialOverview.income}
          expenses={financialOverview.expenses}
          available={financialOverview.available}
        />

        <ObligationsCard
          amount={dueThisMonth.amount}
          label={dueThisMonth.label}
        />

        <View style={styles.twoColumn}>
          <ExpenseBreakdown total={financialOverview.expenses} expenses={expenses} />
          <DebtSummary totalOutstanding={debtSummary.totalOutstanding} debts={obligations} />
        </View>

        <RecentTransactions transactions={recentTransactions} />

        <AskPayPilotCTA onPress={() => router.push("/(tabs)/ask")} />

        <Text
          variant="caption"
          tone="muted"
          style={{ textAlign: "center", marginTop: theme.spacing.xs }}
        >
          {demoFinancialData.demoLabel}
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 16,
  },
  twoColumn: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },
});
