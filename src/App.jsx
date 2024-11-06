import { useRef } from "react";

import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import ShoppingContext from "./store/shopping-context.jsx";
import Modal from "./components/Modal.jsx";
import ItemsInCart from "./components/CartModal/ItemsInCart.jsx";
import Checkout from "./components/CheckoutModal/Checkout.jsx";
import Message from "./components/MessageModal/Message.jsx";

function App() {
  const checkCartItems = useRef();
  const checkoutCart = useRef();
  const messageCart = useRef();

  const showCartItemsModal = () => {
    checkCartItems.current.open();
  };

  const showCheckoutCart = () => {
    checkoutCart.current.open();
  };

  const showMessageCart = () => {
    messageCart.current.open();
  };

  const closeCartItemsModal = () => {
    checkCartItems.current.close();
  };

  const closeCheckoutCart = () => {
    checkoutCart.current.close();
  };

  const closeMessageCart = () => {
    messageCart.current.close();
  };

  return (
    <ShoppingContext>
      <Modal ref={checkCartItems}>
        <ItemsInCart
          closeClickHandler={closeCartItemsModal}
          showNextModal={showCheckoutCart}
        />
      </Modal>
      <Modal ref={checkoutCart}>
        <Checkout
          closeClickHandler={closeCheckoutCart}
          messageCartHandler={showMessageCart}
        />
      </Modal>
      <Modal ref={messageCart}>
        <Message closeClickHandler={closeMessageCart} />
      </Modal>

      <Header showModalHandler={showCartItemsModal} />
      <Main />
    </ShoppingContext>
  );
}

export default App;
