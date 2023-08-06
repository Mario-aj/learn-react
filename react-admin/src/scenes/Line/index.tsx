import { Box, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  const isNotMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Welcome to your simple Line chart" />
      <Box height="75vh">
        <LineChart isDashboard={isNotMobile} />
      </Box>
    </Box>
  );
};

export default Line;
