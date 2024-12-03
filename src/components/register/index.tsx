import { LoadingButton } from "@mui/lab";
import { Box, Link } from "@mui/material";
import { useRegister, useTranslation } from "@refinedev/core";
import { useForm } from "react-hook-form";
import InputField from "../ui/input-field";
import { IRegisterParams } from "../../common/providers/auth";
import PhoneNumberInput from "../ui/phone-number-input";

interface RegisterFormType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

const Register = () => {
  const { control, handleSubmit } = useForm<RegisterFormType>();

  const { translate } = useTranslation();
  const { mutate: register, isLoading } = useRegister<IRegisterParams>();

  const onSubmitHandler = handleSubmit(async (values) => {
    await register(
      { ...values },
      {
        onSuccess() {},
        onError() {},
      }
    );
  });

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
        name={"email"}
        label={translate("pages.register.emailInput")}
        variant="outlined"
        sx={{
          width: "100%",
        }}
      />
      <PhoneNumberInput
        control={control}
        name={"phoneNumber"}
        label={translate("pages.register.phoneNumberInput")}
        variant="outlined"
        sx={{
          width: "100%",
        }}
      />
      <InputField
        control={control}
        name={"username"}
        label={translate("pages.register.usernameInput")}
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
      <InputField
        control={control}
        name={"confirmPassword"}
        label={translate("pages.register.confirmPasswordInput")}
        variant="outlined"
        sx={{
          width: "100%",
        }}
        type={"password"}
      />
      <LoadingButton
        variant={"contained"}
        onClick={onSubmitHandler}
        loading={isLoading}
      >
        {translate("pages.register.title")}
      </LoadingButton>
      <Box sx={{ margin: "auto" }}>
        {translate("pages.register.haveAccount")}?{" "}
        <Link href="/login">{translate("pages.login.title")}</Link>
      </Box>
    </Box>
  );
};

export default Register;
