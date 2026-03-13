import { CircularProgress, Box, Typography} from '@mui/material'
import SpinnerStyles from './SpinnerStyles'

export default function Spinner({text}:{text:string}) {
  return (
    <Box sx={SpinnerStyles.SpinnerWrapper}>
      <CircularProgress size={45}/>
        <Typography variant="h5">{text}</Typography>
    </Box>
  );
}