export async function placeOrders(orderData) {
  const request = await fetch("http://localhost:3000/orders", {
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
