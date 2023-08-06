import { Box, useMediaQuery } from "@mui/material";

import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  const isNotMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Welcome to your simple bar chart" />
      <Box height="75vh">
        <BarChart isDashboard={isNotMobile} />
      </Box>
    </Box>
  );
};

export default Bar;
