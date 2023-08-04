import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { ExpandMore } from "@mui/icons-material";
import { mockQuestions } from "../../data/mockData";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      {mockQuestions.map(({ question, answer }) => (
        <Accordion defaultExpanded key={question}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
