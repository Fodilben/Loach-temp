import { Form, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../component";
import { CustomFetch, FormaPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";
export const action =
  (store, queryClient) =>
  async ({ request }) => {
    // getting from data
    const formdata = await request.formData();
    const { name, address } = Object.fromEntries(formdata);
    //getting the store data
    const { orderTotal, numItemsInCart, cartItems } =
      store.getState().cartState;
    //getting the user
    const { user } = store.getState().userState;

    const info = {
      name,
      address,
      cartItems,
      numItemsInCart,
      chargeTotal: orderTotal,
      orderTotal: FormaPrice(orderTotal),
    };

    try {
      const response = await CustomFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success("order placed successfully");
      queryClient.removeQueries(["orders"]);
      store.dispatch(clearCart());
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };
const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput
        label="first name"
        name="name"
        type="text"
        defaultValue="fodil"
      />
      <FormInput
        label="address"
        name="address"
        type="text"
        defaultValue="media"
      />
      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </Form>
  );
};
export default CheckoutForm;
