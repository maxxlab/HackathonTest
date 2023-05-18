import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function CryptoBalance() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "555px",
        minWidth: "525px",
        maxHeight: "168px",
        minHeight: "168px",
        borderRadius: "20px",
      }}
    >
      <CardContent>
          <Typography>Akun utama</Typography>
          <Typography>Saldo saat ini</Typography>
          <Typography>Rp57.250.000</Typography>
      </CardContent>
    </Card>
  );
}
