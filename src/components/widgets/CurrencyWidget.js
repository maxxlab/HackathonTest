import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
import React from "react";
import { SvgIcon } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function CurrencyWidget() {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        width: {
          xs: 404,
          sm: 404,
          md: 304,
          lg: 204,
          xl: 204,
        },
        height: "84px",
        marginTop: '15px'
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <AttachMoneyIcon sx={{ fontSize: 40 }} />
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '20px'}}>
          <Typography>USD</Typography>
          <Typography sx={{ fontSize: 24 }}>37.70</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
