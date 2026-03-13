import {Select,MenuItem, type SelectChangeEvent} from '@mui/material'
import SelectStyles from './SelectStyles'
import type {SortingProps} from '../../types'

export default function MainSelect({sortFlights}:SortingProps)
{
     return(
     <Select
          defaultValue=""
          displayEmpty
          size="small"
          onChange={(e:SelectChangeEvent) => sortFlights(e.target.value)}
          sx={SelectStyles.Select}>
               <MenuItem value="" disabled>Сортувати по...</MenuItem>
               <MenuItem value="fromExpensive">Від дорогих до дешевих</MenuItem>
               <MenuItem value="fromCheap">Від дешевих до дорогих</MenuItem>
               <MenuItem value="departureTime">Час відправлення</MenuItem>
               <MenuItem value="arrivalTime">Час прибуття</MenuItem>
               <MenuItem value="airline">Авіакомпанії</MenuItem>
     </Select>
     )
}