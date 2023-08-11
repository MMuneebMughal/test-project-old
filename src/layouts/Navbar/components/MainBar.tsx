import { MenuItem } from '@mui/material';
import { pages } from '@src/layouts/Navbar/pages';
import {
  MainBarWrap,
  DesktopNavWrap,
  MobileMenuWrap,
  MainBarNavItem,
} from '@src/layouts/Navbar/style';
import { Drawer } from './Drawer';

export const MainBar = () => {
  return (
    <MainBarWrap>
      <MainBarNavItem>Logo</MainBarNavItem>
      <DesktopNavWrap>
        {pages.map((page, index) => (
          <MenuItem
            sx={{ p: 0 }}
            key={index}
            component={page.component}
            to={page.path}
          >
            <MainBarNavItem>{page.title}</MainBarNavItem>
          </MenuItem>
        ))}
      </DesktopNavWrap>
      <MobileMenuWrap>
        <Drawer />
      </MobileMenuWrap>
    </MainBarWrap>
  );
};
