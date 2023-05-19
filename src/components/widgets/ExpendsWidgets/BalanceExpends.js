import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import BarCharDash from "../../Graphs/DashboardGrafs/BarChar";
import PieGraphExp from "../../Graphs/Expends/PieChart";

export default function BalanceExpends(props) {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "50%",
        minWidth: "43%",
        minHeight: "406px",
        maxHeight: props.height,
        borderRadius: "20px",
        boxShadow: 12,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)',
        paddingTop: 2,
        paddingLeft:4
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: '16pt', color: '#3C3C43', opacity: '0.6' }}>Balance</Typography>
        <Typography sx={{fontSize: '27pt', fontWeight:600}}>5.435,654$</Typography>
        <Typography sx={{marginBottom: '15px',fontSize: '16pt'}}>May</Typography>
        <Divider sx={{backgroundColor:'grey',height:3,opacity:0.1}}/>
        <PieGraphExp/>
      </CardContent>
      
    </Card>
  );
}
