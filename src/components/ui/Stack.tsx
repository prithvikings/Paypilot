import type { PropsWithChildren } from "react";
import { View, type ViewProps } from "react-native";
import { useTheme, type SpacingToken } from "@/theme";

export type StackProps = PropsWithChildren<Omit<ViewProps, "style"> & { gap?: SpacingToken; style?: ViewProps["style"] }>;

export function Stack({ children, gap = "lg", style, ...props }: StackProps) {
  const { theme } = useTheme();
  return <View {...props} style={[{ gap: theme.spacing[gap] }, style]}>{children}</View>;
}

export function Row({ style, ...props }: StackProps) {
  return <Stack {...props} style={[{ flexDirection: "row" }, style]} />;
}
