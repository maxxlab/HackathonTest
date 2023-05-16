import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function Comparison(props) {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: props.width,
        minWidth: props.width,
        maxHeight: "270px",
        minHeight: "270px",
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Typography sx={{ color: '#3C3C43', opacity: '0.6' }}>Comparison</Typography>
        <Typography sx={{ fontSize: '16pt' }}>2021 (38,079$)</Typography>
      </CardContent>
    </Card>
  );
}
