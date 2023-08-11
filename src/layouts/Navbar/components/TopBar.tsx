import { NavItem } from '@src/layouts/Navbar/components/NavItem';
import { topbarpages } from '@src/layouts/Navbar/pages';
import {
  TopBarWrap,
  TopBarItem,
  TopBarHeading,
} from '@src/layouts/Navbar/style';

export const TopBar = () => {
  return (
    <TopBarWrap>
      <TopBarItem>
        <TopBarHeading>FREE SHIPPING FOR ALL ORDERS OF $150</TopBarHeading>
      </TopBarItem>
      <TopBarItem>
        {topbarpages.map((page, index) => (
          <NavItem
            key={index}
            title={page.title}
            path={page.path}
            component={page.component}
          />
        ))}
      </TopBarItem>
    </TopBarWrap>
  );
};
