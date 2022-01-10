import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Alert
} from "@mui/material";
import { useAuth } from '../../contexts/AuthContext';
import ItemForm from './ItemForm';

const EditItem = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [item, setItem] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      axios.get(`/items/${id}`)
      .then(res => {
        setItem(res.data);
        setLoading(false);
      });
    } catch (err) {
      return (`Error retrieviing the menu item. Error: ${err}.`);
    }
  }, [id]);

  return (
    <div id="DashboardView">
      <Container>
        <Typography variant="h1" sx={{ fontSize: "3em", margin: "1em auto" }}>
          Edit Item
        </Typography>
        
        {/* Show error */}
        {error && <Alert severity="error">{error}</Alert>}
        
        {!loading && item && 
          <ItemForm setError={setError} token={currentUser.accessToken} item={item} />
        }

        {loading &&
          <Typography variant="h3" sx={{ fontSize: "1.75em", margin: "1em auto" }}>
            Loading...
          </Typography>
        }
      </Container>
    </div>
  )
}

export default EditItem;
