import { Box, Typography, useTheme } from "@mui/material";
import { wx } from "../common/utils/screen";
import { useColorMode } from "../contexts/color-mode";

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  const { sxMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          ...sxMode,
          width: theme.breakpoints.up("md") ? wx(25) : wx(90),
          borderRadius: 3,
          paddingY: 5,
        }}
      >
        <Typography
          variant={"h4"}
          sx={{
            marginX: 5,
          }}
        >
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
