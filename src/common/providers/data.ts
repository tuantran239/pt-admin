import nestjsCrudDataProvider from "@refinedev/nestjsx-crud";
import { API_URL } from "../constants/api";

export const dataProvider = nestjsCrudDataProvider(API_URL);
