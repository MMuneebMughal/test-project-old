import { MenuItem } from '@mui/material';
import { pages } from '@src/layouts/Navbar/pages';
import { MuiBtnWrap } from '@src/layouts/Navbar/style';

export const ButtonCompo = () => {
  return (
    <>
      {pages.map((page, index) => (
        <MenuItem key={index} component={page.component} to={page.path}>
          <MuiBtnWrap>{page.title}</MuiBtnWrap>
        </MenuItem>
      ))}
    </>
  );
};
