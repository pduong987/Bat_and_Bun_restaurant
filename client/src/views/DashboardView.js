import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import { Container, Typography, Alert, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
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
        const rows = result.data.map((item) => {
          return {
            id: item._id,
            orderRef: item.orderRef,
            orderStatus: item.orderStatus,
            customerName: item.customerName,
            customerEmail: item.customerEmail,
            customerPhone: item.customerPhone,
            itemCount: item.cartItems.length,
            totalCost: item.totalCost,
            created: item.createdAt,
          };
        });
        setOrders(rows || []);
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

  const columns = [
    { field: "orderRef", headerName: "Order Reference", width: 130 },
    { field: "customerName", headerName: "Customer Name", width: 130 },
    { field: "customerEmail", headerName: "Customer Email", width: 130 },
    { field: "customerPhone", headerName: "Customer Phone", width: 130 },
    { field: "itemCount", headerName: "Items", width: 130 },
    { field: "totalCost", headerName: "Cost", width: 130 },
    { field: "created", headerName: "Created", width: 130 },
  ];

  /**
 *         id: item._id,
            orderRef: item.orderRef,
            orderStatus: item.orderStatus,
            customerName: item.customerName,
            customerEmail: item.customerEmail,
            customerPhone: item.customerPhone,
            itemCount: item.cartItems.length,
            totalCost: item.totalCost,
            created: item.createdAt,
 */

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

          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={orders}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>

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
