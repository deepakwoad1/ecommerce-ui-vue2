import OrderApi from "@/apis/modules/order.api";
import { mapToOrderItem, normalizeOrder } from "@/utils/order.helper";

/**
 * Create a new order from cart items
 */
export async function createOrder(cartItems, shipping, paymentMethod) {
  if (!cartItems.length) throw new Error("Cart is empty");
//   if (!user?.id) throw new Error("User not logged in");

  const payload = {
    // userId: user.id,
    items: cartItems.map(mapToOrderItem),
    shippingAddress: shipping,
    paymentMethod,
  };

  const response = await OrderApi.create(payload);
  return normalizeOrder(response.data);
}
