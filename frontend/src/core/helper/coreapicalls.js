import { API } from "../../backend";

export const getProducts = () => {
  console.log(`${API}/products`);
  return fetch(`${API}/products`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
