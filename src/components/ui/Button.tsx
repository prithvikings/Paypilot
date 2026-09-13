import type { PropsWithChildren, ReactNode } from "react";
import { ActivityIndicator, Pressable, StyleSheet, View, type PressableProps, type StyleProp, type ViewStyle } from "react-native";
import { useTheme } from "@/theme";
import { Text } from "./Text";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonProps = PropsWithChildren<Omit<PressableProps, "style" | "children">> & { children: ReactNode; variant?: ButtonVariant; loading?: boolean; leftIcon?: ReactNode; rightIcon?: ReactNode; fullWidth?: boolean; style?: StyleProp<ViewStyle> };

export function Button({ variant = "primary", loading = false, leftIcon, rightIcon, fullWidth = false, children, disabled, style, ...props }: ButtonProps) {
  const { theme } = useTheme();
  const palette = {
    primary: { backgroundColor: theme.colors.accent, borderColor: theme.colors.accent, textTone: "inverse" as const },
    secondary: { backgroundColor: theme.colors.accentSoft, borderColor: theme.colors.accentSoft, textTone: "accent" as const },
    ghost: { backgroundColor: "transparent", borderColor: "transparent", textTone: "accent" as const },
    danger: { backgroundColor: theme.colors.dangerSoft, borderColor: theme.colors.dangerSoft, textTone: "danger" as const },
  }[variant];
  const isDisabled = disabled || loading;
  return <Pressable {...props} accessibilityRole="button" accessibilityState={{ disabled: isDisabled, busy: loading }} disabled={isDisabled} style={({ pressed }) => [styles.base, { backgroundColor: palette.backgroundColor, borderColor: palette.borderColor, borderRadius: theme.radii.pill, opacity: isDisabled ? 0.5 : pressed ? 0.82 : 1 }, fullWidth && styles.fullWidth, style]}>
    {loading ? <ActivityIndicator color={variant === "primary" ? theme.colors.white : theme.colors.accent} /> : <View style={styles.content}>{leftIcon}<Text variant="bodyMedium" tone={palette.textTone}>{children}</Text>{rightIcon}</View>}
  </Pressable>;
}

const styles = StyleSheet.create({ base: { minHeight: 48, paddingHorizontal: 20, alignItems: "center", justifyContent: "center", borderWidth: 1 }, content: { minHeight: 46, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 }, fullWidth: { alignSelf: "stretch" } });
