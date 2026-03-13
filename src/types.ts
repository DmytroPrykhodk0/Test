import type { Dispatch, SetStateAction } from "react"

export interface Flight {
  id:string
  airline:string
  from:string
  to:string
  departureTime: Date
  arrivalTime: Date
  price:number
  terminal:string
  gate:string
  tickets:{
    total:number
    remaining:number
  }
}

export interface propsFlights
{
  data:Flight[]
  setData: Dispatch<SetStateAction<Flight[]>>;
  sortFlights:(value:string) => void
}

export type SortingProps = {sortFlights: (value: string) => void;}