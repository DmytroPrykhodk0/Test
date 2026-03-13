import {useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {Container,Box, Checkbox,Button} from '@mui/material'
import Spinner from "../../components/Spinner/Spinner";
import type { Flight } from "../../types";

export default function FlightDetailsPage()
{

     const [data, setData] = useState<Flight | null>(null);
     const { id } = useParams();



    useEffect(() => {             
            (async function getData() {
            try {
                const response = await axios.get(`https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights/${id}`);
                setData(response.data)
            } catch (error:unknown) {
                if(error instanceof Error)
                {
                    throw Error(error.message)
                }
            }
        })()
    },[id])


if (!data) {
  return <Spinner text = {'Завантаження даних...'}/>
}

  const half = Math.ceil(data.tickets.total / 2);
  const left = Array.from({ length: half });
  const right = Array.from({ length: data.tickets.total - half });





    return(
        <Container maxWidth="lg">
    <Box sx={{ display: "flex", gap: 15 }}>
  

  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 30px)",
      gap: 1
    }}
  >
    {left.map((_, index) => (
      <Checkbox
      value={index + 1}
        key={index}
        icon={<span />}
        checkedIcon={<span />}
        sx={{
          backgroundColor: "green",
          width: 30,
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          "&:hover": {
            backgroundColor: "yellow",
            cursor: "pointer"
          },
            "&.Mui-checked": {
        backgroundColor: "blue",
      },
        }}
      >
      </Checkbox>
    ))}
  </Box>

  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 30px)",
      gap: 1
    }}
  >
    {right.map((_, index) => (
      <Checkbox
      value={index + 1}
        key={index}
        icon={<span />}
        checkedIcon={<span />}
        sx={{
          backgroundColor: "green",
          width: 30,
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          "&:hover": {
            backgroundColor: "yellow",
            cursor: "pointer"
          },
               "&.Mui-checked": {
        backgroundColor: "blue",
      },
        }}
      >
      </Checkbox>
    ))}
  </Box>

</Box>
    <Button onClick={() => {}}>Додати в корзину </Button>
        </Container>
    )
}



