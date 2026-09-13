import type { ReactNode } from "react";
import { View } from "react-native";
import { useTheme } from "@/theme";
import { Text } from "@/components/ui/Text";
import { CurrencyText } from "./CurrencyText";

export type FinancialMetricProps = { label: string; amount: number; supportingText?: string; tone?: "primary" | "success" | "warning" | "danger" | "accent"; icon?: ReactNode };

export function FinancialMetric({ label, amount, supportingText, tone = "primary", icon }: FinancialMetricProps) {
  const { theme } = useTheme();
  const amountTone = tone === "accent" ? "accent" : tone;
  return <View style={{ gap: theme.spacing.sm, padding: theme.spacing.lg, borderRadius: theme.radii.lg, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border }}>
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: theme.spacing.md }}><Text variant="bodySmall" tone="secondary">{label}</Text>{icon}</View>
    <CurrencyText amount={amount} variant="financialLarge" tone={amountTone} />
    {supportingText ? <Text variant="caption" tone="muted">{supportingText}</Text> : null}
  </View>;
}
