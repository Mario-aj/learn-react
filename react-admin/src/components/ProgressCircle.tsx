import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

type Props = {
  progress?: number;
  size?: string;
};
const ProgressCircle = ({ progress = 0.75, size }: Props) => {
  if (progress < 0 || progress > 1) {
    throw new Error("progress must be between 0 and 1");
  }

  const thtme = useTheme();
  const colors = tokens(thtme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
        conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
        ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
