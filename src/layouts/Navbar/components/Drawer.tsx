import * as React from 'react';
import { SwipeableDrawer, Button, MenuItem } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { pages } from '@src/layouts/Navbar/pages';
import {
  MainBarNavItem,
  MobileNavWrap,
  MobileMenuBox,
} from '@src/layouts/Navbar/style';

export const Drawer = () => {
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer =
    (ancher: 'right', open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [ancher]: open });
    };

  const list = (anchor: 'right') => (
    <MobileMenuBox
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MobileNavWrap>
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
      </MobileNavWrap>
    </MobileMenuBox>
  );

  return (
    <React.Fragment>
      <Button sx={{ color: '#000' }} onClick={toggleDrawer('right', true)}>
        <Menu />
      </Button>
      <SwipeableDrawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {list('right')}
      </SwipeableDrawer>
    </React.Fragment>
  );
};
