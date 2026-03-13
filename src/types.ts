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
  favorites: string[]
  data:Flight[]
  setData: Dispatch<SetStateAction<Flight[]>>;
  setFavorites: Dispatch<SetStateAction<string[]>>;
}

export interface propsFlightsPage
{
  data:Flight[]
  setData: Dispatch<SetStateAction<Flight[]>>;
  sortFlights:(value:string) => void
}

export interface propsFilter
{
  favorites:string[]
  data:Flight[]
  setData: Dispatch<SetStateAction<Flight[]>>;
}
export type SortingProps = {sortFlights: (value: string) => void;}