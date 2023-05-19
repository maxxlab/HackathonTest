import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import LineGraphdashboard from "../../Graphs/DashboardGrafs/LineGrah";
import "./styles/ProfitWidget.css"

export default function ProfitWidget() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "50%",
        minWidth: "43%",
        minHeight: "316px",
        borderRadius: "20px",
        boxShadow: 12,
        margin: 2,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent >
        <Typography className="title-prof" sx={{fontSize: 40, fontWeight: 600, marginLeft:2}}>23,654$</Typography>
        <Typography className="sub-prof" sx={{fontSize: 20,marginLeft:2, marginBottom: "15px", color: 'rgba(60, 60, 67, 0.6)' }}>Profit</Typography>
        <LineGraphdashboard/>
      </CardContent>
    </Card>
  );
}
