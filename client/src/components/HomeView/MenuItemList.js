import React, { useContext } from 'react';
import {
  Container,
  Typography,
  Grid
} from '@mui/material';
import { ItemContext } from '../../contexts/ItemContext';
import MenuItemDetail from './MenuItemDetail';

const MenuItemList = () => {
  const { allItems } = useContext(ItemContext);
  let categories = [], itemsCategory = [];

  if (allItems.length > 0) {
    allItems.map(item => !categories.includes(item.category) && categories.push(item.category));

    // Get items within the category
    itemsCategory = (cat) => {
      return allItems.filter(item => item.category === cat);
    };
  }
  
  return (
    <Container id="menu-item-list">
      {categories.map((category, i) => (
        <div key={i} className="menu-box">
          <Typography variant="h3">{category}</Typography>
          <Grid container spacing={2}>
            {itemsCategory(category).map((item, i) => (
              <Grid item xs={6} md={4} lg={3} key={i}>
                <MenuItemDetail item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  )
}

export default MenuItemList;
