import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CurrencyWidget from "../../widgets/CurrencyWidget";
import MyCards from "../../widgets/MyCards";
import ProfitWidget from "../../widgets/ProfitWidget";
import Balance from "../../widgets/Balance";
import SavingsGoals from "../../widgets/SavingsGoals";
import TransactionHistoryWidget from "../../widgets/TransactionHistoryWidget";
import Grid from '@mui/material/Grid';

export default function DashboardPage() {
  return (
    <Box sx={{ padding: "20px", flexGrow: 1 }}>
      
      {/* Currency */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "30px",
          flexWrap: 'wrap'
        }}
      >
        <CurrencyWidget />
        <CurrencyWidget />
        <CurrencyWidget />
        <CurrencyWidget />
      </Box>

      {/* My Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <MyCards />
        <ProfitWidget />
      </Box>

      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Balance />
        <SavingsGoals />
      </Box>

      <TransactionHistoryWidget/>
    </Box>
  );
}
