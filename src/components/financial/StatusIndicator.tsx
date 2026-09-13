import { View } from "react-native";
import { useTheme } from "@/theme";
import { Badge, type BadgeTone } from "@/components/ui/Badge";

export type FinancialStatus = "current" | "onTrack" | "warning" | "overdue" | "insufficient" | "info";
const statusConfig: Record<FinancialStatus, { label: string; tone: BadgeTone }> = {
  current: { label: "Current", tone: "success" },
  onTrack: { label: "On track", tone: "success" },
  warning: { label: "Needs attention", tone: "warning" },
  overdue: { label: "Overdue", tone: "danger" },
  insufficient: { label: "Insufficient", tone: "danger" },
  info: { label: "Info", tone: "info" },
};

export function StatusIndicator({ status }: { status: FinancialStatus }) {
  const { theme } = useTheme();
  const config = statusConfig[status];
  const dotColor = { success: theme.colors.success, warning: theme.colors.warning, danger: theme.colors.danger, info: theme.colors.info }[config.tone];
  return <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}><View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: dotColor }} /><Badge tone={config.tone}>{config.label}</Badge></View>;
}
