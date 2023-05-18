import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SettingsTile from "./SettingsTile";

export default function SettingsList() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "785px",
        minWidth: "515px",
        // maxHeight: "108px",
        // minHeight: "108px",
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <SettingsTile title="Password" value="***********" icon="password" />
          <SettingsTile title="Phone" value="+380******734" icon="phone" />
          <SettingsTile title="Email" value="+380******734" icon="email" />
          <SettingsTile title="Time Zone" value="+380******734" icon="time" />
        </Box>
      </CardContent>
    </Card>
  );
}
