import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Icon from '@mui/material/Icon';


export default function SettingsTile(props) {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "515px",
        minWidth: "515px",
        maxHeight: "80px",
        minHeight: "80px",
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{display: 'flex'}}>
            <LocalPhoneIcon sx={{marginRight: '20px', fontSize: '20pt'}}/>
            <Typography>{props.title}</Typography>
          </Box>

          <Typography>{props.value}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
