import { APP_TOKEN } from "@env";

export const AxiosConfig = {
  headers: {
    Authorization: `${APP_TOKEN}`,
    "Content-Type": "application/json",
  },
};
