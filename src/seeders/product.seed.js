import ProductFactory from '../factories/product.factory.js'

export default async function () {
  // Create 100 products
  for (let i = 0; i < 100; i++) {
    await ProductFactory.create()
  }
}
