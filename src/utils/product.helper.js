export function formatPrice(price) {
  return `$ ${price}`;
}

export function normalizeProduct(product) {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.imageUrl,
    description: product.description,
  };
}

export function normalizeProductList(products = []) {
  return products.map(normalizeProduct);
}
