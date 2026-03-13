import { Button,IconButton,Checkbox,FormControlLabel,Box,Drawer,List } from "@mui/material"
import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
import { useEffect,useState } from "react";
import axios from "axios";
import type { propsFilter } from "../../types";


  export default function Filter(props:propsFilter)
  {

     const [open, setOpen] = useState(false);
     const [filterFavorite, setfilterFavorites] = useState(false);
      const [data, setData] = useState([]);

      const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };


   useEffect(() => {          
            (async function () {
            try {
                const response = await axios.get('https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights');
                setData(response.data)
            } catch (error:unknown) {
                if(error instanceof Error)
                {
                    throw Error(error.message)
                }
            }
        })()
    },[])


      

      function filterFavorites(){
        if(filterFavorite)
        {
          props.setData(props.data.filter(item => props.favorites.includes(item.id)))
        }else{
          props.setData(data)
        }
      };

      
    return (
      <>
         <Button 
         onClick={toggleDrawer(true)}
          variant="outlined"
              sx={{
          width: 48,
          height: 48,
          border: "1px solid #d0d5dd",
          borderRadius: "8px",
          padding:0,
          "&:hover": {
            backgroundColor: "#f5f5f5"
          }
        }}
          >
            <IconButton >
                  <FilterListAltIcon/>
                </IconButton>
          </Button>

          <Drawer open={open} onClose={toggleDrawer(false)} anchor="right"  ModalProps={{keepMounted: true}}>
            <Box sx={{ width: 250}} role="presentation" onClick={toggleDrawer(true)}>
      <List>
          <FormControlLabel
          onChange={() => setfilterFavorites(prev => !prev)}
          control={<Checkbox />}
          label="Обране"
        />

        <Button onClick={() => { filterFavorites()}}>Показати</Button>
      </List>
    </Box>
      </Drawer>
      </>
    )
  }
 