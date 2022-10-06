export const appendSubTotal = (items = []) => {
  return items.map((item) => {
    return {
      ...item,
      subtotal: item.product.price * item.quantity
    }
  })
}

export const calculateOrderAmount = (items = []) => {
  return items.reduce((acc, item) => acc + item.subtotal, 0)
}
