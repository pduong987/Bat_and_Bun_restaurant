import React from 'react';
import {
  Container,
  Typography,
  Grid
} from '@mui/material';
import MenuItemDetail from './MenuItemDetail';

const MenuItemList = () => {
  // Menu items
  const items = [
    {
      name: "Bacon and Egg Roll",
      image: "/img/items/bacon-and-egg-roll.jpg",
      category: "Breakfast",
      price: 8.00
    },
    {
      name: "Egg and Haloumi Roll",
      image: "/img/items/egg-and-haloumi-roll.jpg",
      category: "Breakfast",
      price: 8.00
    },
    {
      name: "Cheese and Veggie Wrap",
      notes: "with spiced dukka",
      image: "/img/items/cheese-and-veggie-wrap.jpg",
      category: "Wrap",
      price: 12.00
    },
    {
      name: "Lemongrass Chicken Wrap",
      notes: "with mayo",
      image: "/img/items/lemongrass-chicken-wrap.jpg",
      category: "Wrap",
      price: 12.00
    },
    {
      name: "Crispy Skin Pork Belly Wrap",
      notes: "with aioli & house soy sauce",
      image: "/img/items/crispy-skin-pork-belly-wrap.jpg",
      category: "Wrap",
      price: 12.00
    },
    {
      name: "Smoked Salmon Wrap",
      notes: "with hollandaise",
      image: "/img/items/smoked-salmon-wrap.jpg",
      category: "Wrap",
      price: 12.00
    },
    {
      name: "Goi (GF)",
      notes: "green apple salad, carrot, capsicum, cabbage, mint, mixed greens, spiced dukka & house dressing",
      image: "/img/items/goi-gf.jpg",
      category: "Salad",
      price: 15.00
    },
    {
      name: "Bun (GF)",
      notes: "rice noodle salad bowl with pickled carrot, cucumber, red cabbage, mint, beansprouts, coriander and house dressing",
      image: "/img/items/bun-gf.jpg",
      category: "Salad",
      price: 13.00
    },
    {
      name: "Crispy Pork Belly Cuon (GF)",
      notes: "fresh rice paper rolls, three pieces, with homemade peanut sauce",
      image: "/img/items/crispy-pork-belly-cuon-gf.jpg",
      category: "Vietnamese Street Food",
      price: 9.00
    },
    {
      name: "Chicken Cuon (GF)",
      notes: "fresh rice paper rolls, three pieces, with homemade peanut sauce",
      image: "/img/items/chicken-cuon-gf.jpg",
      category: "Vietnamese Street Food",
      price: 9.00
    },
    {
      name: "Avocado Cuon (GF|VG)",
      notes: "fresh rice paper rolls, three pieces, with homemade peanut sauce",
      image: "/img/items/avocado-cuon-gf-vg.jpg",
      category: "Vietnamese Street Food",
      price: 9.00
    },
    {
      name: "Lemongrass Chilli Chicken Com",
      notes: "steamed rice with vegetables",
      image: "/img/items/lemongrass-chilli-chicken-com.jpg",
      category: "Vietnamese Street Food",
      price: 13.00
    },
    {
      name: "Crispy Skin Pork Belly Com",
      notes: "steamed rice with vegetables",
      image: "/img/items/crispy-skin-pork-belly-com.jpg",
      category: "Vietnamese Street Food",
      price: 13.00
    },
    {
      name: "Pho",
      notes: "Vietnamese noodle soup served with beansprouts, mint, onion, shallot, coriander, hoisin and sriracha",
      image: "/img/items/pho.jpg",
      category: "Vietnamese Street Food",
      price: 13.00
    },
    {
      name: "Banh Mi",
      notes: "Vietnamese baguette with pickled carrot, cucumber, coriander, shallot, pate, mayo, apple, chilli & house dressing",
      image: "/img/items/banh-mi.jpg",
      category: "Vietnamese Street Food",
      price: 10.00
    },
    {
      name: "Bao Buns",
      notes: "set of 2 baos chilli aioli, fresh mixed herb salad",
      image: "/img/items/bao-buns.jpg",
      category: "Vietnamese Street Food",
      price: 10.90
    },
    {
      name: "Milkshakes",
      image: "/img/items/milkshakes.jpg",
      category: "Drinks",
      price: 8.00
    },
    {
      name: "Soft Drinks",
      image: "/img/items/soft-drinks.jpg",
      category: "Drinks",
      price: 3.00
    },
    {
      name: "See The Light",
      notes: "600ml fresh juice, oranges, carrot & ginger",
      image: "/img/items/see-the-light.jpg",
      category: "Drinks",
      price: 8.00
    },
    {
      name: "Flying High",
      notes: "600ml fresh juice, oranges, apples & mint",
      image: "/img/items/flying-high.jpg",
      category: "Drinks",
      price: 8.00
    },
    {
      name: "Green House",
      notes: "600ml fresh juice, apples, cucumber, celery",
      image: "/img/items/green-house.jpg",
      category: "Drinks",
      price: 8.00
    },
    {
      name: "Vietnamese Iced Coffee",
      image: "/img/items/vietnamese-iced-coffee.jpg",
      category: "Drinks",
      price: 7.50
    },
    {
      name: "Ginger Beer Bundaberg",
      image: "/img/items/ginger-beer-bundaberg.jpg",
      category: "Drinks",
      price: 4.50
    },
    {
      name: "Passionfruit Sparkling Drink",
      image: "/img/items/passionfruit-sparkling-drink.jpg",
      category: "Drinks",
      price: 4.50
    },
    {
      name: "Kombucha",
      image: "/img/items/kombucha.jpg",
      category: "Drinks",
      price: 4.20
    },
    {
      name: "Coconut Water",
      notes: "330ml",
      image: "/img/items/coconut-water.jpg",
      category: "Drinks",
      price: 4.00
    },
    {
      name: "Brownie",
      image: "/img/items/brownie.jpg",
      category: "Sweet Treats",
      price: 2.00
    },
    {
      name: "Portuguese Tart",
      image: "/img/items/portuguese-tart.jpg",
      category: "Sweet Treats",
      price: 3.80
    }
  ];
  
  let categories = [];
  items.map(item => !categories.includes(item.category) && categories.push(item.category));

  // Get items within the category
  const itemsCategory = (cat) => {
    return items.filter(item => item.category === cat);
  };
  
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
