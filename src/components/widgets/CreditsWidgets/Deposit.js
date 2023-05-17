import React from 'react';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function Deposit() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "504px",
        minWidth: "504px",
        minHeight: "312px",
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: '16pt',  }}>Deposit</Typography>
        
      </CardContent>
    </Card>
  )
}
