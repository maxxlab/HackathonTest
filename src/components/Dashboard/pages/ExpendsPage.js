import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AddIncome from "../../widgets/ExpendsWidgets/AddIncome";
import AddExpend from "../../widgets/ExpendsWidgets/AddExpend";
import TotalProfit from "../../widgets/ExpendsWidgets/TotalProfit";
import TransactionHistoryWidget from "../../widgets/DashboardWidgets/TransactionHistoryWidget";
import Balance from "../../widgets/DashboardWidgets/Balance";
import Comparison from "../../widgets/DashboardWidgets/Comparison";
import MakeLimitIncomeDonate from "../../widgets/ExpendsWidgets/MakeLimitIncomeDonate";

export default function ExpendsPage() {
  return (
    <Box sx={{ padding: "600px", flexGrow: 1 }}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <AddIncome />
        <AddExpend />
        <TotalProfit/>
      </Box>

      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <TransactionHistoryWidget width="591px" height="538px"/>
        <Balance height="400px"/>
      </Box>

      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Comparison width="591px"/>
        <MakeLimitIncomeDonate/>
      </Box>
    </Box>
  );
}
