import { forwardRef, type ReactNode } from "react";
import { TextInput, View, StyleSheet, type TextInputProps } from "react-native";
import { useTheme } from "@/theme";
import { Text } from "./Text";

export type InputProps = TextInputProps & { error?: string };

export const Input = forwardRef<TextInput, InputProps>(function Input({ error, style, ...props }, ref) {
  const { theme } = useTheme();
  return <TextInput {...props} ref={ref} placeholderTextColor={theme.colors.textMuted} style={[styles.base, { color: theme.colors.textPrimary, backgroundColor: theme.colors.surface, borderColor: error ? theme.colors.danger : theme.colors.border, borderRadius: theme.radii.md }, style]} />;
});

export function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  const { theme } = useTheme();
  return <View style={{ gap: theme.spacing.sm }}><Text variant="label">{label}</Text>{children}{error ? <Text variant="caption" tone="danger">{error}</Text> : null}</View>;
}

const styles = StyleSheet.create({ base: { minHeight: 48, borderWidth: 1, paddingHorizontal: 14, paddingVertical: 12, fontSize: 16, lineHeight: 22 } });
