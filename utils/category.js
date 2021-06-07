import axios from "axios";
import { AxiosConfig } from "../config/axios.config";
import { API_URL } from "@env";
import { handleError, handleSuccess } from "./globals";

export const getCategories = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`${API_URL}/api/category`, AxiosConfig);
      resolve(handleSuccess(response));
    } catch (error) {
      reject(handleError(error));
    }
  });
};
