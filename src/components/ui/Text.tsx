import type { ReactNode } from "react";
import { Text as NativeText, type StyleProp, type TextProps as NativeTextProps, type TextStyle } from "react-native";
import { useTheme } from "@/theme";

export type TextVariant = "display" | "heading1" | "heading2" | "heading3" | "body" | "bodyMedium" | "bodySmall" | "caption" | "label" | "financialLarge" | "financialMedium";
export type TextTone = "primary" | "secondary" | "muted" | "accent" | "success" | "warning" | "danger" | "info" | "inverse";

export type TextProps = NativeTextProps & { children?: ReactNode; variant?: TextVariant; tone?: TextTone; style?: StyleProp<TextStyle> };

export function Text({ variant = "body", tone = "primary", style, children, ...props }: TextProps) {
  const { theme } = useTheme();
  const toneColor = { primary: theme.colors.textPrimary, secondary: theme.colors.textSecondary, muted: theme.colors.textMuted, accent: theme.colors.accent, success: theme.colors.success, warning: theme.colors.warning, danger: theme.colors.danger, info: theme.colors.info, inverse: theme.colors.white }[tone];
  return <NativeText {...props} style={[theme.typography[variant], { color: toneColor }, style]}>{children}</NativeText>;
}
