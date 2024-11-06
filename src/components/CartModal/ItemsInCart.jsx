import { useContext, useEffect } from "react";
import { cartCtx } from "../../store/shopping-context.jsx";
import CartItem from "./CartItem.jsx";
import { currencyFormatter } from "../../utils/currencyFormatter.js";

export default function ItemsInCart({ closeClickHandler, showNextModal }) {
  const { cartItems, calculateTotalPrice, total } = useContext(cartCtx);

  useEffect(() => {
    calculateTotalPrice();
  }, [calculateTotalPrice]);

  return (
    <div className={`cart`}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.length === 0 && (
          <li>
            <p>No items in cart</p>
          </li>
        )}

        {cartItems.length > 0 &&
          cartItems.map((meal) => {
            return (
              <li key={meal.id} className="cart-item">
                <CartItem
                  mealName={meal.mealName}
                  quantity={meal.quantity}
                  mealPrice={meal.mealPrice}
                  mealId={meal.id}
                />
              </li>
            );
          })}

        {cartItems.length > 0 && (
          <p className="cart-total">
            {currencyFormatter.format(+total.toFixed(2))}
          </p>
        )}

        <div className="modal-actions">
          <button className="text-button" onClick={closeClickHandler}>
            Close
          </button>
          {cartItems.length > 0 && (
            <button
              className="button"
              onClick={() => {
                closeClickHandler();
                showNextModal();
              }}
            >
              Go to Checkout
            </button>
          )}
        </div>
      </ul>
    </div>
  );
}
