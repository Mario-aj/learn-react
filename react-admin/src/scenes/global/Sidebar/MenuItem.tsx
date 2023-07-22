import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import { tokens } from "../../../theme";

type Props = {
  title: string;
  path: string;
  icon?: React.ReactNode;
  selected: string;
  setSelected: (title: string) => void;
};

const Item = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { title, icon, path, selected, setSelected } = props;

  return (
    <MenuItem
      active={title === selected}
      onClick={() => setSelected(title)}
      style={{ color: colors.grey[100] }}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={path} />
    </MenuItem>
  );
};

export default Item;
