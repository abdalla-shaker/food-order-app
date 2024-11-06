export async function placeOrders(orderData) {
  const request = await fetch("https://abdalla-shaker.github.io/food-order-app//orders", {
    method: "POST",
    body: JSON.stringify({ order: orderData }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = request.json();

  if (!request.ok) {
    throw new Error("Failed setting order");
  }

  return resData;
}
