import {useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {Container,Box, Checkbox,Button, Typography} from '@mui/material'
import Spinner from "../../components/Spinner/Spinner";
import type { Flight } from "../../types";
import styles from "./FlightDetailsPageStyles";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cartReducer";

export default function FlightDetailsPage()
{
    const [selected, setSelected] = useState<number[]>([]);
     const [data, setData] = useState<Flight | null>(null);
     const [randomNumber, setRandomNumber] = useState<number[]>([]);
     const { id } = useParams();
      const dispatch = useDispatch();



      const handleClick = () => {
        dispatch(
          addCartItem({...data, seat:selected})
        );
      };
    




          function random(max: number, min = 1)
      {
        const randomArray:number[] = []
        for(let i = min; i <= Math.floor(Math.random() * max) + 1; i++)
        {
          randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min)
        }
       setRandomNumber(randomArray)
      }
        

    useEffect(() => {             
            (async function getData() {
            try {
                const response = await axios.get(`https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights/${id}`);
                setData(response.data)
                random(response.data.tickets.total);
           
            } catch (error:unknown) {
                if(error instanceof Error)
                {
                    throw Error(error.message)
                }
            }
        })()
    },[id])


 
  const handleChange = (number:number) => {
    setSelected(prev => prev.includes(number) ? prev.filter((item) => item !== number)
      : [...prev, number]
    );
  };

          
    






  let selectedSeats = ''
  selected.map(item => selectedSeats += item + ', ')



if (!data) {
  return <Spinner text = {'Завантаження даних...'}/>
}

  const items = Array.from(Array(data.tickets.total), (_, index) => index + 1);
  const half = Math.ceil(data.tickets.total / 2);

    return(
      
        <Container maxWidth="lg">
          <Box sx={styles.MainGridContainer}>
            <Box>
              <Typography variant="h4" component="h2" sx={{p:1}}>Деталі польоту:</Typography>
              <Typography>Авіалінії: {data.airline}</Typography>
                <Typography>
                  Від: {data.from}  до: {data.to}
                </Typography>
                <Typography>
                  Час відправлення:{" "}
                  {new Date(data.departureTime).toLocaleString()}
                </Typography>
                <Typography>
                  Час прибуття: {new Date(data.arrivalTime).toLocaleString()}{" "}
                </Typography>
                <Typography>Термінал: {data.terminal}</Typography>
                <Typography>Ворота: {data.gate}</Typography>
                <Typography>
                  В наявності: {data.tickets.remaining} / {data.tickets.total}
                </Typography>
                <Typography>Ціна: {data.price} грн.</Typography>
              <Typography variant="h5" sx={{p:1}}>Обрані місця: {selectedSeats}</Typography>
              <Typography variant="h5" sx={{p:1}}>Сума до сплати: {data.price * selected.length}</Typography>
              <Button onClick={handleClick}>Додати в корзину</Button>
            </Box>

  <Box>
     <Typography variant="h4" component="h2" sx={{p:1}}>Оберіть місце:</Typography>
  <Box sx={styles.SecondColumneGridContainer}>
      <Box sx={styles.SecondColumneGridColumn}>
        {items.slice(0, half).map((item, index) => (
          <Checkbox
            key={item}
            value={index}
            checked={selected.includes(item)}
            onChange={() => handleChange(item)}
            disabled = {randomNumber.includes(item)}
            icon={<Box>{item}</Box>}
            sx={{ ...styles.Checkbox, bgcolor: randomNumber.includes(item) ? "red" : "green"}}
          >
           
          </Checkbox>
        ))}
      </Box>

      <Box sx={styles.SecondColumneGridColumn}>
        {items.slice(half).map((item, index) => (
          <Checkbox
            key={item}
            value={index}
            checked={selected.includes(item)}
            onChange={() => handleChange(item)}
            disabled = {randomNumber.includes(item)}
            icon={<Box>{item}</Box>}
            sx={{ ...styles.Checkbox, bgcolor: randomNumber.includes(item) ? "red" : "green"}}
          >
          </Checkbox>
        ))}
        </Box>
      </Box>
    </Box>
    </Box>
        </Container>
    )
}



