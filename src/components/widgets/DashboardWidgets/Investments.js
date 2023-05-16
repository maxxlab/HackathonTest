import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function Investments() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "320px",
        minWidth: "320px",
        maxHeight: "314px",
        minHeight: "310px",
        borderRadius: "20px",
        marginRight: '10px'
      }}
    >
      <CardContent>
        <Typography sx={{fontSize: '24pt', marginBottom: "15px", color: '#3C3C43', opacity: '0.6' }}>Investments</Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}
