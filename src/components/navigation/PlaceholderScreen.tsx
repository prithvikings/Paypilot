import { StyleSheet, View } from "react-native";
import { Card } from "@/components/ui/Card";
import { Screen, Text } from "@/components/ui";
import { ScreenHeader } from "@/components/layout";
import { useTheme } from "@/theme";

type PlaceholderScreenProps = {
  title: string;
  subtitle: string;
  message: string;
};

export function PlaceholderScreen({ title, subtitle, message }: PlaceholderScreenProps) {
  const { theme } = useTheme();

  return (
    <Screen
      scroll={false}
      header={<ScreenHeader title={title} subtitle={subtitle} />}
    >
      <View style={styles.content}>
        <Card
          variant="soft"
          style={[
            styles.card,
            {
              padding: theme.spacing["2xl"],
            },
          ]}
        >
          <Text variant="heading3">{title}</Text>
          <Text variant="body" tone="secondary" style={styles.message}>
            {message}
          </Text>
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    gap: 8,
  },
  message: {
    lineHeight: 24,
  },
});
