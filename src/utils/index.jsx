import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";
export const CustomFetch = axios.create({
  baseURL: productionUrl,
});
export const FormaPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-DZ", {
    style: "currency",
    currency: "DZD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};
export const generateOpion = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
