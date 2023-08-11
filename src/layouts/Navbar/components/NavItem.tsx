import { MenuItem } from '@mui/material';
import { MuiBtnWrap } from '@src/layouts/Navbar/style';

interface NavItemProps {
  title: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}
export const NavItem = ({ title, path, component }: NavItemProps) => {
  return (
    <MenuItem sx={{ p: 0 }} component={component} to={path}>
      <MuiBtnWrap>{title}</MuiBtnWrap>
    </MenuItem>
  );
};
