import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function ProfitWidget() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "496px",
        minWidth: "496px",
        minHeight: "316px",
        borderRadius: "20px",
        boxShadow: 12,
        margin: 2,
        border: "1px solid black",
      }}
    >
      <CardContent>
        <Typography sx={{fontSize: '27pt'}}>23,654$</Typography>
        <Typography sx={{ marginBottom: "15px", color: '#3C3C43', opacity: '0.6' }}>Profit</Typography>
        
      </CardContent>
    </Card>
  );
}
