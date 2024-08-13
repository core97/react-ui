export interface ThemeContextValue {
  colorScheme: React.CSSProperties["colorScheme"];
  toggleColorScheme: () => void;
}

export interface ThemeContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}
