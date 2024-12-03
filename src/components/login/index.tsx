import { LoadingButton } from "@mui/lab";
import { Box, Checkbox, FormControlLabel, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import InputField from "../ui/input-field";
import { useTranslation } from "@refinedev/core";

interface LoginFormType {
  username: string;
  password: string;
}

const Login = () => {
  const { control, handleSubmit } = useForm<LoginFormType>();

  const { translate } = useTranslation();

  const onSubmitHandler = handleSubmit((values) => {});

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",  
        gap: 3,
        marginTop: 5,
        width: "85%",
        marginX: "auto",
      }}
    >
      <InputField
        control={control}
        name={"username"}
        label={translate("pages.login.usernameInput")}
        variant="outlined"
        sx={{
          width: "100%",
        }}
      />
      <InputField
        control={control}
        name={"password"}
        label={translate("pages.login.passwordInput")}
        variant="outlined"
        sx={{
          width: "100%",
        }}
        type={"password"}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label={translate("pages.login.rememberMe")}
        />
        <Link href="#">{translate("pages.login.forgotPassword")}?</Link>
      </Box>
      <LoadingButton variant={"contained"} onClick={onSubmitHandler}>
        {translate("pages.login.title")}
      </LoadingButton>
      <Box sx={{ margin: "auto" }}>
        {translate("pages.login.dontHaveAccount")}?{" "}
        <Link href="/register">{translate("pages.register.title")}</Link>
      </Box>
    </Box>
  );
};

export default Login;
