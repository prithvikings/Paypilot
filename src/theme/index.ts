import { createContext, useContext, type PropsWithChildren } from "react";
import type { TextStyle, ViewStyle } from "react-native";

export const colors = {
  light: {
    background: "#F7FAFF",
    surface: "#FFFFFF",
    surfaceSecondary: "#F2F6FC",
    textPrimary: "#111A33",
    textSecondary: "#5F6D86",
    textMuted: "#8B96A8",
    border: "#E2E9F3",
    borderStrong: "#D5DFED",
    accent: "#2F80ED",
    accentSoft: "#EAF2FF",
    accentPressed: "#216FD4",
    success: "#16845A",
    successSoft: "#E4F7EF",
    warning: "#B86A00",
    warningSoft: "#FFF1D8",
    danger: "#D93F50",
    dangerSoft: "#FFE9EC",
    info: "#6B55D9",
    infoSoft: "#EFEBFF",
    white: "#FFFFFF",
    black: "#000000",
  },
  dark: {
    background: "#0E1424",
    surface: "#151D31",
    surfaceSecondary: "#1B263D",
    textPrimary: "#F5F8FF",
    textSecondary: "#B6C1D5",
    textMuted: "#7F8CA3",
    border: "#2A3750",
    borderStrong: "#35445F",
    accent: "#5A9BFF",
    accentSoft: "#1D3155",
    accentPressed: "#77ADFF",
    success: "#4DD69A",
    successSoft: "#173B2F",
    warning: "#FFBE5C",
    warningSoft: "#453319",
    danger: "#FF7180",
    dangerSoft: "#48222A",
    info: "#A291FF",
    infoSoft: "#302A55",
    white: "#FFFFFF",
    black: "#000000",
  },
} as const;

export type ThemeMode = keyof typeof colors;
export type ColorTokens = (typeof colors)[ThemeMode];

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  "4xl": 40,
  "5xl": 48,
} as const;

export type SpacingToken = keyof typeof spacing;

export const radii = {
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
  pill: 999,
} as const;

export type RadiusToken = keyof typeof radii;

export const typography = {
  display: { fontSize: 36, lineHeight: 42, fontWeight: "700", letterSpacing: -0.8 },
  heading1: { fontSize: 30, lineHeight: 36, fontWeight: "700", letterSpacing: -0.5 },
  heading2: { fontSize: 24, lineHeight: 30, fontWeight: "700", letterSpacing: -0.3 },
  heading3: { fontSize: 20, lineHeight: 26, fontWeight: "700", letterSpacing: -0.2 },
  body: { fontSize: 16, lineHeight: 24, fontWeight: "400" },
  bodyMedium: { fontSize: 16, lineHeight: 24, fontWeight: "500" },
  bodySmall: { fontSize: 14, lineHeight: 20, fontWeight: "400" },
  caption: { fontSize: 12, lineHeight: 17, fontWeight: "400" },
  label: { fontSize: 13, lineHeight: 18, fontWeight: "600", letterSpacing: 0.1 },
  financialLarge: { fontSize: 32, lineHeight: 38, fontWeight: "700", letterSpacing: -0.6, fontVariant: ["tabular-nums"] },
  financialMedium: { fontSize: 22, lineHeight: 28, fontWeight: "700", letterSpacing: -0.3, fontVariant: ["tabular-nums"] },
} satisfies Record<string, TextStyle>;

export type TypographyToken = keyof typeof typography;

export const shadows: Record<"card" | "floating", ViewStyle> = {
  card: { shadowColor: "#0B1F3A", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 16, elevation: 2 },
  floating: { shadowColor: "#0B1F3A", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.08, shadowRadius: 24, elevation: 4 },
};

export type PayPilotTheme = {
  mode: ThemeMode;
  colors: ColorTokens;
  spacing: typeof spacing;
  radii: typeof radii;
  shadows: typeof shadows;
  typography: typeof typography;
};

export const createTheme = (mode: ThemeMode = "light"): PayPilotTheme => ({ mode, colors: colors[mode], spacing, radii, shadows, typography });
export const lightTheme = createTheme("light");
export const darkTheme = createTheme("dark");

type ThemeContextValue = { theme: PayPilotTheme; mode: ThemeMode };
const ThemeContext = createContext<ThemeContextValue>({ theme: lightTheme, mode: "light" });

export type ThemeProviderProps = PropsWithChildren<{ mode?: ThemeMode }>;

export function ThemeProvider({ mode = "light", children }: ThemeProviderProps) {
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return <ThemeContext.Provider value={{ theme, mode }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
