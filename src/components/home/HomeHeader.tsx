import { StyleSheet, View } from "react-native";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/theme";

type HomeHeaderProps = {
  firstName: string;
};

export function HomeHeader({ firstName }: HomeHeaderProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { paddingTop: theme.spacing.md, paddingBottom: theme.spacing.lg }]}> 
      <Text variant="heading2">Good evening, {firstName}</Text>
      <Text variant="bodySmall" tone="secondary" style={{ marginTop: theme.spacing.xs }}>
        Here&apos;s your financial overview.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 0,
  },
});
