import {
  Typography
} from '@mui/material';
import CartTable from '../CartTable';

const TrackResult = ({ trackResult }) => {
  if (trackResult) {
    return (
      <>
        <Typography variant="h2" sx={{ fontSize: '1.75em', textAlign: 'center' }}>Order #00000</Typography>
        <Typography variant="h3" sx={{ margin: '1em auto 2em', fontSize: '1.05em', fontWeight: '700', textAlign: 'center', color: '#3162ae' }}>Processing</Typography>
  
        <CartTable />
      </>
    )
  }
}

export default TrackResult
