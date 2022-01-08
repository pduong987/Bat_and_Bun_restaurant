import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useAuth } from '../../contexts/AuthContext';

const AdminOrderList = () => {
  const { currentUser } = useAuth();
  // This holds all the orders which we get from the API
  const [orders, setOrders] = useState(null);

  // The action is for the big dropdown on the dashboard
  // With this, we know what the user wants to do with the selected orders
  // At the moment this just allows us to select a bunch of orders and change
  // the status of the orders.
  const [action, setAction] = useState("");

  // This is an array of all the selected orders which we want to apply the status update to.
  // Later we can do other things to the orders and possibly use this for other parts of the app.
  const [selectedOrders, setSelectedOrders] = useState(null);

  useEffect(() => {
    axios.get('/orders', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser.accessToken}`
      }
    })
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

      // Set our state with the orders we found
      setOrders(rows || []);
    })
    .catch((error) => {
      console.error(error);
    });

    // See here. We do not have a condition, as we only want to run once.
  }, []);

  // As we are using Data Grid, we need to define our columns
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

  // This fires eveyr time the user selects an order.
  // The lists of orders is updated which we can then apply actions to.
  const handleOrderSelection = (selected) => {
    setSelectedOrders(selected);
  };

  // This is when someone clicks on the "Go" button to perform the
  // action on the selected orders
  const handleAction = (event) => {
    setAction(event.target.value);
  };

  // This is the actual logic which gets called when we perform the action
  const handleActionDo = (event) => {
    console.log("Running action: " + action + " : " + selectedOrders);

    // We must have a selected action and atleast one order to run this code.
    // Otherwise there is nothing to do :)
    if (action && selectedOrders && selectedOrders.length > 0) {
      selectedOrders.forEach((orderId) => {
        console.log("Updating Order: " + orderId);

        const newStatusMap = {};

        // Set the status based on the selected action
        if (action === "mark-as-fulfilled") {
          newStatusMap.orderStatus = "Fulfilled";
        } else if (action === "mark-as-processing") {
          newStatusMap.orderStatus = "Processing...";
        } else if (action === "mark-as-cancelled") {
          newStatusMap.orderStatus = "Cancelled";
        }

        // Call the API to update the status for each of the selected items
        axios
          .put("/orders/" + orderId, newStatusMap, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${currentUser.accessToken}`
            }
          })
          .then((result) => {
            // IMPORTANT: To ensure we update the view, we get all orders again
            // this is not very efficient but should be fine if there are only a few orders (<100)
            axios
              .get("/orders", {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${currentUser.accessToken}`
                }
              })
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

  // Provided we have an array we will show them in the DataGrid
  // Otherwise we just show a Loading... sign
  if (Array.isArray(orders)) {
    return (
      <div id="DashboardView">
        <Container>
          <br />
          <Typography variant="h1" sx={{ fontSize: "3em" }}>
            Order List
          </Typography>
          <br />

          {/* Our Dropdown for the action and button to do things */}
          <FormControl fullWidth>
            <InputLabel id="set-action-select-label">Action</InputLabel>
            <Select
              labelId="set-action-select-label"
              id="set-action-select"
              value={action}
              label="Action"
              onChange={handleAction}
            >
              <MenuItem value={"mark-as-fulfilled"}>Mark as Fulfilled</MenuItem>
              <MenuItem value={"mark-as-processing"}>
                Mark as Processing
              </MenuItem>
              <MenuItem value={"mark-as-cancelled"}>Mark as Cancelled</MenuItem>
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

          {/* Our really cool data grid :) */}
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
        </Container>
      </div>
    );
  } else {
    return (
      <Typography variant="h1" sx={{ fontSize: "3em" }}>
        Loading...
      </Typography>
    );
  }
}

export default AdminOrderList;
