import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function Saving() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "320px",
        minWidth: "320px",
        maxHeight: "314px",
        minHeight: "310px",
        borderRadius: "20px",
        boxShadow: 12,
        border: "1px solid black",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "24pt",
            marginBottom: "15px",
            color: "#3C3C43",
            opacity: "0.6",
          }}
        >
          Saving
        </Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}
