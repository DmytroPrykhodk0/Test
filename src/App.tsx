import { useState } from 'react';
import {Routes, Route, useLocation} from 'react-router';
import FlightDetailsPage from './pages/FlightDetailsPage/FlightDetailsPage'
import FlightsPage from './pages/FlightsPage/FlightsPage'
import ModalCart from './components/Modal/Modal'
import {CssBaseline,GlobalStyles} from "@mui/material";
import type { Flight } from './types';




export default function App() {
  
  const [data, setData] = useState<Flight[]>([]);
const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

    function sortFlights(value:string):void
    {
            switch (value) {
                case "fromCheap":
                  setData([...data].sort((a,b) => a.price - b.price))
              break;
                 case "fromExpensive":
                  setData([...data].sort((a,b) => b.price - a.price))
              break;
               case "departureTime":
                      setData([...data].sort((a, b) => new Date(a.arrivalTime).getTime() - new Date(b.arrivalTime).getTime()))
                  break;
                   case "arrivalTime":
                      setData([...data].sort((a, b) => new Date(a.departureTime).getTime() - new Date(b.departureTime).getTime()))
                  break;
                case "airline":
                      setData([...data].sort((a, b) => a.airline.localeCompare(b.airline)))
                  break;
            default:
                throw new Error(`Unexpected value: ${value}`)
            }
    }

   
  return (
    <> 
    <CssBaseline />
    <GlobalStyles styles={{body: {backgroundColor: "#f9fafe"}}}/>

    <Routes location={state?.backgroundLocation || location}>
      <Route path='/' element={<FlightsPage setData={setData} data={data} sortFlights={sortFlights}/>}/>
      <Route path="/flights/:id" element={<FlightDetailsPage/>} />
       <Route path="/cart" element={<ModalCart />} />
    </Routes>

     {state?.backgroundLocation && (
        <Routes>
          <Route path="/cart" element={<ModalCart />} />
        </Routes>
      )}
      
    </>
  )
}


