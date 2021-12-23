import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import {
  Container,
  Typography,
  Alert,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  TableCell,
} from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const DashboardView = ({ token }) => {
  const [error, setError] = useState("");

  const [orders, setOrders] = useState(null);

  // const [data, setData] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://0.0.0.0:5000/orders")
      .then((result) => {
        setOrders(result.data || []);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/admin-login");
    } catch (err) {
      setError("Log out failed.");
      console.log(err);
    }
  }

  // const fetchData = async (token) => {
  //   const res = await axios.get("http://localhost:5000/test", {
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     }
  //   });

  //   console.log(res.data);
  //   setData(res.data);
  // };

  // useEffect(() => {
  //   currentUser && fetchData(currentUser.accessToken);
  //   console.log(currentUser.accessToken);
  // }, [currentUser]);

  if (Array.isArray(orders)) {
    return (
      <div id="DashboardView">
        <Container>
          <br />
          <Typography variant="h1" sx={{ fontSize: "3em" }}>
            Dashboard
          </Typography>
          <br />

          {/* Show error */}
          {error && <Alert severity="error">{error}</Alert>}

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Order Ref</TableCell>
                  <TableCell align="right">Customer</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Phone</TableCell>
                  <TableCell align="right">Cost</TableCell>
                  <TableCell align="right">Items</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.orderRef}
                    </TableCell>
                    <TableCell align="right">{row.customerName}</TableCell>
                    <TableCell align="right">{row.customerEmail}</TableCell>
                    <TableCell align="right">{row.customerPhone}</TableCell>
                    <TableCell align="right">${row.totalCost}</TableCell>
                    <TableCell align="right">{row.cartItems.length}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* {data && data.testContent.map(t => <h3 key={t.propertyOne}>{t.propertyOne}</h3>)} */}

          <br />
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
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default DashboardView;
