import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const useScreen = () => {
  const theme = useTheme();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
};

export default useScreen;
