import type { ReactNode } from "react";
import { StyleSheet, View, type ViewProps } from "react-native";
import { useTheme } from "@/theme";
import { Text, type TextTone } from "./Text";

export type BadgeTone = Exclude<TextTone, "primary" | "inverse"> | "neutral";
export type BadgeProps = Omit<ViewProps, "children"> & { children: ReactNode; tone?: BadgeTone };

export function Badge({ children, tone = "neutral", style, ...props }: BadgeProps) {
  const { theme } = useTheme();
  const palette = {
    neutral: { backgroundColor: theme.colors.surfaceSecondary, color: theme.colors.textSecondary },
    accent: { backgroundColor: theme.colors.accentSoft, color: theme.colors.accent },
    success: { backgroundColor: theme.colors.successSoft, color: theme.colors.success },
    warning: { backgroundColor: theme.colors.warningSoft, color: theme.colors.warning },
    danger: { backgroundColor: theme.colors.dangerSoft, color: theme.colors.danger },
    info: { backgroundColor: theme.colors.infoSoft, color: theme.colors.info },
  }[tone];
  return <View {...props} style={[styles.base, { backgroundColor: palette.backgroundColor, borderRadius: theme.radii.pill }, style]}><Text variant="label" style={{ color: palette.color }}>{children}</Text></View>;
}

const styles = StyleSheet.create({ base: { alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 6 } });
