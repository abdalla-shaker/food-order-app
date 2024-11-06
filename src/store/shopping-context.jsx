import { createContext, useState, useCallback } from "react";

export const cartCtx = createContext({
  handleAddingItem: () => {},
  handleRemoveItem: () => {},
  handleQuantityChange: () => {},
  calculateTotalPrice: () => {},
  clearCartItems: () => {},
  total: +"",
  cartItems: [],
});

export default function ShoppingContext({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddingItem = (name, price, id) => {
    const itemIsAdded = cartItems.find((item) => item.id === id);

    if (itemIsAdded) {
      return;
    }

    setCartItems((prevCartItem) => {
      const newMealItem = {
        mealName: name,
        mealPrice: price,
        quantity: 1,
        id: id,
      };

      return [...prevCartItem, newMealItem];
    });
  };

  const handleRemoveItem = useCallback(
    function handleRemoveItem(id) {
      const filteredCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== id
      );

      setCartItems(filteredCartItems);
    },
    [cartItems]
  );

  const handleQuantityChange = useCallback(function handleQuantityChange(
    mealId,
    newQuantity
  ) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === mealId ? { ...item, quantity: newQuantity } : item
      )
    );
  },
  []);
  const calculateTotalPrice = useCallback(() => {
    const totalPrice = cartItems.reduce((sum, item) => {
      return sum + item.quantity * item.mealPrice;
    }, 0);

    setTotal(totalPrice);
  }, [cartItems]);

  const clearCartItems = () => {
    setCartItems([]);
  };

  const value = {
    handleAddingItem,
    handleRemoveItem,
    handleQuantityChange,
    calculateTotalPrice,
    clearCartItems,
    total,
    cartItems,
  };

  return <cartCtx.Provider value={value}>{children}</cartCtx.Provider>;
}
