import supertest from 'supertest'
import api from '../api.js'
import { faker } from '@faker-js/faker'
import * as db from '../configs/dbTest.config.js'
import {
  describe,
  expect,
  test,
  beforeAll,
  afterAll,
  afterEach
} from '@jest/globals'

const agent = supertest.agent(api)

beforeAll(async () => {
  await db.connect()
})
afterEach(async () => {
  await db.clear()
})
afterAll(async () => {
  await db.close()
})

describe('Register', () => {
  test('Call to /register', async () => {
    const response = await agent.post('/register').send({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number('#########'),
      password: faker.internet.password(),
      shippingAddress: {
        street: faker.address.street(),
        country: faker.address.country(),
        city: faker.address.city(),
        province: faker.address.state(),
        zip: faker.address.zipCode()
      }
    })
    expect(response.statusCode).toBe(201)
    expect(response.body.message).toBe('User created successfully')
    expect(response.body.password).toBeUndefined()
  })
})
