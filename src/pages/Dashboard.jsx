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

import './Dash.css'
import { BarChart } from '../charts/BarChart';
import CountUp from 'react-countup';


export const Dashboard = () => {
  return (
    <Grid>
      <Header />
      <Box height={70} />
      <Grid display={'flex'} >
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction={'row'} >
                <Card sx={{ minWidth: 49 + '%', height: 150 }} style={{ background: 'linear-gradient(to right bottom, #314755, #26a0da)' }}>
                  <CardContent>
                    <PaymentIcon fontSize='large' className="icon" />
                    <Typography gutterBottom variant="h5" component="div" color={'white'}>
                    $<CountUp delay={0.4} end={500.00} duration={0.6}/>
                    </Typography>
                    <Typography gutterBottom variant="body" component="div" color={'white'} >
                      Total Earning
                    </Typography>
                  </CardContent>

                </Card>
                <Card sx={{ minWidth: 49 + '%', height: 150 }} style={{ background: 'linear-gradient(to right bottom, #1f4037, #99f2c8)' }}>
                  <CardContent>
                    <PaidRoundedIcon fontSize='large' className="icon" />
                    <Typography gutterBottom variant="h5" component="div" color={'white'}>
                    $<CountUp delay={0.4} end={900.00} duration={0.6}/>
                    </Typography>
                    <Typography gutterBottom variant="body" component="div" color={'white'}>
                      Total Orders
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2} direction={'column'}>
                <Card sx={{ maxWidth: 445, height: 70 }} style={{ background: 'linear-gradient(to right bottom, #1f4037, #99f2c8)' }} >
                  <CardContent >
                    <Grid display={'flex'} direction={'row'} justifyContent={'space-evenly'} alignItems={'center'} marginTop={-1}>
                      <Grid >
                        <StorefrontIcon className="icon" />
                      </Grid>
                      <Grid >
                        <Typography variant='h6' color={'white'}>
                        $<CountUp delay={0.4} end={203.00} duration={0.6}/>
                        </Typography>
                        <Typography color={'white'}>
                          Total Income
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 445, height: 70 }}>
                  <CardContent>
                    <Grid display={'flex'} direction={'row'} justifyContent={'space-evenly'} alignItems={'center'} marginTop={-1}>
                      <Grid >
                        <StorefrontIcon />
                      </Grid>
                      <Grid >
                        <Typography variant='h6'>
                        $<CountUp delay={0.4} end={200.00} duration={0.6}/>
                        </Typography>
                        <Typography>
                          Total Income
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={30} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + 'vh' }}>
                <CardContent>
                  <BarChart />
                </CardContent>

              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + 'vh' }}>
                <CardContent>
                  <Typography variant='h6' color={'black'}>
                    Popular Products
                  </Typography>
                  <AccordionC />
                </CardContent>

              </Card>
            </Grid>
          </Grid>
        </Box>

      </Grid>
    </Grid>
  )
}
