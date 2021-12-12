import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Alert,
  Button
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const DashboardView = ({ token }) => {
  const [error, setError] = useState('');
  const [data, setData] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/admin-login');
    } catch (err) {
      setError("Log out failed.");
      console.log(err);
    }
  }

  const fetchData = async (token) => {
    const res = await axios.get("http://localhost:5000/test", {
      headers: {
        Authorization: "Bearer " + token,
      }
    });

    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    currentUser && fetchData(currentUser.accessToken);
    console.log(currentUser.accessToken);
  }, [currentUser]);

  return (
    <div id="DashboardView">
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em' }}>Dashboard</Typography>
        
        {/* Show error */}
        {error && <Alert severity="error">{error}</Alert>}

        {currentUser && <h2>{currentUser.email}</h2>}
        {currentUser && <h2>{currentUser.accessToken}</h2>}

        {data && data.testContent.map(t => <h3 key={t.propertyOne}>{t.propertyOne}</h3>)}

        <Button
          type="submit"
          color="primary"
          variant="contained"
          margin="normal"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </Container>
    </div>
  )
}

export default DashboardView
