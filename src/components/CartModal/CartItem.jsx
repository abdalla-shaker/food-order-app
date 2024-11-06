import { useContext, useEffect } from "react";
import { cartCtx } from "../../store/shopping-context.jsx";
import { currencyFormatter } from "../../utils/currencyFormatter.js";

export default function CartItem({ mealName, quantity, mealPrice, mealId }) {
  const { handleRemoveItem, handleQuantityChange } = useContext(cartCtx);

  const addition = () => {
    quantity += 1;
    handleQuantityChange(mealId, quantity);
  };

  const subtraction = () => {
    quantity -= 1;
    handleQuantityChange(mealId, quantity);
  };

  useEffect(() => {
    if (quantity < 1) {
      handleRemoveItem(mealId);
    }
  }, [handleRemoveItem, mealId, quantity]);

  return (
    <>
      <p>
        {mealName} - {quantity} x {currencyFormatter.format(mealPrice)}
      </p>
      <div className="cart-item-actions">
        <button onClick={subtraction}>-</button>
        {quantity}
        <button onClick={addition}>+</button>
      </div>
    </>
  );
}
