import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function SavingsGoals() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "623px",
        minWidth: "600px",
        maxHeight: "314px",
        borderRadius: "20px",
        boxShadow: 12,
        margin: 2,
        border: "1px solid black",
      }}
    >
      <CardContent>
        <Typography sx={{ marginBottom: "15px", color: '#3C3C43', opacity: '0.6' }}>My Saving Goals</Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}
