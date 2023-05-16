import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function Balance(props) {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "430px",
        minWidth: "430px",
        minHeight: "406px",
        maxHeight: props.height,
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: '16pt', color: '#3C3C43', opacity: '0.6' }}>Balance</Typography>
        <Typography sx={{fontSize: '27pt'}}>5.435,654$</Typography>
        <Typography sx={{marginBottom: '15px',fontSize: '16pt'}}>May</Typography>
        
        <Divider />
      </CardContent>
    </Card>
  );
}
