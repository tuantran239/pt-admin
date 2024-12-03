import AuthLayout from "../../layouts/auth.layout";
import Register from "../../components/register";
import { useTranslation } from "@refinedev/core";

export const RegisterPage = () => {
  const { translate } = useTranslation();

  return (
    <AuthLayout title={translate("pages.register.title")}>
      <Register />
    </AuthLayout>
  );
};
