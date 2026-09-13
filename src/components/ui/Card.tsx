import type { PropsWithChildren } from "react";
import { Pressable, StyleSheet, View, type PressableProps, type StyleProp, type ViewProps, type ViewStyle } from "react-native";
import { useTheme } from "@/theme";

type CardBaseProps = PropsWithChildren<{ variant?: "default" | "outlined" | "soft" }>;
export type CardProps = CardBaseProps & Omit<ViewProps, "style"> & { style?: StyleProp<ViewStyle> };

function surface(variant: CardBaseProps["variant"], background: string, secondary: string) {
  return variant === "soft" ? secondary : background;
}

export function Card({ variant = "default", children, style, ...props }: CardProps) {
  const { theme } = useTheme();
  return <View {...props} style={[styles.base, { backgroundColor: surface(variant, theme.colors.surface, theme.colors.surfaceSecondary), borderColor: theme.colors.border, borderWidth: variant === "outlined" ? 1 : StyleSheet.hairlineWidth, borderRadius: theme.radii.xl }, variant === "default" ? theme.shadows.card : undefined, style]}>{children}</View>;
}

export type PressableCardProps = CardBaseProps & Omit<PressableProps, "style"> & { style?: StyleProp<ViewStyle> };
export function PressableCard({ variant = "default", children, style, ...props }: PressableCardProps) {
  const { theme } = useTheme();
  return <Pressable {...props} style={({ pressed }) => [styles.base, { backgroundColor: surface(variant, theme.colors.surface, theme.colors.surfaceSecondary), borderColor: theme.colors.border, borderWidth: variant === "outlined" ? 1 : StyleSheet.hairlineWidth, borderRadius: theme.radii.xl, opacity: pressed ? 0.92 : 1 }, variant === "default" ? theme.shadows.card : undefined, style]}>{children}</Pressable>;
}

const styles = StyleSheet.create({ base: { overflow: "hidden" } });
