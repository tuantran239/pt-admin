import type { AuthProvider } from "@refinedev/core";
import { ResponseData } from "../types";
import axios from "axios";
import { API_URL } from "../constants/api";

export const TOKEN_KEY = "refine-auth";

export interface IRegisterParams {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}

export const authProvider: AuthProvider = {
  login: async (response: ResponseData) => {
    const { success, message, data } = response;

    if (success) {
      localStorage.setItem(TOKEN_KEY, data.token);
      return {
        success: true,
        redirectTo: "/",
      };
    }

    return {
      success: false,
      error: {
        name: "LoginError",
        message,
      },
    };
  },

  register: async (params: IRegisterParams) => {
    const { success, message } = (await axios.post(
      `${API_URL}/auth/register`,
      params
    )) as ResponseData;

    if (success) {
      return {
        success: true,
        redirectTo: "/login",
      };
    }

    return {
      success: false,
      error: {
        name: "LoginError",
        message,
      },
    };
  },

  logout: async () => {
    localStorage.removeItem(TOKEN_KEY);

    return {
      success: true,
      redirectTo: "/login",
    };
  },

  check: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/login",
    };
  },

  getPermissions: async () => null,

  getIdentity: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        id: 1,
        name: "John Doe",
        avatar: "https://i.pravatar.cc/300",
      };
    }
    return null;
  },

  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
