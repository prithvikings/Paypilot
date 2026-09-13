import type { PropsWithChildren, ReactNode } from "react";
import { View } from "react-native";
import { useTheme } from "@/theme";
import { Text } from "./Text";

export type SectionProps = PropsWithChildren<{ title?: string; action?: ReactNode }>;

export function Section({ title, action, children }: SectionProps) {
  const { theme } = useTheme();
  return <View style={{ gap: theme.spacing.md }}>{title || action ? <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: theme.spacing.md }}>{title ? <Text variant="heading3">{title}</Text> : <View />}{action}</View> : null}{children}</View>;
}
