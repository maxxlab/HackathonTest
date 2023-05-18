import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function SettingsTile(props) {
  const icon = getIconFromName(props.icon);

  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "515px",
        minWidth: "515px",
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Box
           sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {icon}
            {/* <LocalPhoneIcon sx={{marginRight: '20px', fontSize: '20pt'}}/> */}
            <Typography>{props.title}</Typography>
          </Box>

          <Box>
            <Typography>{props.value}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

const getIconFromName = (iconName) => {
  switch (iconName) {
    case "phone":
      return <LocalPhoneIcon sx={{ marginRight: "20px", fontSize: "20pt" }} />;
    case "email":
      return <EmailIcon sx={{ marginRight: "20px", fontSize: "20pt" }} />;
    case "password":
      return <PasswordIcon sx={{ marginRight: "20px", fontSize: "20pt" }} />;

    default:
      return <AccessTimeIcon sx={{ marginRight: "20px", fontSize: "20pt" }} />;
    // all other supported icons
  }
};
