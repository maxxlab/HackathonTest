import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

export default function Crypto() {
  const [crypto, setCrypto] = React.useState("");

  const handleChange = (event) => {
    setCrypto(event.target.value);
  };

  return (
    <>
      <Card
        sx={{
          marginTop: "30px",
          maxWidth: "100%",
          minWidth: "100%",
          minHeight: "100px",
          borderRadius: "20px",
          boxShadow: 12,
          marginTop: 2,
          background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
          
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Card sx={{ maxWidth: "60px", maxHeight: "60px" }}>
              <CardContent>
                <CurrencyBitcoinIcon />
              </CardContent>
            </Card>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormControl
                sx={{ width: "170px", marginBottom: "7px" }}
                size="small"
              >
                <InputLabel id="demo-simple-select-label">Crypto</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={crypto}
                  label="Crypto"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>BTC</MenuItem>
                  <MenuItem value={2}>ETH</MenuItem>
                  <MenuItem value={3}>RPL</MenuItem>
                  <MenuItem value={4}>MTC</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                sx={{ width: "170px" }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Typography>1%</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4FE4DB",
                  color: "white",
                  marginBottom: "7px",
                }}
              >
                Buy
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#EE4F31", color: "white" }}
              >
                Sell
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
