import { Box, Grid } from '@mui/material';
import { Item, RightTop, Rightbottom } from '@src/pages/components/style';

export const Header = () => {
  return (
    <Box
      sx={{
        height: '450px',
        flexGrow: 1,
        overflowX: 'clip',
      }}
    >
      <Grid container spacing={2} columns={18} minHeight='100%' py='1rem'>
        <Grid item xs={8}>
          <Item>
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src='https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/pre-order-g-pixel-7.jpg'
              srcSet='https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/pre-order-g-pixel-7.jpg'
              alt='title'
              loading='lazy'
            />
          </Item>
        </Grid>
        <Grid item xs={10} overflow='clip'>
          <RightTop>
            <img
              style={{
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src='https://cdn.vox-cdn.com/thumbor/dtobLq4zl77mIiKDzdmFmaaY7AI=/0x0:1920x1080/920x0/filters:focal(0x0:1920x1080):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23901873/g735_accessories_bundle_desktop_v2.jpg'
              srcSet='https://cdn.vox-cdn.com/thumbor/dtobLq4zl77mIiKDzdmFmaaY7AI=/0x0:1920x1080/920x0/filters:focal(0x0:1920x1080):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23901873/g735_accessories_bundle_desktop_v2.jpg'
              alt='title'
              loading='lazy'
            />
          </RightTop>
          <Box sx={{ flexGrow: 1, height: '140px' }}>
            <Grid container columnSpacing={2} columns={12} height='100%'>
              <Grid item xs={6}>
                <Rightbottom>
                  <img
                    style={{
                      width: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                    src='https://img.freepik.com/premium-photo/new-generation-game-controller-blue-background_309665-1073.jpg?w=826'
                    srcSet='https://img.freepik.com/premium-photo/new-generation-game-controller-blue-background_309665-1073.jpg?w=826'
                    alt='title'
                    loading='lazy'
                  />
                </Rightbottom>
              </Grid>
              <Grid item xs={6}>
                <Rightbottom>
                  <img
                    style={{
                      width: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                    src='https://hnnz-assets.s3-ap-southeast-2.amazonaws.com/images/brand-pages/fujifilm/feature01.webp'
                    srcSet='https://hnnz-assets.s3-ap-southeast-2.amazonaws.com/images/brand-pages/fujifilm/feature01.webp'
                    alt='title'
                    loading='lazy'
                  />
                </Rightbottom>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
