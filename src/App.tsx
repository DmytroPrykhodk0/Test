import { useState } from 'react';
import {Routes, Route} from 'react-router';
import FlightDetailsPage from './pages/FlightDetailsPage/FlightDetailsPage'
import FlightsPage from './pages/FlightsPage/FlightsPage'
import {CssBaseline,GlobalStyles } from "@mui/material";
import type { Flight } from './types';



export default function App() {
  
  const [data, setData] = useState<Flight[]>([]);

    function sortFlights(value:string):void
    {
            switch (value) {
                case "fromCheap":
                  setData(data.toSorted((a,b) => a.price - b.price))
              break;
                 case "fromExpensive":
                  setData(data.toSorted((a,b) => b.price - a.price))
              break;
               case "departureTime":
                      setData(data.toSorted((a, b) => new Date(a.departure).getTime() - new Date(b.departure).getTime()))
                  break;
                   case "arrivalTime":
                      setData(data.toSorted((a, b) => new Date(a.arrival).getTime() - new Date(b.arrival).getTime()))
                  break;
                case "airline":
                      setData(data.toSorted((a, b) => a.airline.localeCompare(b.airline)))
                  break;
            default:
                return assertNever(value)
            }
    }

    function assertNever(value: never): never {
      throw new Error(`Unexpected value: ${value}`)
    }

  return (
    <> 
    <CssBaseline />
    <GlobalStyles styles={{body: {backgroundColor: "#f9fafe"}}}/>
    <Routes>
      <Route path='/' element={<FlightsPage setData={setData} data={data} sortFlights={sortFlights}/>}/>
      <Route path="/flights/:id" element={<FlightDetailsPage data={data}/>} />
      <Route path='/cart' element={<></>}/>
    </Routes>
    </>
  )
}


