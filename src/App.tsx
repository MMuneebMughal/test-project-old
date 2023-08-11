import { Router } from '@src/routes/Router';
import { CustomTheme } from '@src/theme';

export const App = () => {
  return (
    <CustomTheme>
      <Router />
    </CustomTheme>
  );
};
