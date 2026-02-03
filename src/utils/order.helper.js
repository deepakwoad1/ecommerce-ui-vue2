/**
 * Convert cart item (frontend) → order item (backend payload)
 */
export function mapToOrderItem(cartItem) {
  return {
    productId: cartItem.productId || cartItem.id,
    quantity: cartItem.quantity,
  };
}

/**
 * Normalize backend order response → frontend-friendly format
 */
export function normalizeOrder(order) {
  return {
    id: order.id || order.orderId,
    status: order.status,
    totalAmount: order.totalAmount,
    createdAt: order.createdAt,
    items:
      order.items?.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      })) || [],
  };
}
