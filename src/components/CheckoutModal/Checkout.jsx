import { useContext, useState } from "react";
import { cartCtx } from "../../store/shopping-context.jsx";
import Form from "./Form.jsx";
import { placeOrders } from "../../http.js";
import { currencyFormatter } from "../../utils/currencyFormatter.js";

export default function Checkout({ closeClickHandler, messageCartHandler }) {
  const { total, cartItems, clearCartItems } = useContext(cartCtx);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const fd = new FormData(event.target);
    const formInputs = Object.fromEntries(fd.entries());

    const { street, city, email, name } = formInputs;

    if (
      email === "" ||
      !email.includes("@") ||
      name.trim() === "" ||
      street.trim() === "" ||
      city.trim() === ""
    ) {
      setError({
        status: true,
        message: "Please check your credentials as there is an error.",
      });
      return;
    } else {
      setError({
        status: false,
        message: "",
      });
    }

    const orderData = {
      customer: formInputs,
      items: cartItems,
      totalPrice: total,
    };

    try {
      const placeOrderMessage = await placeOrders(orderData);
      console.log(placeOrderMessage.message);
      clearCartItems();
    } catch (error) {
      setError({
        status: true,
        message: "Failed to place order. Please try again.",
      });
      console.error("Order placement error:", error);
    }

    setIsLoading(false);
  };

  return (
    <div className={`cart`}>
      <h2>Checkout</h2>
      <p>Total Amount: {currencyFormatter.format(+total.toFixed(2))}</p>
      {isLoading ? (
        <p>Placing your order...</p>
      ) : (
        <Form
          onSubmit={submitHandler}
          closeHandler={closeClickHandler}
          messageHandler={messageCartHandler}
          error={error}
        />
      )}
    </div>
  );
}
