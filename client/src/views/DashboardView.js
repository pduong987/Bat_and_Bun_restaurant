import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Alert,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const DashboardView = ({ token }) => {
  const [error, setError] = useState("");

  const [orders, setOrders] = useState(null);
  const [action, setAction] = useState("");
  const [selectedOrders, setSelectedOrders] = useState(null);

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
            totalCost: "$" + item.totalCost,
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

  const columns = [
    { field: "orderRef", headerName: "Reference", width: 130 },
    { field: "orderStatus", headerName: "Status", width: 130 },
    { field: "customerName", headerName: "Name", width: 130 },
    { field: "customerEmail", headerName: "Email", width: 130 },
    { field: "customerPhone", headerName: "Phone", width: 130 },
    { field: "itemCount", headerName: "Items" },
    { field: "totalCost", headerName: "Cost", width: 90 },
    { field: "created", headerName: "Created", width: 130 },
  ];

  const handleOrderSelection = (selected) => {
    setSelectedOrders(selected);
  };

  const handleAction = (event) => {
    setAction(event.target.value);
  };

  const handleActionDo = (event) => {
    console.log("Running action: " + action + " : " + selectedOrders);

    if (action && selectedOrders && selectedOrders.length > 0) {
      selectedOrders.forEach((orderId) => {
        console.log("Updating Order: " + orderId);

        const newStatusMap = {};

        if (action === "mark-as-processed") {
          newStatusMap.orderStatus = "Processed";
        } else if (action === "mark-as-processing") {
          newStatusMap.orderStatus = "Processing";
        } else if (action === "mark-as-closed") {
          newStatusMap.orderStatus = "Closed";
        }

        axios
          .patch("http://0.0.0.0:5000/orders/" + orderId, newStatusMap)
          .then((result) => {
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
                    totalCost: "$" + item.totalCost,
                    created: item.createdAt,
                  };
                });
                setOrders(rows || []);
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((err) => {
            console.error(err);
          });
      });
    }
  };

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

          <br />
          <FormControl fullWidth>
            <InputLabel id="set-action-select-label">Action</InputLabel>
            <Select
              labelId="set-action-select-label"
              id="set-action-select"
              value={action}
              label="Action"
              onChange={handleAction}
            >
              <MenuItem value={"mark-as-processed"}>Mark as Processed</MenuItem>
              <MenuItem value={"mark-as-processing"}>
                Mark as Processing
              </MenuItem>
              <MenuItem value={"mark-as-closed"}>Mark as Closed</MenuItem>
            </Select>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              margin="normal"
              onClick={handleActionDo}
            >
              Go
            </Button>
          </FormControl>
          <br />
          <br />
          <br />

          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={orders}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection={true}
              onSelectionModelChange={handleOrderSelection}
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
