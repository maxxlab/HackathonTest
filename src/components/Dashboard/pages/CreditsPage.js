import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Credit from "../../widgets/CreditsWidgets/Credit";
import Deposit from "../../widgets/CreditsWidgets/Deposit";
import Bank from "../../widgets/CreditsWidgets/Bank";
import Comparison from "../../widgets/DashboardWidgets/Comparison";
import TransactionHistoryWidget from "../../widgets/DashboardWidgets/TransactionHistoryWidget";
import ListOfBanks from "../../widgets/CreditsWidgets/ListOfBanks";

export default function CreditsPage() {
  return (
    <Box sx={{ padding: "20px", flexGrow: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Credit />
        <Deposit />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Bank />  
        <Bank />
      </Box>

      <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
        <Comparison width="504px" />
        <TransactionHistoryWidget width="504px" />
      </Box>

      <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
        <ListOfBanks />
        <ListOfBanks />
      </Box>
      

    </Box>
  );
}
