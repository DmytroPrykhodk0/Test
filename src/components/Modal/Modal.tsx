import { Typography, Modal, Box, Stack, Button } from "@mui/material";
import {useNavigate} from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem } from "../../store/cartReducer";
import type { cartItem } from "../../types";
import type { RootState } from '../../store/store'
import styles from './ModalStyles'
import ClearIcon from '@mui/icons-material/Clear';


export default function ModalCart() {
  const navigate = useNavigate();
  const item:cartItem[] = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch();
  console.log(item)
  const handleClick = (id:string,seat:number) => {
        dispatch(
          removeCartItem({id:id,seat:seat})
        );
      };

    return (
   <Modal open onClose={() => navigate(-1)}>
      <Box sx={styles.Modal}>
        <Typography  variant="h5" component="h2">Корзина:</Typography>
        <Stack spacing={2}>
          {item.map((item,index) => 
          <Box key={index} sx={{borderRadius: 1, border:'solid 1px', gap:2, p:3,display:"grid",gridTemplateColumns:'1fr 1fr', gridTemplateRows:'auto auto'}}>      
              <Box sx={{gridColumn: "1 / 3",}}>
                  <Button type="button" sx={{display:'flex', justifyContent:'flex-start',p:0}} onClick={() => handleClick(item.id, item.seat)}><ClearIcon sx={{color:'black'}}/></Button>
              </Box>
              <Box>
              <Typography>Авіалінії: {item.airline}</Typography>
                <Typography>
                  Від: {item.from}  до: {item.to}
                </Typography>
                <Typography>
                  Час відправлення:{" "}
                  {new Date(item.departureTime).toLocaleString()}
                </Typography>
          
                  <Typography>
                    Час прибуття: {new Date(item.arrivalTime).toLocaleString()}{" "}
                  </Typography>
                        </Box>
                  <Box>
                  <Typography>Термінал: {item.terminal}</Typography>
                  <Typography>Ворота: {item.gate}</Typography>
                    <Typography>Місце: {item.seat} </Typography>
                  <Typography>Ціна: {item.price} грн.</Typography>
                  </Box>
                
          </Box>)}
        </Stack>
        <Typography  variant="h6" component="h2">Загальна сума: {item.reduce((accum,item) => accum + Number(item.price),0)} грн.</Typography>
      </Box>
    </Modal>
  );
}