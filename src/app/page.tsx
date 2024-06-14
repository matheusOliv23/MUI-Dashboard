import ResponsiveDrawer from '@/components/ResponsiveDrawer';
import CustomThemeProvider from '@/providers/ThemeProvider';

export default function Home() {
  return (
    <CustomThemeProvider>
      <ResponsiveDrawer />
    </CustomThemeProvider>
  );
}
