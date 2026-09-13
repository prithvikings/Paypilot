import type { ReactNode } from "react";
import { View } from "react-native";
import { useTheme } from "@/theme";
import { Text } from "@/components/ui/Text";

export type ScreenHeaderProps = { title: string; subtitle?: string; left?: ReactNode; right?: ReactNode };

export function ScreenHeader({ title, subtitle, left, right }: ScreenHeaderProps) {
  const { theme } = useTheme();
  return <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing.md, paddingVertical: theme.spacing.md }}>{left}<View style={{ flex: 1, gap: theme.spacing.xs }}><Text variant="heading1">{title}</Text>{subtitle ? <Text variant="bodySmall" tone="secondary">{subtitle}</Text> : null}</View>{right}</View>;
}
