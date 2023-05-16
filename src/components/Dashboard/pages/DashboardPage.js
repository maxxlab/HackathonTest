import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CurrencyWidget from "../../widgets/DashboardWidgets/CurrencyWidget";
import MyCards from "../../widgets/DashboardWidgets/MyCards";
import ProfitWidget from "../../widgets/DashboardWidgets/ProfitWidget";
import Balance from "../../widgets/DashboardWidgets/Balance";
import SavingsGoals from "../../widgets/DashboardWidgets/SavingsGoals";
import TransactionHistoryWidget from "../../widgets/DashboardWidgets/TransactionHistoryWidget";
import Grid from "@mui/material/Grid";
import Investments from "../../widgets/DashboardWidgets/Investments";
import Saving from "../../widgets/DashboardWidgets/Saving";
import Comparison from "../../widgets/DashboardWidgets/Comparison";

export default function DashboardPage() {
  return (
    <Box sx={{ padding: "20px", flexGrow: 1 }}>
      {/* Currency */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Balance />
        <SavingsGoals />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TransactionHistoryWidget width="430px" />
        <Box>
          <Box sx={{display: 'flex', marginTop: '-100px', justifyContent: 'justify'}}>
            <Investments />
            <Saving />
          </Box>

          <Comparison  />
        </Box>
      </Box>
    </Box>
  );
}
