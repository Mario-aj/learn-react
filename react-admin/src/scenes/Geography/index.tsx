import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

const Geography = () => {
  const isNotMobile = useMediaQuery("(min-width:600px)");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="Gegraphy Chart"
        subtitle="Welcome to your simple Geography chart"
      />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        mt="20px"
      >
        <GeographyChart isDashboard={isNotMobile} />
      </Box>
    </Box>
  );
};

export default Geography;
