import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";
import { Card } from "@/components/ui/Card";
import { CurrencyText } from "@/components/financial/CurrencyText";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";

type ObligationsCardProps = {
  amount: number;
  label: string;
  onPress?: () => void;
};

export function ObligationsCard({ amount, label, onPress }: ObligationsCardProps) {
  const { theme } = useTheme();

  const content = (
    <Card style={styles.card}>
      <View style={styles.iconWrap}>
        <SymbolView
          name={{ ios: "calendar", android: "calendar_month", web: "calendar_month" }}
          size={21}
          tintColor={theme.colors.info}
        />
      </View>
      <View style={styles.copy}>
        <Text variant="bodySmall" tone="secondary">Due this month</Text>
        <CurrencyText amount={amount} variant="financialMedium" style={styles.amount} />
        <Text variant="caption" tone="muted">{label}</Text>
      </View>
      <View style={styles.action}>
        <Text variant="bodySmall" tone="accent">View details</Text>
        <SymbolView
          name={{ ios: "chevron.right", android: "chevron_right", web: "chevron_right" }}
          size={17}
          tintColor={theme.colors.accent}
        />
      </View>
    </Card>
  );

  return onPress ? (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="View obligation details"
      onPress={onPress}
    >
      {({ pressed }) => <View style={{ opacity: pressed ? 0.9 : 1 }}>{content}</View>}
    </Pressable>
  ) : (
    content
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 20,
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFEBFF",
  },
  copy: {
    flex: 1,
    marginLeft: 12,
  },
  amount: {
    marginTop: 1,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 999,
    backgroundColor: "#EAF2FF",
  },
});
