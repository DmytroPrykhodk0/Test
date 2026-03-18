import MainSelect from '../../components/Select/Select'
import Filter from '../../components/Filter/Filter';
import Flights from '../../components/Flights/Flights'
import {Typography,Button, Container,AppBar,Box,Stack} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link, useLocation } from 'react-router';
import FlightsPageStyles from './flightPageStyles';
import type {propsFlightsPage} from '../../types'
import { useState } from 'react';


export default function FlightsPage(props:propsFlightsPage)
{
  const [favorites, setFavorites] = useState<string[]>([]);
  const location = useLocation();

    return (
     <Container maxWidth="lg">
      <AppBar position="static" square={false} sx={FlightsPageStyles.AppBar}>
           <Typography variant="h4" component="h1" sx={FlightsPageStyles.AppBarH1}>Список польотів</Typography>
          <Box sx={FlightsPageStyles.AppBarWrapper}>
            <MainSelect sortFlights={props.sortFlights}/>
            <Filter setData={props.setData} data={props.data} favorites={favorites} />
            <Button component={Link} to="/cart" state={{ backgroundLocation: location }} variant="contained" startIcon={<ShoppingCartIcon />} sx={FlightsPageStyles.AppBarButton}> Корзина</Button>
          </Box>       
      </AppBar>
      <Box component="main" sx={FlightsPageStyles.Main}>
        <Stack spacing={5}>  
          <Flights setData={props.setData} data={props.data} favorites={favorites} setFavorites={setFavorites}/>
        </Stack>
      </Box>
    </Container>
    )
}

