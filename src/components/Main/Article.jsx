import { useContext } from "react";
import { cartCtx } from "../../store/shopping-context.jsx";
import { currencyFormatter } from "../../utils/currencyFormatter.js";

export default function Article({ src, name, price, description, id }) {
  const { handleAddingItem } = useContext(cartCtx);

  return (
    <article>
      <img src={`http://localhost:3000/${src}`} alt="meal image" />
      <h3>{name}</h3>
      <span className="meal-item-price">{currencyFormatter.format(price)}</span>
      <p className="meal-item-description">{description}</p>
      <p className="meal-item-actions">
        <button
          className="button"
          onClick={() => handleAddingItem(name, price, id)}
        >
          Add to cart
        </button>
      </p>
    </article>
  );
}
