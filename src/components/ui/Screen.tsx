import type { PropsWithChildren, ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View, type ScrollViewProps, type ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/theme";

export type ScreenProps = PropsWithChildren<{ scroll?: boolean; keyboardAware?: boolean; header?: ReactNode; contentContainerStyle?: ScrollViewProps["contentContainerStyle"]; style?: ViewProps["style"] }>;

export function Screen({ children, scroll = true, keyboardAware = false, header, contentContainerStyle, style }: ScreenProps) {
  const { theme } = useTheme();
  const content = scroll ? <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={[styles.scrollContent, { paddingHorizontal: theme.spacing.lg, paddingBottom: theme.spacing["5xl"] }, contentContainerStyle]} showsVerticalScrollIndicator={false}>{header}{children}</ScrollView> : <View style={[styles.content, { paddingHorizontal: theme.spacing.lg }, contentContainerStyle]}>{header}{children}</View>;
  const body = keyboardAware ? <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === "ios" ? "padding" : undefined}>{content}</KeyboardAvoidingView> : content;
  return <SafeAreaView edges={["top", "left", "right"]} style={[styles.flex, { backgroundColor: theme.colors.background }, style]}>{body}</SafeAreaView>;
}

const styles = StyleSheet.create({ flex: { flex: 1 }, content: { flex: 1 }, scrollContent: { flexGrow: 1 } });
