import { useContext } from "react";

import { cartCtx } from "../../store/shopping-context.jsx";
import logo from "/logo.jpg";

export default function Header({ showModalHandler }) {
  const { cartItems } = useContext(cartCtx);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <button className="text-button" onClick={showModalHandler}>
        Cart {cartItems.length > 0 && `(${cartItems.length})`}
      </button>
    </header>
  );
}
