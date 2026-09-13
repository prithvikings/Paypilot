import type { ReactNode } from "react";
import { Pressable, StyleSheet, type PressableProps, type StyleProp, type ViewStyle } from "react-native";
import { useTheme } from "@/theme";

export type IconButtonProps = Omit<PressableProps, "children" | "style"> & { children: ReactNode; variant?: "plain" | "soft" | "outlined"; size?: "sm" | "md" | "lg"; style?: StyleProp<ViewStyle> };

export function IconButton({ children, variant = "plain", size = "md", disabled, style, ...props }: IconButtonProps) {
  const { theme } = useTheme();
  const dimensions = { sm: 36, md: 44, lg: 52 }[size];
  return <Pressable {...props} accessibilityRole="button" accessibilityState={{ disabled }} disabled={disabled} style={({ pressed }) => [styles.base, { width: dimensions, height: dimensions, borderRadius: dimensions / 2, backgroundColor: variant === "soft" ? theme.colors.accentSoft : "transparent", borderColor: theme.colors.border, borderWidth: variant === "outlined" ? 1 : 0, opacity: disabled ? 0.45 : pressed ? 0.75 : 1 }, style]}>{children}</Pressable>;
}

const styles = StyleSheet.create({ base: { alignItems: "center", justifyContent: "center" } });
