import { Image, StyleSheet, View, type ImageSourcePropType, type ViewProps } from "react-native";
import { useTheme } from "@/theme";
import { Text } from "./Text";

export type AvatarProps = Omit<ViewProps, "children"> & { name?: string; source?: ImageSourcePropType; size?: "sm" | "md" | "lg" };

export function Avatar({ name, source, size = "md", style, ...props }: AvatarProps) {
  const { theme } = useTheme();
  const dimensions = { sm: 36, md: 48, lg: 64 }[size];
  const initials = name?.trim().split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "PP";
  return <View {...props} style={[styles.base, { width: dimensions, height: dimensions, borderRadius: dimensions / 2, backgroundColor: theme.colors.accentSoft }, style]}>{source ? <Image source={source} style={styles.image} /> : <Text variant={size === "lg" ? "heading3" : "bodyMedium"} tone="accent">{initials}</Text>}</View>;
}

const styles = StyleSheet.create({ base: { overflow: "hidden", alignItems: "center", justifyContent: "center" }, image: { width: "100%", height: "100%" } });
