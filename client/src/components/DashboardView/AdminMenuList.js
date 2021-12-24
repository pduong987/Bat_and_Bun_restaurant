import React, { useContext } from 'react';
import {
  Button
} from '@mui/material';
import ListTable from './ListTable';
import { ItemContext } from '../../contexts/ItemContext';

const AdminMenuList = () => {
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
    <div>
      <h1>Menu Item List</h1>
      <div style={{textAlign: 'center'}}>
        <Button
          color="primary"
          variant="contained"
        >
          Add New Item
        </Button>
      </div>
      <div>
        {categories.map((category, i) => (
          <div key={i}>
            <h2>{category}</h2>
            <ListTable items={itemsCategory(category)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminMenuList;
