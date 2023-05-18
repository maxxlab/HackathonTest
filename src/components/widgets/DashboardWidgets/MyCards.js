import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function MyCards() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "560px",
        minWidth: "560px",
        minHeight: "316px",
        borderRadius: "20px",
        boxShadow: 12,
        margin: 2,
        border: "1px solid black",
      }}
    >
      <CardContent>
        <Typography sx={{ marginBottom: "15px", fontSize: '24pt' }}>My Cards</Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}
