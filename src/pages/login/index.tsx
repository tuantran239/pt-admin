import { useTranslation } from "@refinedev/core";
import Login from "../../components/login";
import AuthLayout from "../../layouts/auth.layout";

export const LoginPage = () => {
  const { translate } = useTranslation();

  return (
    <AuthLayout title={translate("pages.login.title")}>
      <Login />
    </AuthLayout>
  );
};
