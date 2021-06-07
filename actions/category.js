import { getCategories } from "../utils/category";

export const UPDATE_CATEGORY = "UPDATE_CATEGORY";

export const fetchCategories = () => () => {
  return new Promise((resolve, reject) => {
    getCategories()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
