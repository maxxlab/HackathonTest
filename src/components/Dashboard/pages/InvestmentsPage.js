import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ProfitWidget from "../../widgets/DashboardWidgets/ProfitWidget";
import TotalProfit from "../../widgets/ExpendsWidgets/TotalProfit";
import Crypto from "../../widgets/InvestsWidgets/Crypto";
import Comparison from "../../widgets/DashboardWidgets/Comparison";
import CryptoBalance from "../../widgets/InvestsWidgets/CryptoBalance";
import ListOfCryptos from "../../widgets/InvestsWidgets/ListOfCryptos"

export default function InvestmentsPage() {
  return (
    <Box sx={{ padding: "20px", flexGrow: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box >
          <ProfitWidget />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TotalProfit />
            <TotalProfit />
          </Box>
        </Box>

        <Box>
          <Crypto sx={{ display: "flex", justifyContent: "space-between" }}/>
          <Comparison/>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <CryptoBalance/>
        <CryptoBalance/>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <ListOfCryptos/>
        <ListOfCryptos/>
      </Box>
    </Box>
  );
}
