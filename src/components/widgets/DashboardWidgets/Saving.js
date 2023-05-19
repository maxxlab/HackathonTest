import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import "./styles/Savings.css"

export default function Saving() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "45%",
        minWidth: "45%",
        maxHeight: "314px",
        minHeight: "310px",
        borderRadius: "20px",
        boxShadow: 12,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
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
        <Box sx={{backgroundImage: "url('https://i.pinimg.com/564x/80/17/d9/8017d9ece1aeae2204d39ab451762fc3.jpg')",backgroundSize: 'contain',  backgroundRepeat: 'no-repeat',backgroundZoom: '50%',height:'220px',paddingTop:'30%', opacity:0.8, backgroundPosition: '55% 0'}}>
        <Typography sx={{
            fontSize: "30pt",
            marginBottom: "15px",
            color: "#3C3C43",
            opacity: "0.8",
            fontWeight: 600,
            // marginTop: '25%',
            marginLeft: '30%'
          }}>
            $1200
            </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
