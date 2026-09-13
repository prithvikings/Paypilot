import type { StyleProp, TextStyle } from "react-native";
import { Text, type TextProps, type TextTone } from "@/components/ui/Text";

type CurrencyTone = TextTone | "auto";

export type CurrencyTextProps = Omit<TextProps, "children" | "tone"> & {
  amount: number;
  tone?: CurrencyTone;
  style?: StyleProp<TextStyle>;
};

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function CurrencyText({
  amount,
  variant = "financialMedium",
  tone = "primary",
  ...props
}: CurrencyTextProps) {
  const resolvedTone: TextTone =
    tone === "auto" ? (amount < 0 ? "danger" : "primary") : tone;

  return (
    <Text {...props} variant={variant} tone={resolvedTone}>
      {formatter.format(amount)}
    </Text>
  );
}
