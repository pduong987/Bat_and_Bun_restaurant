import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const MenuItemDetail = ({ item }) => {
  return (
    <Card
      className="item-detail-card"
      elevation={0}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="h4">
          {item.name}
        </Typography>
        <Typography
          variant="body1"
        >
          {item.notes && item.notes}
        </Typography>
        <Typography
          variant="body2"
        >
          ${item.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          <IconButton
            aria-label="reduce quantity"
            className="min-btn"
          >
            <RemoveIcon />
          </IconButton>
          <span className="qty-number">1</span>
          <IconButton
            aria-label="add quantity"
            className="add-btn"
          >
            <AddIcon />
          </IconButton>
        </div>
        <Button
          variant="contained"
          className="add-to-cart-btn"
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default MenuItemDetail;
