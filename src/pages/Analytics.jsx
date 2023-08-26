import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaymentIcon from '@mui/icons-material/Payment';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import CardContent from '@mui/material/CardContent';
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import Card from '@mui/material/Card';
import AccordionC from '../components/Accordion';
import CountUp from 'react-countup';

import './Dash.css'
import { BarChart } from '../charts/BarChart';
import { GeoChart } from '../charts/GeoChart';
import { Bar } from '../charts/Bar';
import { PieChart } from '../charts/PieChart';


export const Analytics = () => {
  return (
    <Grid>
      <Header />
      <Box height={70} />
      <Grid display={'flex'} >
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Stack spacing={2} direction={'column'} >
                <Stack spacing={2} direction={'row'} >
                  <Card sx={{ minWidth: 48 + '%', height: 150 }} style={{ background: 'linear-gradient(to right bottom, #314755, #26a0da)' }}>
                    <CardContent>
                      <PaymentIcon fontSize='large' className="icon" />
                      <Typography gutterBottom variant="h5" component="div" color={'white'}>
                      <CountUp delay={0.4} end={32000} duration={0.6}/>
                      </Typography>
                      <Typography gutterBottom variant="body" component="div" color={'white'} >
                        Total Earning
                      </Typography>
                    </CardContent>

                  </Card>
                  <Card sx={{ minWidth: 48 + '%', height: 150 }} style={{ background: 'linear-gradient(to right bottom, #1f4037, #99f2c8)' }}>
                    <CardContent>
                      <PaidRoundedIcon fontSize='large' className="icon" />
                      <Typography gutterBottom variant="h5" component="div" color={'white'}>
                      <CountUp delay={0.4} end={35000} duration={0.6}/>
                      </Typography>
                      <Typography gutterBottom variant="body" component="div" color={'white'}>
                        Total Orders
                      </Typography>
                    </CardContent>

                  </Card>
                </Stack>
                <Stack spacing={2} direction={'row'} >

                  <Card sx={{ minWidth: 48 + '%', height: 150 }} style={{ background: 'linear-gradient(to right bottom, #1f4037, #99f2c8)' }}>
                    <CardContent>
                      <PaidRoundedIcon fontSize='large' className="icon" />
                      <Typography gutterBottom variant="h5" component="div" color={'white'}>
                      <CountUp delay={0.4} end={12000} duration={0.6}/>
                      </Typography>
                      <Typography gutterBottom variant="body" component="div" color={'white'}>
                        Total Orders
                      </Typography>
                    </CardContent>

                  </Card>
                  <Card sx={{ minWidth: 48 + '%', height: 150 }} style={{ background: 'linear-gradient(to right bottom, #1f4037, #99f2c8)' }}>
                    <CardContent>
                      <PaidRoundedIcon fontSize='large' className="icon" />
                      <Typography gutterBottom variant="h5" component="div" color={'white'}>
                      <CountUp delay={0.4} end={32000} duration={0.6}/>
                      </Typography>
                      <Typography gutterBottom variant="body" component="div" color={'white'}>
                        Total Orders
                      </Typography>
                    </CardContent>

                  </Card>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={7}>
                <Card sx={{ height: 40 + 'vh' }}  >
                  <CardContent >
                    <Bar />
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
          <Box height={30} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 40 + 'vh' }}>
                <CardContent>
                </CardContent>
                  <GeoChart />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 40 + 'vh' }}>
                <CardContent>
                <PieChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}
