import { faker } from '@faker-js/faker'
import config from '../configs/general.config.js'
import axios from 'axios'
class ProductFactory {
  static async create () {
    try {
      const product = {
        name: faker.commerce.product(),
        price: faker.datatype.number({ min: 10, max: 500 }),
        description: faker.commerce.productDescription(),
        provider: faker.company.name(),
        stock: faker.datatype.number({ min: 0, max: 1000 }),
        specs: {
          color: faker.color.human(),
          size: faker.datatype.number({ min: 1, max: 100 }),
          weight: faker.datatype.number({ min: 1, max: 1000 }),
          width: faker.datatype.number({ min: 1, max: 1000 })
        }
      }
      const { data } = await axios.post(`${config.app.url}/products`, product, {
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYzM2RjYmJmNjM1NmI4YTgzMTY0ZmE4NSIsInJvbGUiOiJhZG1pbiJ9.Vd_kuwGXb9jlO1GKlXyLec_FjJP6c4rYZo81bl05QJs'
        }
      })
      console.log(data)
      return product
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default ProductFactory
