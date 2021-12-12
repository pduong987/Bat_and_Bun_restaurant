import {
  Container,
  Typography
} from '@mui/material';
import CartTable from '../components/CartTable';
import CustomerDetailsForm from '../components/OrderConfirmationView/CustomerDetailsForm';

const OrderConfirmationView = () => {
  return (
    <div id="OrderConfirmationView">
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em', textAlign: 'center' }}>Order Confirmation</Typography>
      </Container>

      <CartTable />

      <CustomerDetailsForm />
    </div>
  )
}

export default OrderConfirmationView;
